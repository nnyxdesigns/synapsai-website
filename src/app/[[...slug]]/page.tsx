import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/site-ui';
import { Home } from '@/components/home';
import { Interior, pageTitle, pageDescription } from '@/components/interior';
import { copy, localPath, publicPaths, resolveRoute, site, published } from '@/lib/site';
import {
  availableInsights,
  availableInsightsForLocale,
  insightPaths,
  insightPathsForLocale,
  insightsNavigationVisible,
  insightAuthors,
} from '@/lib/insights';
import { InsightArticle, InsightsIndex } from '@/components/insights';
import { englishOnlyPaths } from '@/lib/ecosystem';
import { socialProfiles } from '@/lib/company';
import { withSeo, breadcrumbData } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() {
  const paths = [
    ...publicPaths,
    ...publicPaths.map((path) => localPath('fr', path)),
    ...englishOnlyPaths,
    ...insightPaths(published),
    ...insightPathsForLocale('fr', published),
  ];
  return [...new Set(paths)].map((path) => ({
    slug: path === '/' ? [] : path.slice(1).split('/'),
  }));
}
type Props = { params: Promise<{ slug?: string[] }> };
async function baseMetadata({ params }: Props): Promise<Metadata> {
  const { locale, path } = resolveRoute((await params).slug);
  const localeInsightEntries = availableInsightsForLocale(locale, published);
  if (
    path === '/insights' ||
    localeInsightEntries.some((item) => path === `/insights/${item.slug}`)
  ) {
    const entry = localeInsightEntries.find((item) => path === `/insights/${item.slug}`);
    const hasFrenchAlternate = insightPathsForLocale('fr', published).includes(
      localPath('fr', path),
    );
    const title =
      entry?.seo.title ||
      (locale === 'fr'
        ? 'Insights — IA, logiciel et pensée produit'
        : 'Insights — AI, software & product thinking');
    const description =
      entry?.seo.description ||
      (locale === 'fr'
        ? 'Les perspectives de SynapsAi sur la conception d’IA, de logiciels et de produits numériques utiles, à partir de besoins réels.'
        : 'Perspectives from SynapsAi on building useful AI, software, and digital products around real needs.');
    return {
      title,
      description,
      robots: { index: published && (!entry || entry.status === 'published'), follow: published },
      alternates: {
        canonical: localPath(locale, path),
        languages: {
          en: localPath('en', path),
          ...(hasFrenchAlternate ? { fr: localPath('fr', path) } : {}),
          'x-default': localPath('en', path),
        },
      },
      openGraph: entry
        ? {
            type: 'article',
            title,
            description,
            url: localPath(locale, path),
            siteName: site.name,
            locale: locale === 'fr' ? 'fr_FR' : 'en_US',
            modifiedTime: entry.updatedAt,
            ...(entry.publishedAt ? { publishedTime: entry.publishedAt } : {}),
            authors: entry.authors.map((id) => insightAuthors[id].name),
            tags: entry.tags,
            images: [{ url: entry.seo.ogImage, width: 1200, height: 630, alt: entry.title }],
          }
        : {
            type: 'website',
            title,
            description,
            url: localPath(locale, path),
            siteName: site.name,
            locale: locale === 'fr' ? 'fr_FR' : 'en_US',
          },
      twitter: {
        card: entry ? 'summary_large_image' : 'summary',
        title,
        description,
        ...(entry ? { images: [entry.seo.ogImage] } : {}),
      },
    };
  }
  const englishOnly = locale === 'en' && englishOnlyPaths.includes(path);
  if (!publicPaths.includes(path) && !englishOnly)
    return { title: '404', robots: { index: false, follow: false } };
  const title = path === '/' ? `${copy[locale].hero.join(' ')}` : pageTitle(path, locale);
  const description = path === '/' ? copy[locale].intro : pageDescription(path, locale);
  return {
    title,
    description,
    alternates: {
      canonical: localPath(locale, path),
      languages: {
        en: localPath('en', path),
        ...(englishOnly ? {} : { fr: localPath('fr', path) }),
        'x-default': localPath('en', path),
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: localPath(locale, path),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      ...(englishOnly ? {} : { alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR' }),
    },
    twitter: { card: 'summary', title, description },
  };
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { path, locale } = resolveRoute((await props.params).slug);
  return withSeo(await baseMetadata(props), path, locale);
}
export default async function Page({ params }: Props) {
  const { locale, path } = resolveRoute((await params).slug);
  const localeInsightEntries = availableInsightsForLocale(locale, published);
  const isInsight =
    path === '/insights' || localeInsightEntries.some((item) => path === `/insights/${item.slug}`);
  const entry = isInsight
    ? localeInsightEntries.find((item) => path === `/insights/${item.slug}`)
    : undefined;
  const showInsights = insightsNavigationVisible(published);
  const englishOnly = locale === 'en' && englishOnlyPaths.includes(path);
  const frenchRouteAvailable =
    publicPaths.includes(path) ||
    insightPathsForLocale('fr', published).includes(localPath('fr', path));
  if (!publicPaths.includes(path) && !isInsight && !englishOnly) notFound();
  return (
    <div id="top">
      {(path === '/' || path === '/company') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${site.url}/#organization`,
              name: site.name,
              url: site.url,
              email: site.email,
              sameAs: socialProfiles.filter((p) => p.label !== 'WhatsApp').map((p) => p.url),
              logo: `${site.url}/media/brand/synapsai-logo.svg`,
              description: copy[locale].intro,
            }),
          }}
        />
      )}
      {path === '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': site.url + '/#website',
              name: site.name,
              url: site.url,
              publisher: { '@id': site.url + '/#organization' },
            }),
          }}
        />
      )}
      {path !== '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbData(
                path,
                entry?.title || (path === '/insights' ? 'Insights' : pageTitle(path, locale)),
                locale,
              ),
            ).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <a className="skip-link" href="#main">
        {locale === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>
      <Header
        key={`${locale}:${path}`}
        locale={locale}
        path={path}
        showInsights={showInsights}
        englishOnly={locale === 'en' && !frenchRouteAvailable}
      />
      <main id="main">
        {isInsight ? (
          entry ? (
            <InsightArticle entry={entry} locale={locale} />
          ) : (
            <InsightsIndex entries={localeInsightEntries} locale={locale} />
          )
        ) : path === '/' ? (
          <Home locale={locale} />
        ) : (
          <Interior locale={locale} path={path} />
        )}
      </main>
      <Footer locale={locale} showInsights={showInsights} />
    </div>
  );
}

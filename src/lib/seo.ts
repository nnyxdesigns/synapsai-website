import type { Metadata } from 'next';
import { site, published, type Locale, localPath } from './site';
import pages from './seo-pages.json';

export const seoPages: Record<
  string,
  { title: string; description: string; headline: string; image: string; intent: string }
> = pages;
export const absoluteUrl = (path: string) =>
  new URL(path === '/' ? '' : path, site.url).href.replace(/\/$/, '');
export function withSeo(metadata: Metadata, path: string, locale: Locale): Metadata {
  const image = `/media/og/${locale === 'en' ? seoPages[path]?.image || 'default' : 'default'}.png`;
  const title = locale === 'en' && seoPages[path] ? seoPages[path].title : metadata.title;
  const description =
    locale === 'en' && seoPages[path] ? seoPages[path].description : metadata.description;
  return {
    ...metadata,
    title,
    description,
    robots: metadata.robots || { index: published, follow: published },
    openGraph: {
      ...metadata.openGraph,
      title: title as string,
      description: description || '',
      images:
        metadata.openGraph && 'images' in metadata.openGraph && metadata.openGraph.images
          ? metadata.openGraph.images
          : [
              {
                url: absoluteUrl(image),
                width: 1200,
                height: 630,
                alt: `${site.name} — ${typeof title === 'string' ? title : site.name}`,
              },
            ],
    },
    twitter: {
      ...metadata.twitter,
      card: 'summary_large_image',
      title: title as string,
      description: description || '',
      images:
        metadata.twitter && 'images' in metadata.twitter && metadata.twitter.images
          ? metadata.twitter.images
          : [absoluteUrl(image)],
    },
  };
}
export function breadcrumbData(path: string, title: string, locale: Locale) {
  const parts = path.split('/').filter(Boolean);
  const urls = ['/', ...parts.map((_, i) => '/' + parts.slice(0, i + 1).join('/'))];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: urls.map((url, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name:
        index === 0
          ? locale === 'fr'
            ? 'Accueil'
            : 'Home'
          : index === urls.length - 1
            ? title
            : seoPages[url]?.title || parts[index - 1],
      item: absoluteUrl(localPath(locale, url)),
    })),
  };
}

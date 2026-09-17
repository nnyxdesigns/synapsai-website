import Link from 'next/link';
import Image from 'next/image';
import { InsightsBrowser } from './insights-browser';
import { ArticleShare } from './article-share';
import { pressEntries } from '@/lib/press';
import { insightCategories } from '@/lib/insights';
import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import {
  type InsightEntry,
  insightAuthors,
  readingMinutes,
  availableInsights,
} from '@/lib/insights';
import { localPath, published, site } from '@/lib/site';
import type { Locale } from '@/lib/site';
import type { ArticleSection } from '@/content/insights/types';

function ArticleMeta({ entry, locale = 'en' }: { entry: InsightEntry; locale?: Locale }) {
  const date = entry.publishedAt || entry.updatedAt;
  return (
    <div className="article-meta">
      <span>
        {entry.publishedAt ? '' : 'Updated '}
        <time dateTime={date}>
          {new Date(`${date}T12:00:00Z`).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
      </span>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes(entry)} min read</span>
    </div>
  );
}
function AuthorList({ entry, locale = 'en' }: { entry: InsightEntry; locale?: Locale }) {
  return (
    <div className="insight-authors">
      {entry.authors.map((id) => {
        const author = insightAuthors[id];
        return (
          <Link key={id} href={localPath(locale, '/company/team')} className="insight-person">
            <Image
              src={author.portrait
                .replace('/media/team/', '/media/insights/')
                .replace('.png', '-avatar.webp')}
              width={44}
              height={44}
              alt=""
              unoptimized
            />
            <span>
              <strong>{author.name}</strong>
              <span>{author.role}, SynapsAi</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
function HeroVisual({ entry, priority = false }: { entry: InsightEntry; priority?: boolean }) {
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet={entry.hero.src.replace('.svg', '-mobile.svg')} />
      <Image
        className="insight-art"
        src={entry.hero.src}
        width={1200}
        height={660}
        alt={entry.hero.alt}
        priority={priority}
        sizes="(max-width: 767px) 100vw, 1000px"
      />
    </picture>
  );
}
function InsightCard({
  entry,
  showAuthor = false,
  locale = 'en',
}: {
  entry: InsightEntry;
  showAuthor?: boolean;
  locale?: Locale;
}) {
  return (
    <article className="insight-card">
      <Link href={localPath(locale, `/insights/${entry.slug}`)} className="insight-card-link">
        <HeroVisual entry={entry} />
        <div className="insight-card-copy">
          <span className="article-category">{entry.category}</span>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
          <ArticleMeta entry={entry} locale={locale} />
          {showAuthor && (
            <span className="insight-preview-author">
              {entry.authors.map((id) => insightAuthors[id].name).join(' & ')}
            </span>
          )}
          <span className="insight-card-arrow" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </Link>
    </article>
  );
}
export function InsightsPreview() {
  const entries = availableInsights(published).slice(0, 3);
  if (!entries.length) return null;
  return (
    <section className="container home-insights">
      <div className="section-heading">
        <div>
          <span className="eyebrow">05 / IDEAS FROM THE WORK</span>
          <h2>Thinking worth sharing.</h2>
        </div>
        <Link href="/insights" className="text-link">
          View all insights
          <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="insight-grid">
        {entries.map((entry) => (
          <InsightCard key={entry.slug} entry={entry} showAuthor />
        ))}
      </div>
    </section>
  );
}
export function InsightsIndex({
  entries,
  locale = 'en',
}: {
  entries: InsightEntry[];
  locale?: Locale;
}) {
  const featured = entries.find((e) => e.featured) || entries[0];
  const fr = locale === 'fr';
  return (
    <div className="insights-index container">
      <header className="insights-heading">
        <span className="eyebrow">
          <span className="accent-dash" />
          {fr ? 'RÉFLEXIONS ISSUES DU TRAVAIL' : 'THINKING FROM THE WORK'}
        </span>
        <h1>
          Insights<span className="insights-title-dot">.</span>
        </h1>
        <p>
          {fr
            ? 'Idées, questions produit et perspectives d’ingénierie pour construire une IA utile dans les contextes africains.'
            : 'Ideas, product questions and engineering perspectives on building useful AI in African contexts.'}
        </p>
      </header>
      <InsightsBrowser
        categories={insightCategories}
        featuredId={featured?.slug}
        featured={
          featured && (
            <section className="insight-feature">
              <div>
                <div className="article-category">
                  <span>
                    {fr ? 'À la une / ' : 'Featured / '}
                    {featured.category}
                  </span>
                  {featured.status !== 'published' && (
                    <span className="review-badge">
                      {fr ? 'Brouillon · À relire' : 'Draft · For review'}
                    </span>
                  )}
                </div>
                <Link href={`/insights/${featured.slug}`}>
                  <h2>{featured.title}</h2>
                </Link>
                <p>{featured.subtitle}</p>
                <ArticleMeta entry={featured} locale={locale} />
                <Link className="text-link" href={localPath(locale, `/insights/${featured.slug}`)}>
                  {fr ? 'Lire l’article' : 'Read the article'}
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <Link
                href={localPath(locale, `/insights/${featured.slug}`)}
                aria-label={`${fr ? 'Lire' : 'Read'} ${featured.title}`}
                className="insight-feature-visual"
              >
                <HeroVisual entry={featured} priority />
              </Link>
            </section>
          )
        }
        items={entries.map((entry) => ({
          id: entry.slug,
          category: entry.category,
          title: entry.title,
          search: [entry.title, entry.description, entry.category, ...entry.tags].join(' '),
          content: <InsightCard key={entry.slug} entry={entry} showAuthor locale={locale} />,
        }))}
        press={
          <div className="press-empty">
            <p>
              {fr
                ? 'Interviews, conversations et vidéos de SynapsAi.'
                : 'Interviews, conversations and videos from SynapsAi.'}
            </p>
            <span>
              {fr
                ? 'Aucune vidéo publiée ici pour le moment.'
                : 'No videos published here yet. Check back soon.'}
            </span>
          </div>
        }
        pressItems={pressEntries.map((entry) => ({
          id: entry.id,
          search: [entry.title, entry.originalTitle, entry.publisher, entry.format].join(' '),
          content: (
            <a className="press-link" href={entry.url} target="_blank" rel="noopener noreferrer">
              <span className="press-thumbnail">
                <Image
                  src={entry.thumbnail}
                  width={480}
                  height={360}
                  alt=""
                  sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 25vw"
                />
                <span className="press-play" aria-hidden="true">
                  <Play size={14} fill="currentColor" />
                </span>
              </span>
              <h3>{fr ? entry.originalTitle : entry.title}</h3>
              <span className="press-meta">
                {entry.publisher}
                <span aria-hidden="true"> · </span>
                <time dateTime={entry.publishedAt}>
                  {new Date(`${entry.publishedAt}T12:00:00Z`).toLocaleDateString(
                    fr ? 'fr-FR' : 'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      timeZone: 'UTC',
                    },
                  )}
                </time>
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
              <span className="sr-only">Watch on YouTube (opens in a new tab)</span>
            </a>
          ),
        }))}
        locale={locale}
      />
      <div className="insights-endnote">
        <span>
          {fr
            ? 'Par les personnes qui construisent SynapsAi.'
            : 'From the people building SynapsAi.'}
        </span>
        <Link href={localPath(locale, '/company/team')} className="text-link">
          {fr ? 'Rencontrer l’équipe' : 'Meet the team'}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
function SectionVisuals({ section }: { section: ArticleSection }) {
  return (
    <>
      {section.diagram && (
        <figure className="article-diagram">
          <p className="diagram-title">{section.diagram.title}</p>
          <ol>
            {section.diagram.steps.map((step, i) => (
              <li key={step}>
                <span aria-hidden="true">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <figcaption>{section.diagram.caption}</figcaption>
        </figure>
      )}
      {section.table && (
        <div className="article-table-wrap">
          <table>
            <caption>{section.table.caption}</caption>
            <thead>
              <tr>
                {section.table.headers.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={i}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.image && (
        <figure className="article-product-figure">
          <Image
            src={section.image.src}
            width={section.image.width}
            height={section.image.height}
            alt={section.image.alt}
            sizes="(max-width: 767px) 90vw, 650px"
          />
          <figcaption>{section.image.caption}</figcaption>
        </figure>
      )}
    </>
  );
}
export function InsightArticle({ entry, locale = 'en' }: { entry: InsightEntry; locale?: Locale }) {
  const fr = locale === 'fr';
  const canonical = `${site.url}${localPath(locale, `/insights/${entry.slug}`)}`;
  const { introduction, sections, closing, sources, takeaways, note } = entry.body;
  const related = entry.relatedInsights.flatMap((slug) =>
    (locale === 'fr' ? [] : availableInsights(published)).filter((e) => e.slug === slug),
  );
  return (
    <article className="insight-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: entry.title,
            description: entry.description,
            inLanguage: locale,
            dateModified: entry.updatedAt,
            ...(entry.publishedAt ? { datePublished: entry.publishedAt } : {}),
            author: entry.authors.map((id) => ({
              '@type': 'Person',
              name: insightAuthors[id].name,
              jobTitle: insightAuthors[id].role,
              url: `${site.url}${localPath(locale, '/company/team')}`,
            })),
            publisher: {
              '@type': 'Organization',
              '@id': `${site.url}/#organization`,
              name: site.name,
              url: site.url,
              logo: { '@type': 'ImageObject', url: `${site.url}/media/brand/synapsai-logo.svg` },
            },
            image: `${site.url}${entry.seo.ogImage}`,
            keywords: entry.tags.join(', '),
            articleSection: entry.category,
            mainEntityOfPage: canonical,
            url: canonical,
          }),
        }}
      />
      <header className="article-header container">
        <Link href={localPath(locale, '/insights')} className="article-back">
          <ArrowLeft size={15} />
          {fr ? 'Tous les Insights' : 'All insights'}
        </Link>
        <div className="article-category">
          <span>{entry.category}</span>
          {entry.status !== 'published' && <span className="review-badge">Draft · For review</span>}
        </div>
        <ArticleMeta entry={entry} locale={locale} />
        <h1>{entry.title}</h1>
        <p className="article-deck">{entry.subtitle}</p>
        <ArticleShare title={entry.title} url={canonical} />
      </header>
      <figure className="article-cover container">
        <HeroVisual entry={entry} priority />
        <figcaption>{entry.hero.caption}</figcaption>
      </figure>
      <div className="article-byline container">
        <div>
          <span className="eyebrow">{fr ? 'ÉCRIT PAR' : 'WRITTEN BY'}</span>
          <AuthorList entry={entry} locale={locale} />
        </div>
        <ul className="article-tags" aria-label="Article topics">
          {entry.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="article-layout container">
        <aside className="article-sidebar">
          <nav aria-label={fr ? 'Dans cet article' : 'On this page'}>
            <span className="eyebrow">{fr ? 'DANS CET ARTICLE' : 'IN THIS ARTICLE'}</span>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
            <a href="#sources" className="article-sources-link">
              {fr ? 'Sources et notes' : 'Sources & notes'}
              <ArrowUpRight size={14} />
            </a>
          </nav>
        </aside>
        <div className="article-body">
          <div className="article-takeaway">
            <h2>{fr ? 'À retenir' : 'Key takeaways'}</h2>
            <ul>
              {takeaways.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="article-introduction">
            {introduction.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => {
                const source = sources.find((s) => s.id === paragraph.source);
                return (
                  <p key={i}>
                    {paragraph.text}
                    {source && (
                      <>
                        {' '}
                        <a
                          href={source.url}
                          className="inline-source"
                          aria-label={`Source ${source.id}: ${source.organization}`}
                        >
                          [{source.id}]
                        </a>
                      </>
                    )}
                    {paragraph.link && (
                      <>
                        {' '}
                        <Link href={paragraph.link.href}>{paragraph.link.label}.</Link>
                      </>
                    )}
                  </p>
                );
              })}
              {section.points && (
                <ol className="article-checklist">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              )}
              <SectionVisuals section={section} />
            </section>
          ))}
          <p className="article-closing">{closing}</p>
          <section id="sources" className="article-sources">
            <h2>{fr ? 'Sources et notes' : 'Sources & notes'}</h2>
            <p>{note}</p>
            <ol>
              {sources.map((source) => (
                <li key={source.id}>
                  <a href={source.url}>
                    {source.title}
                    <ArrowUpRight size={14} />
                  </a>
                  <span>
                    {source.organization} · {source.year}
                  </span>
                </li>
              ))}
            </ol>
          </section>
          <div className="article-author-footer">
            <span className="eyebrow">{fr ? 'À PROPOS DES AUTEURS' : 'ABOUT THE AUTHORS'}</span>
            <AuthorList entry={entry} locale={locale} />
          </div>
          <Link href={localPath(locale, '/insights')} className="article-back article-bottom-back">
            <ArrowLeft size={15} />
            {fr ? 'Retour aux Insights' : 'Back to insights'}
          </Link>
        </div>
      </div>
      {related.length > 0 && (
        <section className="insight-related container" aria-labelledby="related-insights">
          <div className="insights-section-label">
            <h2 id="related-insights">Continue reading</h2>
            <span>Connected ideas, different angles.</span>
          </div>
          <div className="insight-grid">
            {related.map((e) => (
              <InsightCard key={e.slug} entry={e} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

'use client';

import { useRef, useState, type ReactNode, type KeyboardEvent } from 'react';
import { ArrowRight, Search } from 'lucide-react';

type Item = { id: string; category: string; title: string; search: string; content: ReactNode };

export function InsightsBrowser({
  categories,
  items,
  featuredId,
  featured,
  press,
  pressItems,
  locale = 'en',
}: {
  categories: readonly string[];
  items: Item[];
  featuredId?: string;
  featured: ReactNode;
  press: ReactNode;
  pressItems: { id: string; search: string; content: ReactNode }[];
  locale?: 'en' | 'fr';
}) {
  const [active, setActive] = useState(locale === 'fr' ? 'Tout' : 'All');
  const [query, setQuery] = useState('');
  const tabs = [
    locale === 'fr' ? 'Tout' : 'All',
    ...categories,
    locale === 'fr' ? 'Presse' : 'Press',
  ];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const search = query.trim().toLowerCase();
  const matching = items.filter(
    (item) =>
      (active === 'All' || active === 'Tout' || item.category === active) &&
      item.search.toLowerCase().includes(search),
  );
  const showFeatured = (active === 'All' || active === 'Tout') && !search && !!featuredId;
  const visible = matching.filter((item) => !showFeatured || item.id !== featuredId);
  const visiblePress = pressItems.filter((item) => item.search.toLowerCase().includes(search));
  const showPress =
    active === 'All' || active === 'Tout' || active === 'Press' || active === 'Presse';
  const count = matching.length + (showPress ? visiblePress.length : 0);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : event.key === 'ArrowLeft'
          ? (index - 1 + tabs.length) % tabs.length
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? tabs.length - 1
              : -1;
    if (next < 0) return;
    event.preventDefault();
    setActive(tabs[next]);
    tabRefs.current[next]?.focus();
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  return (
    <>
      <div className="insights-toolbar">
        <div
          role="tablist"
          aria-label={locale === 'fr' ? 'Catégories des Insights' : 'Insight categories'}
          className="insights-tabs"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`insight-tab-${index}`}
              aria-selected={active === tab}
              aria-controls="insight-results"
              tabIndex={active === tab ? 0 : -1}
              onClick={() => setActive(tab)}
              onKeyDown={(event) => navigate(event, index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <label className="insights-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">
            {locale === 'fr'
              ? 'Rechercher dans les Insights et la presse'
              : 'Search insights and press'}
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={locale === 'fr' ? 'Rechercher…' : 'Search…'}
          />
        </label>
      </div>
      <p className="sr-only" role="status">
        {count} {count === 1 ? 'result' : 'results'}
      </p>
      <div
        id="insight-results"
        role="tabpanel"
        aria-labelledby={`insight-tab-${tabs.indexOf(active)}`}
        tabIndex={0}
      >
        {showFeatured && featured}
        {visible.length > 0 && (
          <section
            className="insights-library"
            aria-label={
              active === 'All' || active === 'Tout'
                ? locale === 'fr'
                  ? 'Derniers articles'
                  : 'Latest articles'
                : active
            }
          >
            <div className="insight-grid">
              {visible.map((item) => (
                <div key={item.id}>{item.content}</div>
              ))}
            </div>
          </section>
        )}
        {showPress && (!search || visiblePress.length > 0) && (
          <section className="insights-press" aria-labelledby="press-heading">
            <div className="insights-section-label">
              <h2 id="press-heading">{locale === 'fr' ? 'Presse' : 'Press'}</h2>
              <span>
                {locale === 'fr' ? 'Interviews et apparitions' : 'Conversations & appearances'}
              </span>
            </div>
            {visiblePress.length ? (
              <div className="press-list">
                {((active === 'All' || active === 'Tout') && !search
                  ? visiblePress.slice(0, 4)
                  : visiblePress
                ).map((item) => (
                  <div key={item.id}>{item.content}</div>
                ))}
              </div>
            ) : (
              press
            )}
            {(active === 'All' || active === 'Tout') && !search && visiblePress.length > 4 && (
              <button
                className="press-view-all text-link"
                type="button"
                onClick={() => {
                  setActive(locale === 'fr' ? 'Presse' : 'Press');
                  tabRefs.current[tabs.length - 1]?.focus();
                }}
              >
                View all <ArrowRight size={16} aria-hidden="true" />
              </button>
            )}
          </section>
        )}
        {count === 0 && !(('Press' === active || 'Presse' === active) && !search) && (
          <div className="insights-empty">
            <h2>
              {search
                ? locale === 'fr'
                  ? 'Aucun contenu correspondant.'
                  : 'No matching stories.'
                : locale === 'fr'
                  ? 'D’autres perspectives arrivent.'
                  : 'More perspectives to come.'}
            </h2>
            <p>
              {search
                ? locale === 'fr'
                  ? 'Essayez une autre recherche ou une autre catégorie.'
                  : 'Try another search or explore a different category.'
                : locale === 'fr'
                  ? 'Aucun article dans cette catégorie pour le moment.'
                  : 'There are no articles in this category yet.'}
            </p>
            <button
              className="text-link"
              type="button"
              onClick={() => {
                setActive(locale === 'fr' ? 'Tout' : 'All');
                setQuery('');
              }}
            >
              {locale === 'fr' ? 'Voir tous les Insights' : 'View all insights'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

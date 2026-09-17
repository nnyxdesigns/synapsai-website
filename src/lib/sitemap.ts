import type { MetadataRoute } from 'next';
import { publicPaths, localPath, site } from './site';
import {
  availableInsights,
  availableInsightsForLocale,
  insightsNavigationVisible,
} from './insights';
import { englishOnlyPaths } from './ecosystem';
export function buildSitemap(isPublished: boolean): MetadataRoute.Sitemap {
  if (!isPublished) return [];
  return [
    ...englishOnlyPaths.map((path) => ({
      url: `${site.url}${path}`,
      alternates: { languages: { en: `${site.url}${path}` } },
    })),
    ...publicPaths.flatMap((path) =>
      (['en', 'fr'] as const).map((locale) => ({
        url: `${site.url}${localPath(locale, path) === '/' ? '' : localPath(locale, path)}`,
        alternates: {
          languages: {
            en: `${site.url}${localPath('en', path)}`,
            fr: `${site.url}${localPath('fr', path)}`,
          },
        },
      })),
    ),
    ...availableInsights(true).map((entry) => ({
      url: `${site.url}/insights/${entry.slug}`,
      lastModified: entry.updatedAt,
      alternates: {
        languages: {
          en: `${site.url}/insights/${entry.slug}`,
          ...(availableInsightsForLocale('fr', true).some((frEntry) => frEntry.slug === entry.slug)
            ? { fr: `${site.url}/fr/insights/${entry.slug}` }
            : {}),
        },
      },
    })),
    ...availableInsightsForLocale('fr', true).map((entry) => ({
      url: `${site.url}/fr/insights/${entry.slug}`,
      lastModified: entry.updatedAt,
      alternates: {
        languages: {
          en: `${site.url}/insights/${entry.slug}`,
          fr: `${site.url}/fr/insights/${entry.slug}`,
        },
      },
    })),
    ...(insightsNavigationVisible(true)
      ? [{ url: `${site.url}/insights`, alternates: { languages: { en: `${site.url}/insights` } } }]
      : []),
    ...(insightsNavigationVisible(true)
      ? [
          {
            url: `${site.url}/fr/insights`,
            alternates: {
              languages: { en: `${site.url}/insights`, fr: `${site.url}/fr/insights` },
            },
          },
        ]
      : []),
  ];
}

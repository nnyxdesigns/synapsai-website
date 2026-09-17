import type { ContentStatus, Locale } from './site';
import { team } from './company';
import type { ArticleBody } from '../content/insights/types';
import { contextArticle } from '../content/insights/ai-for-africa';
import { imaginaiArticle } from '../content/insights/inside-imaginai';
import { connectivityArticle } from '../content/insights/connectivity';
import { beyondDemoArticle } from '../content/insights/beyond-demo';
import { classroomArticle } from '../content/insights/classroom';
import { contextArticleFr } from '../content/insights/ai-for-africa-fr';

export const insightCategories = [
  'Perspectives',
  'AI & Africa',
  'Product & Engineering',
  'Field Notes',
  'Inside SynapsAi',
] as const;
export const insightAuthors = { ceo: team[1], cto: team[0] };
export type InsightEntry = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: (typeof insightCategories)[number];
  tags: string[];
  authors: (keyof typeof insightAuthors)[];
  featured: boolean;
  publishedAt?: string;
  updatedAt: string;
  status: ContentStatus;
  locale: Locale;
  hero: { src: string; alt: string; caption: string };
  seo: { title: string; description: string; ogImage: string };
  relatedInsights: string[];
  body: ArticleBody;
};
const slugs = {
  context: 'ai-for-africa-designed-for-context-not-just-translated',
  imaginai: 'inside-imaginai-designing-around-how-students-study',
  connectivity: 'building-ai-products-for-imperfect-connectivity',
  demo: 'beyond-the-ai-demo-building-useful-ai-products',
  classroom: 'what-we-learn-when-ai-meets-the-african-classroom',
};
type EntryInput = Omit<InsightEntry, 'locale' | 'updatedAt' | 'seo' | 'hero'> & {
  visual: string;
  alt: string;
  caption: string;
};
function entry({ visual, alt, caption, ...data }: EntryInput): InsightEntry {
  return {
    ...data,
    locale: 'en',
    updatedAt: data.publishedAt || '2026-09-16',
    hero: { src: `/media/insights/${visual}.svg`, alt, caption },
    seo: {
      title: data.title,
      description: data.description,
      ogImage: `/media/og/article-${visual}-og.png`,
    },
  };
}
export const insights: InsightEntry[] = [
  entry({
    status: 'published',
    publishedAt: '2026-09-17',
    slug: slugs.context,
    title: 'AI for Africa Should Be Designed for Context, Not Just Translated',
    subtitle:
      'A useful AI product does not become locally relevant simply because its interface has been translated.',
    description:
      'Why language is only the beginning: designing AI around real workflows, access conditions, knowledge and trust in African contexts.',
    category: 'AI & Africa',
    tags: ['AI in Africa', 'Product Design', 'Localization', 'Context'],
    authors: ['ceo'],
    featured: true,
    visual: 'context',
    alt: 'Nested layers place language inside workflow, access and trust, showing that context extends beyond translation.',
    caption:
      'Translation is a visible layer. The product must also fit the conditions beneath it. Conceptual illustration by SynapsAi.',
    relatedInsights: [slugs.connectivity, slugs.classroom, slugs.demo],
    body: contextArticle,
  }),
  entry({
    status: 'published',
    publishedAt: '2026-09-17',
    slug: slugs.imaginai,
    title: 'Inside ImaginAi: Designing an AI Learning System Around How Students Actually Study',
    subtitle:
      'From a question to an attempt, from feedback to revision: designing for continuity across the study session.',
    description:
      'The product thinking behind a learner-and-teacher ecosystem, with confirmed ImaginAi capabilities and questions for future design.',
    category: 'Inside SynapsAi',
    tags: ['ImaginAi', 'Education', 'Product Development', 'AI UX', 'Learning'],
    authors: ['ceo'],
    featured: false,
    visual: 'learning',
    alt: 'Four connected stages form a learning loop: understand, attempt, review and revisit.',
    caption:
      'The study session continues as the mode changes. A conceptual learning loop, not a measured user journey.',
    relatedInsights: [slugs.classroom, slugs.demo, slugs.connectivity],
    body: imaginaiArticle,
  }),
  entry({
    status: 'published',
    publishedAt: '2026-09-17',
    slug: slugs.connectivity,
    title: 'Building AI Products for Imperfect Connectivity',
    subtitle:
      'Reliability starts before the model responds—and continues when the connection does not.',
    description:
      'A practical framework for request states, latency, safe retries, smaller transfers and recovery in AI products.',
    category: 'Product & Engineering',
    tags: ['Product Engineering', 'Connectivity', 'Mobile', 'Reliability'],
    authors: ['ceo', 'cto'],
    featured: false,
    visual: 'connectivity',
    alt: 'An interrupted request path reconnects through recovery and reaches a saved result.',
    caption:
      'An interruption should have a path forward. Conceptual request flow; no latency measurements are implied.',
    relatedInsights: [slugs.context, slugs.demo, slugs.imaginai],
    body: connectivityArticle,
  }),
  entry({
    status: 'published',
    publishedAt: '2026-09-17',
    slug: slugs.demo,
    title: 'Beyond the AI Demo: What It Takes to Build Useful AI Products',
    subtitle:
      'A convincing answer is a beginning. A useful product needs a workflow, evidence and someone responsible for the result.',
    description:
      'Seven questions that turn an AI capability into a product people can use, evaluate and operate.',
    category: 'Perspectives',
    tags: ['AI Products', 'Product Design', 'Generative AI', 'Reliability'],
    authors: ['ceo'],
    featured: false,
    visual: 'system',
    alt: 'A small model block sits inside a larger product system of context, workflow, evaluation and operations.',
    caption:
      'The model is one component. The surrounding system makes it useful. Conceptual illustration by SynapsAi.',
    relatedInsights: [slugs.connectivity, slugs.imaginai, slugs.context],
    body: beyondDemoArticle,
  }),
  entry({
    status: 'published',
    publishedAt: '2026-09-17',
    slug: slugs.classroom,
    title: 'What We Learn When AI Meets the African Classroom',
    subtitle:
      'The classroom changes the test: a useful answer must serve a learning process, a teacher and a specific setting.',
    description:
      'What educational AI should learn from classroom routines, teacher judgment and the difference between an answer and understanding.',
    category: 'Field Notes',
    tags: ['Education', 'AI in Africa', 'EdTech', 'Students', 'Teachers'],
    authors: ['ceo'],
    featured: false,
    visual: 'classroom',
    alt: 'Learner, teacher and AI support connect around a shared learning task.',
    caption:
      'One learning task, different responsibilities. A conceptual relationship map, not field-study data.',
    relatedInsights: [slugs.imaginai, slugs.context],
    body: classroomArticle,
  }),
];
export const frenchInsights: InsightEntry[] = [
  {
    ...insights[0],
    locale: 'fr',
    title: 'L’IA pour l’Afrique doit être conçue pour le contexte, pas seulement traduite',
    subtitle:
      'Un produit d’IA utile ne devient pas pertinent localement simplement parce que son interface a été traduite.',
    description:
      'Pourquoi la langue n’est qu’un début : concevoir l’IA autour des processus, des conditions d’accès, des connaissances et de la confiance dans les contextes africains.',
    tags: ['IA en Afrique', 'Design produit', 'Localisation', 'Contexte'],
    hero: {
      ...insights[0].hero,
      alt: 'Des couches imbriquées placent la langue à l’intérieur du processus, de l’accès et de la confiance.',
      caption:
        'La traduction est une couche visible. Le produit doit aussi s’adapter aux conditions qui se trouvent dessous. Illustration conceptuelle par SynapsAi.',
    },
    seo: {
      title:
        'L’IA pour l’Afrique doit être conçue pour le contexte, pas seulement traduite | SynapsAi',
      description:
        'Une perspective sur la conception de produits d’IA adaptés aux processus, aux conditions d’accès et aux contextes africains.',
      ogImage: insights[0].seo.ogImage,
    },
    relatedInsights: [],
    body: contextArticleFr,
  },
];
export function readingMinutes(entry: InsightEntry) {
  const { introduction, sections, closing, takeaways } = entry.body;
  const text = [
    ...introduction,
    ...takeaways,
    ...sections.flatMap((s) => [
      s.title,
      ...s.paragraphs.map((p) => p.text),
      ...(s.points || []),
      ...(s.diagram?.steps || []),
      ...(s.table?.rows.flat() || []),
    ]),
    closing,
  ].join(' ');
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}
export function availableInsights(isPublicSite: boolean) {
  return insights.filter(
    (e) => e.status === 'published' || (!isPublicSite && ['review', 'approved'].includes(e.status)),
  );
}
export function insightsNavigationVisible(isPublicSite: boolean) {
  return availableInsights(isPublicSite).length >= (isPublicSite ? 3 : 1);
}
export function insightPaths(isPublicSite: boolean) {
  const entries = availableInsights(isPublicSite);
  return entries.length ? ['/insights', ...entries.map((e) => `/insights/${e.slug}`)] : [];
}
export function availableInsightsForLocale(locale: Locale, isPublicSite: boolean) {
  return locale === 'fr' ? frenchInsights : availableInsights(isPublicSite);
}
export function insightPathsForLocale(locale: Locale, isPublicSite: boolean) {
  const entries = availableInsightsForLocale(locale, isPublicSite);
  return entries.length
    ? [
        `${locale === 'fr' ? '/fr' : ''}/insights`,
        ...entries.map((e) => `${locale === 'fr' ? '/fr' : ''}/insights/${e.slug}`),
      ]
    : [];
}

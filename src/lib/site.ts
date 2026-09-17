export type Locale = 'en' | 'fr';
export const site = { name: 'SynapsAi', url: 'https://synapsai.co', email: 'contact@synapsai.co' };
export const published = process.env.SITE_PUBLISHED === 'true';
export const localPath = (locale: Locale, path = '') =>
  `${locale === 'fr' ? '/fr' : ''}${path || '/'}`.replace(/\/$/, '') || '/';
export function resolveRoute(slug: string[] = []) {
  const locale: Locale = slug[0] === 'fr' ? 'fr' : 'en';
  return { locale, path: '/' + (locale === 'fr' ? slug.slice(1) : slug).join('/') };
}
export type ContentStatus = 'draft' | 'review' | 'approved' | 'published' | 'archived';
export type EditorialEntry = {
  slug: string;
  status: ContentStatus;
  locale: Locale;
  title: string;
  description: string;
  reviewedAt?: string;
  source?: string;
};
export const facts = {
  learners: '143K+',
  award: 'PROMEX 2025',
  source: 'https://synapsai.co/',
  reviewedAt: '2026-09-16',
};
export const solutionSlugs = [
  'ai-automation',
  'custom-software',
  'web-mobile-development',
  'digital-transformation',
] as const;
export const solutions = {
  en: [
    {
      title: 'AI & Automation',
      short: 'Make room for the work that matters.',
      description:
        'Connect your workflows, put information to work, and bring intelligence into everyday operations.',
      details: [
        'AI-enabled workflows',
        'Business-process automation',
        'Intelligent product experiences',
      ],
      problem:
        'Repetitive tasks. Information scattered across tools. Processes that depend on manual handoffs.',
      outcome:
        'Bring your process into focus. Explore where automation and AI can support your people and connect the steps that matter.',
    },
    {
      title: 'Custom Software',
      short: 'Your operations. Your software.',
      description:
        'Purpose-built tools and platforms, designed around the way your organization actually works.',
      details: ['Internal business tools', 'Operational platforms', 'Custom dashboards'],
      problem:
        'Your organization has its own way of working. Standard software does not always fit it.',
      outcome:
        'Design software around your users, your processes, and the information they need to make decisions.',
    },
    {
      title: 'Web & Mobile Products',
      short: 'From an idea to something people use.',
      description:
        'Thoughtful digital experiences that connect your organization with its users, on web and mobile.',
      details: [
        'Responsive web platforms',
        'Mobile applications',
        'Product design and engineering',
      ],
      problem:
        'An idea needs more than a screen. It needs a coherent experience that works for the people who use it.',
      outcome:
        'Bring product thinking, interface design, and engineering together to build a useful digital experience.',
    },
    {
      title: 'Digital Transformation',
      short: 'Connect the pieces. Move forward.',
      description: 'Turn manual and fragmented processes into connected digital workflows.',
      details: ['Process digitization', 'Workflow redesign', 'Connected operational tools'],
      problem:
        'Spreadsheets, paper forms, and disconnected tools can make it difficult to see the whole process.',
      outcome:
        'Start with the actual workflow. Identify the friction and shape a digital system around the needs of your organization.',
    },
  ],
  fr: [
    {
      title: 'IA & Automatisation',
      short: 'Libérez du temps pour l’essentiel.',
      description:
        'Connectez vos processus, exploitez vos informations et intégrez l’intelligence artificielle à vos opérations.',
      details: [
        'Processus intégrant l’IA',
        'Automatisation des tâches métier',
        'Expériences produit intelligentes',
      ],
      problem:
        'Des tâches répétitives. Des informations dispersées. Des processus qui reposent sur des transmissions manuelles.',
      outcome:
        'Clarifiez votre processus. Identifiez où l’automatisation et l’IA peuvent aider vos équipes et relier les étapes essentielles.',
    },
    {
      title: 'Logiciels sur mesure',
      short: 'Vos opérations. Votre logiciel.',
      description:
        'Des outils et des plateformes conçus autour du fonctionnement réel de votre organisation.',
      details: [
        'Outils métier internes',
        'Plateformes opérationnelles',
        'Tableaux de bord sur mesure',
      ],
      problem:
        'Votre organisation a sa propre façon de travailler. Les logiciels standards ne s’y adaptent pas toujours.',
      outcome:
        'Concevez un logiciel autour de vos utilisateurs, de vos processus et des informations nécessaires à leurs décisions.',
    },
    {
      title: 'Produits web & mobile',
      short: 'De l’idée à un produit utile.',
      description:
        'Des expériences numériques pensées pour vos utilisateurs, sur le web et sur mobile.',
      details: [
        'Plateformes web responsive',
        'Applications mobiles',
        'Design et ingénierie produit',
      ],
      problem:
        'Une idée a besoin de plus qu’un écran : une expérience cohérente, adaptée aux personnes qui l’utilisent.',
      outcome:
        'Réunissez réflexion produit, design d’interface et ingénierie pour créer une expérience numérique utile.',
    },
    {
      title: 'Transformation digitale',
      short: 'Reliez les outils. Avancez ensemble.',
      description:
        'Transformez des processus manuels et fragmentés en parcours numériques connectés.',
      details: [
        'Numérisation des processus',
        'Refonte des parcours métier',
        'Connexion des outils opérationnels',
      ],
      problem:
        'Tableurs, formulaires papier et outils isolés compliquent la compréhension d’un processus dans son ensemble.',
      outcome:
        'Partez du fonctionnement réel. Identifiez les difficultés et concevez un système numérique adapté à votre organisation.',
    },
  ],
};
export const copy = {
  en: {
    nav: ['Solutions', 'Products', 'Work', 'Company'],
    talk: 'Talk to us',
    explore: 'Explore our work',
    allSolutions: 'Explore our solutions',
    eyebrow: 'TECHNOLOGY, WITH PURPOSE',
    hero: ['Intelligent solutions.', 'Real-world impact.'],
    intro:
      'We turn real needs into software people can use. Custom platforms, AI-powered workflows, and digital products — designed and built in Cameroon, for organizations looking ahead.',
    origin: 'Built in Cameroon. Designed for what’s next.',
    proof: [
      'Learners on ImaginAi',
      'Web & mobile',
      'A connected product ecosystem',
      'PROMEX 2025',
      'Best Educational Digital Project',
    ],
    capabilities: '01 / WHAT WE BUILD',
    capabilityTitle: 'The right technology.\nFor your next move.',
    capabilityIntro:
      'From a process that needs simplifying to a product that needs building. We connect the dots.',
    workLabel: '02 / BUILT BY SYNAPSAI',
    workTitle: 'An idea. An ecosystem.\nA real difference.',
    workDesc:
      'ImaginAi for learners on mobile. ImaginAi Prof for instructors on the web. Two connected products, designed and engineered by SynapsAi around education needs.',
    caseStudy: 'Explore the case study',
    product: 'Discover ImaginAi',
    problemsLabel: '03 / MADE FOR THE REAL WORLD',
    problemsTitle: 'Start with the challenge.\nBuild what makes a difference.',
    problems: [
      'Too many manual steps?',
      'Tools that don’t talk to each other?',
      'An idea ready to become a product?',
    ],
    problemCopy: [
      'Explore AI and automation',
      'Build connected software',
      'Create a web or mobile experience',
    ],
    approachLabel: '04 / THE WAY WE THINK',
    approachTitle: 'Product minds.\nEngineering hands.',
    approachDesc:
      'Since 2024, we’ve been building technology around everyday needs. Our work on ImaginAi brings that perspective into focus: useful design, applied AI, and an understanding of the people who depend on the product.',
    company: 'Meet SynapsAi',
    ctaLabel: 'LET’S BUILD WHAT’S NEXT',
    ctaTitle: 'Your next chapter\nstarts with a conversation.',
    ctaDesc: 'An idea, a challenge, or a process worth rethinking. We’d like to hear about it.',
    footer: 'Intelligent technology.\nMeaningful progress.',
    resources: 'Resources',
    about: 'About us',
    team: 'Our team',
    faq: 'FAQ',
    contact: 'Contact',
    back: 'Back to home',
    next: 'A next step, together.',
  },
  fr: {
    nav: ['Solutions', 'Produits', 'Réalisations', 'Entreprise'],
    talk: 'Parlons de votre projet',
    explore: 'Voir nos réalisations',
    allSolutions: 'Explorer nos solutions',
    eyebrow: 'LA TECHNOLOGIE, AVEC DU SENS',
    hero: ['Des solutions intelligentes.', 'Un impact concret.'],
    intro:
      'Nous transformons des besoins concrets en logiciels utiles. Plateformes sur mesure, processus intégrant l’IA et produits numériques : conçus au Cameroun, pour les organisations qui avancent.',
    origin: 'Nés au Cameroun. Tournés vers demain.',
    proof: [
      'Apprenants sur ImaginAi',
      'Web & mobile',
      'Un écosystème produit connecté',
      'PROMEX 2025',
      'Meilleur projet numérique éducatif',
    ],
    capabilities: '01 / CE QUE NOUS CONSTRUISONS',
    capabilityTitle: 'La bonne technologie.\nPour votre prochaine étape.',
    capabilityIntro:
      'Un processus à simplifier, un produit à construire. Nous relions les idées à leur réalisation.',
    workLabel: '02 / UNE RÉALISATION SYNAPSAI',
    workTitle: 'Une idée. Un écosystème.\nUne différence concrète.',
    workDesc:
      'Des parcours guidés sur mobile. La gestion des classes sur le web. ImaginAi réunit apprenants et enseignants dans un écosystème éducatif intégrant l’IA, construit par SynapsAi.',
    caseStudy: 'Explorer l’étude de cas',
    product: 'Découvrir ImaginAi',
    problemsLabel: '03 / POUR DES BESOINS CONCRETS',
    problemsTitle: 'Partir de votre défi.\nConstruire ce qui compte.',
    problems: [
      'Trop d’étapes manuelles ?',
      'Des outils qui ne communiquent pas ?',
      'Une idée prête à devenir un produit ?',
    ],
    problemCopy: [
      'Explorer l’IA et l’automatisation',
      'Connecter vos outils métier',
      'Créer une expérience web ou mobile',
    ],
    approachLabel: '04 / NOTRE APPROCHE',
    approachTitle: 'L’esprit produit.\nLe savoir-faire technique.',
    approachDesc:
      'Depuis 2024, nous construisons des technologies autour des besoins du quotidien. ImaginAi traduit cette approche : un design utile, une IA appliquée et une attention aux personnes qui utilisent le produit.',
    company: 'Découvrir SynapsAi',
    ctaLabel: 'CONSTRUISONS LA SUITE',
    ctaTitle: 'Votre prochain chapitre\ncommence par un échange.',
    ctaDesc: 'Une idée, un défi ou un processus à repenser. Parlons-en.',
    footer: 'Une technologie intelligente.\nDes avancées concrètes.',
    resources: 'Ressources',
    about: 'À propos',
    team: 'Notre équipe',
    faq: 'FAQ',
    contact: 'Contact',
    back: 'Retour à l’accueil',
    next: 'La prochaine étape, ensemble.',
  },
};
export const publicPaths = [
  '/',
  '/solutions',
  ...solutionSlugs.map((s) => `/solutions/${s}`),
  '/products',
  '/products/imaginai',
  '/work',
  '/work/imaginai',
  '/company',
  '/company/about',
  '/company/team',
  '/company/impact',
  '/company/careers',
  '/faq',
  '/contact',
];

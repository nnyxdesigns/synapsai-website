export const englishOnlyPaths = ['/products/imaginai-prof'];
export const products = [
  {
    name: 'ImaginAi',
    path: '/products/imaginai',
    channel: 'Mobile application',
    audience: 'Secondary & higher-education learners',
    title: 'A place to understand, practise and keep going.',
    description:
      'AI-powered learning support, guided paths, quizzes, corrections and progress tracking for the learner’s study session.',
    steps: [
      'Explore a concept',
      'Practise with exercises',
      'Review corrections',
      'Follow progress',
    ],
  },
  {
    name: 'ImaginAi Prof',
    path: '/products/imaginai-prof',
    channel: 'Web application',
    audience: 'Teachers & instructors',
    title: 'Bring structure to teaching and follow-up.',
    description:
      'Create classes or learning groups, organize tasks and resources, and follow learner activity through a dedicated instructor experience.',
    steps: [
      'Create a class or group',
      'Organize tasks and resources',
      'Follow learner activity',
      'Review and guide',
    ],
  },
] as const;
export const englishPageMeta: Record<string, { title: string; description: string }> = {
  '/company/careers': {
    title: 'Careers at SynapsAi',
    description:
      'Meet the team, explore our products and start a conversation about opportunities at SynapsAi.',
  },
  '/company': {
    title: 'Product minds. Engineering hands.',
    description:
      'Meet SynapsAi: the people, purpose and documented work behind a Cameroonian software and AI company.',
  },
  '/products': {
    title: 'Two products. One connected education ecosystem.',
    description:
      'Explore ImaginAi for secondary and higher-education learners and ImaginAi Prof for teachers and instructors, designed and built by SynapsAi.',
  },
  '/products/imaginai': {
    title: 'ImaginAi — learning support, wherever study happens.',
    description:
      'Discover the ImaginAi mobile application: AI-powered learning, practice, corrections and progress for secondary and higher-education learners.',
  },
  '/products/imaginai-prof': {
    title: 'ImaginAi Prof — a clearer view of teaching and learning.',
    description:
      'The instructor web platform built by SynapsAi: classes, learning groups, tasks, resources, learner follow-up and reporting.',
  },
  '/work/imaginai': {
    title: 'ImaginAi: engineering a connected education ecosystem.',
    description:
      'How SynapsAi brings learner mobile experiences and instructor web workflows together around three education stakeholder needs.',
  },
  '/company/impact': {
    title: 'Built, used and recognized.',
    description:
      'SynapsAi’s documented product reach, PROMEX 2025 recognition, CONIA participation and milestones in building the ImaginAi ecosystem.',
  },
};
export const milestones = [
  {
    date: '2024',
    kind: 'Company',
    title: 'SynapsAi founded in Cameroon',
    description:
      'A company focused on connecting practical needs with software and artificial intelligence.',
    source: 'https://synapsai.co/',
    sourceLabel: 'SynapsAi company overview',
  },
  {
    date: '7–8 July 2025',
    kind: 'Participation',
    title: 'ImaginAi at CONIA 2025',
    description:
      'Project participation at the Palais des Congrès in Yaoundé, during the national AI event organized by MINPOSTEL.',
    source: 'https://imaginai.io/en/apropos',
    sourceLabel: 'ImaginAi recognition history',
  },
  {
    date: '2025',
    kind: 'Award',
    title: 'Best Educational Digital Project — PROMEX',
    description: 'Recognition for ImaginAi at the second edition of the PROMEX trade fair.',
    source: 'https://synapsai.co/',
    sourceLabel: 'SynapsAi award record',
  },
  {
    date: '2026',
    kind: 'Program participation',
    title: 'CITS Innovation Bootcamp — Douala',
    description:
      'Participation in the bootcamp and user-discovery activities, documented in a founder account shared by SynapsAi.',
    source: 'https://www.linkedin.com/company/synapsai-co/',
    sourceLabel: 'SynapsAi’s public bootcamp account',
  },
  {
    date: 'September 2026',
    kind: 'Current product scope',
    title: 'Two platforms, one education ecosystem',
    description:
      'ImaginAi serves learners on mobile. ImaginAi Prof supports teachers and instructors on the web. This is a current scope snapshot, not a new launch announcement.',
    source: 'https://imaginai.io/',
    sourceLabel: 'Explore the education ecosystem',
  },
];

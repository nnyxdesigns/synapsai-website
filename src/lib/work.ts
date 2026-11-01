export type WorkProject = {
  slug: string;
  name: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  url: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: 'decolab',
    name: 'DecoLab',
    category: '3D creative product',
    title: 'Turn an empty room into a place to imagine.',
    summary: 'A playful 3D studio that makes interior composition feel immediate, visual and easy to start.',
    challenge: 'Interior ideas often stay abstract until someone can see, move and shape them.',
    solution: 'SynapsAi designed and built an interactive miniature-like studio where people can choose a space, compose it and make it their own.',
    capabilities: ['Product direction', 'Interactive 3D experience', 'Responsive web application'],
    url: 'https://decolab-studio.web.app/',
    desktopImage: '/media/work/portfolio/decolab-desktop.png',
    mobileImage: '/media/work/portfolio/decolab-mobile.png',
    imageAlt: 'DecoLab interactive 3D interior studio on desktop',
  },
  {
    slug: 'moto-fleet',
    name: 'Moto Fleet',
    category: 'Operations platform',
    title: 'A clearer operating system for every ride.',
    summary: 'A focused fleet workspace for seeing motorcycles, drivers and payments without losing the operational thread.',
    challenge: 'Fleet operations need a reliable source of truth across people, vehicles, access and daily payments.',
    solution: 'SynapsAi built a secure operations suite with centralized fleet and assignment views, role-aware access and continuity for work in the field.',
    capabilities: ['Operational product design', 'Role-based access', 'Resilient field workflows'],
    url: 'https://synapsaico.web.app/',
    desktopImage: '/media/work/portfolio/moto-fleet-desktop.png',
    mobileImage: '/media/work/portfolio/moto-fleet-mobile.png',
    imageAlt: 'Moto Fleet operations suite interface',
  },
  {
    slug: 'petlife237',
    name: 'PetLife237',
    category: 'Private consumer product',
    title: 'Make care easier to remember, and easier to give.',
    summary: 'A warm, private companion journal that brings profiles, routines, reminders and memories into one calm place.',
    challenge: 'Care details are easy to scatter across messages, notebooks and calendars when life gets busy.',
    solution: 'SynapsAi created a simple multi-companion experience for organizing everyday care without turning it into another complicated system.',
    capabilities: ['Product strategy', 'Mobile-first experience', 'Privacy-conscious data design'],
    url: 'https://petlife237.web.app/',
    desktopImage: '/media/work/portfolio/petlife237-desktop.png',
    mobileImage: '/media/work/portfolio/petlife237-mobile.png',
    imageAlt: 'PetLife237 companion care product interface',
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}

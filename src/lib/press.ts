export type PressEntry = {
  id: string;
  title: string;
  originalTitle: string;
  url: string;
  publisher: string;
  publishedAt: string;
  format: 'Video' | 'Interview' | 'Article';
  thumbnail: string;
};

// Owner-provided videos. Titles and dates verified against YouTube; English display titles adapted from originals.
export const pressEntries: PressEntry[] = [
  {
    id: 'Ms-mvda5R0I',
    title: 'SAGO 2026: Discover ImaginAi, the Edtech app innovating with AI | CRTV News',
    originalTitle:
      "SAGO 2026 : découvrez ImaginAi, l'appli Edtech qui innove avec l'IA | CRTV News",
    url: 'https://www.youtube.com/watch?v=Ms-mvda5R0I',
    publisher: 'YouTube',
    publishedAt: '2026-07-15',
    format: 'Video',
    thumbnail: '/media/press/Ms-mvda5R0I.webp',
  },
  {
    id: 'LAsKP0t-Tlg',
    title: 'SAGO 2026: How ImaginAi is Shaping the Future of Edtech in Africa | CRTV News',
    originalTitle: 'SAGO 2026: How ImaginAi is Shaping the Future of Edtech in Africa | CRTV News',
    url: 'https://www.youtube.com/watch?v=LAsKP0t-Tlg',
    publisher: 'YouTube',
    publishedAt: '2026-07-15',
    format: 'Video',
    thumbnail: '/media/press/LAsKP0t-Tlg.webp',
  },
  {
    id: 'uRv6qxSw1sU',
    title: 'Rural and crisis-affected areas: how ImaginAi supports African students | Canal Matin',
    originalTitle:
      "Zones rurales ou en crise... Comment ImaginAi change l'avenir des élèves africains ? | Canal Matin",
    url: 'https://www.youtube.com/watch?v=uRv6qxSw1sU',
    publisher: 'YouTube',
    publishedAt: '2026-07-14',
    format: 'Video',
    thumbnail: '/media/press/uRv6qxSw1sU.webp',
  },
  {
    id: 'uQswJbqJOpE',
    title: 'ImaginAi: 30-second promotional film',
    originalTitle: 'Spot ImaginAi 30s Fev 2026',
    url: 'https://www.youtube.com/watch?v=uQswJbqJOpE',
    publisher: 'YouTube',
    publishedAt: '2026-04-17',
    format: 'Video',
    thumbnail: '/media/press/uQswJbqJOpE.webp',
  },
  {
    id: 'z1hgm1NO6ag',
    title:
      'ImaginAi on Jambo TV: how AI is transforming education in Africa | Canal 2 International',
    originalTitle:
      "ImaginAi sur Jambo TV : Comment l'IA transforme l'éducation en Afrique | Canal 2 International",
    url: 'https://www.youtube.com/watch?v=z1hgm1NO6ag',
    publisher: 'YouTube',
    publishedAt: '2026-07-14',
    format: 'Video',
    thumbnail: '/media/press/z1hgm1NO6ag.webp',
  },
  {
    id: 'iQQpq7e9w2w',
    title: 'ImaginAi Demo v20260315: Reinventing how the world learns',
    originalTitle: 'ImaginAi Demo v20260315 : Reinventing how the world learns',
    url: 'https://www.youtube.com/watch?v=iQQpq7e9w2w',
    publisher: 'YouTube',
    publishedAt: '2026-03-17',
    format: 'Video',
    thumbnail: '/media/press/iQQpq7e9w2w.webp',
  },
  {
    id: 'SD6g7gPCCfM',
    title: 'Discover ImaginAi: AI tailored for education (Audio Off)',
    originalTitle: "Découvrez ImaginAi: l'IA taillée pour l'éducation - (Audio Off)",
    url: 'https://www.youtube.com/watch?v=SD6g7gPCCfM',
    publisher: 'YouTube',
    publishedAt: '2025-12-24',
    format: 'Video',
    thumbnail: '/media/press/SD6g7gPCCfM.webp',
  },
  {
    id: 'NcV3_oIXTns',
    title: 'SynapsAi presentation 2025',
    originalTitle: 'Presentation SynapsAi 2025',
    url: 'https://www.youtube.com/watch?v=NcV3_oIXTns',
    publisher: 'YouTube',
    publishedAt: '2025-12-24',
    format: 'Video',
    thumbnail: '/media/press/NcV3_oIXTns.webp',
  },
];

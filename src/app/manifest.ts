import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SynapsAi',
    short_name: 'SynapsAi',
    start_url: '/',
    display: 'browser',
    background_color: '#080d0b',
    theme_color: '#080d0b',
    icons: [192, 512].map((size) => ({
      src: `/media/brand/icon-${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
    })),
  };
}

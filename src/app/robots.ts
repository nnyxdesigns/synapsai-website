import type { MetadataRoute } from 'next';
import { published, site } from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', ...(published ? { allow: '/' } : { disallow: '/' }) },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

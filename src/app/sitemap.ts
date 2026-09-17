import { buildSitemap } from '@/lib/sitemap';
import { published } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap() {
  return buildSitemap(published);
}

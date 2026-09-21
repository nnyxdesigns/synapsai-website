import type { Metadata } from 'next';
import { resolveRoute } from '@/lib/site';
import { site, published } from '@/lib/site';
import { PageLoader } from '@/components/page-loader';
import '../globals.css';
import '../insights.css';
import '../ecosystem.css';
import '../brand.css';
import '../insights-browser.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'SynapsAi — Intelligent solutions. Real-world impact.',
    template: '%s | SynapsAi',
  },
  robots: { index: published, follow: published },
  icons: {
    icon: [{ url: '/media/brand/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    shortcut: '/media/brand/favicon-32.png',
    apple: [{ url: '/media/brand/icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { locale, path } = resolveRoute((await params).slug);
  return (
    <html lang={locale}>
      <body>
        {path === '/' && <PageLoader />}
        {children}
      </body>
    </html>
  );
}

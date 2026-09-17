import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = {
  title: 'Page not found | SynapsAi',
  robots: { index: false, follow: false },
};
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="not-found">
          <span className="eyebrow">SYNAPSAI / 404</span>
          <h1>This page doesn’t exist.</h1>
          <p>Explore our solutions and work from the homepage.</p>
          <Link className="button button-dark" href="/">
            Back to home
          </Link>
          <p lang="fr">
            Cette page n’existe pas. <Link href="/fr">Consulter le site en français</Link>
          </p>
        </main>
      </body>
    </html>
  );
}

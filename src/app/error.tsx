'use client';
import { usePathname } from 'next/navigation';
export default function ErrorPage({ reset }: { reset: () => void }) {
  const fr = /^\/fr(?:\/|$)/.test(usePathname());
  return (
    <main className="not-found">
      <span className="eyebrow">SYNAPSAI</span>
      <h1>{fr ? 'Une interruption inattendue.' : 'An unexpected interruption.'}</h1>
      <p>{fr ? 'Réessayez de charger cette page.' : 'Please try loading this page again.'}</p>
      <button onClick={reset} className="button button-dark">
        {fr ? 'Réessayer' : 'Try again'}
      </button>
    </main>
  );
}

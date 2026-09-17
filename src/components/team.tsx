import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SocialIcon } from './social-icon';
import { team } from '@/lib/company';
import { Locale, localPath } from '@/lib/site';

export function CompanyNav({ locale, path }: { locale: Locale; path: string }) {
  const links = [
    ['/company', locale === 'fr' ? 'L’entreprise' : 'Company'],
    ['/company/about', locale === 'fr' ? 'Notre histoire' : 'Our story'],
    ['/company/team', locale === 'fr' ? 'L’équipe' : 'Our team'],
    ['/company/impact', locale === 'fr' ? 'Impact et jalons' : 'Impact & milestones'],
    ['/company/careers', locale === 'fr' ? 'Carrières' : 'Careers'],
  ];
  return (
    <nav
      className={`company-nav container${locale === 'en' ? ' company-nav-en' : ''}`}
      aria-label={locale === 'fr' ? 'Découvrir SynapsAi' : 'Explore SynapsAi'}
    >
      {links.map(([href, label]) => (
        <Link
          key={href}
          href={localPath(locale, href)}
          aria-current={path === href ? 'page' : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
export function Team({ locale, standalone = false }: { locale: Locale; standalone?: boolean }) {
  const fr = locale === 'fr';
  return (
    <section
      className="team-section container"
      aria-label={fr ? 'Les cofondateurs de SynapsAi' : 'SynapsAi cofounders'}
    >
      {!standalone && (
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {fr ? 'LES PERSONNES DERRIÈRE LE PRODUIT' : 'THE PEOPLE BEHIND THE PRODUCT'}
            </span>
            <h2>
              {fr
                ? 'Une équipe.\nDe l’idée à la réalisation.'
                : 'One team.\nFrom idea to execution.'}
            </h2>
          </div>
          <Link href={localPath(locale, '/company/team')} className="text-link">
            {fr ? 'Rencontrer l’équipe' : 'Meet the team'}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
      <div className="team-grid">
        {team.map((person) => (
          <article className="team-card" key={person.name}>
            <div className="team-portrait">
              <Image
                src={person.portrait}
                width={413}
                height={413}
                alt={person.name}
                sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 30vw"
              />
              <span>{person.role}</span>
            </div>
            <div className="team-card-copy">
              <span className="team-role">
                {fr ? 'Cofondateur' : 'Co-founder'} · {person.role}
              </span>
              <h3>{person.name}</h3>
              <p>{person.focus[locale]}</p>
              {!fr && (
                <a
                  className="team-linkedin"
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                >
                  <SocialIcon name="LinkedIn" />
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {standalone && (
        <div className="team-context">
          <span className="eyebrow">{fr ? 'UNE MÊME AMBITION' : 'A SHARED AMBITION'}</span>
          <div>
            <h2>
              {fr
                ? 'Rendre l’intelligence artificielle utile au quotidien.'
                : 'Make artificial intelligence useful in everyday life.'}
            </h2>
            <p>
              {fr
                ? 'Depuis 2024, SynapsAi développe des solutions pour accompagner les apprenants, les enseignants et les professionnels. Les trois cofondateurs réunissent direction de l’entreprise, vision technologique et pilotage technique autour de cette ambition.'
                : 'Since 2024, SynapsAi has developed solutions to support learners, teachers, and professionals. Its three cofounders bring company direction, technology strategy, and technical leadership to that ambition.'}
            </p>
            <p>
              {fr
                ? 'Avec ImaginAi, ce travail prend la forme d’un écosystème éducatif. L’équipe produit et technique collabore avec des enseignants pour ancrer les expériences d’apprentissage dans les besoins pédagogiques.'
                : 'With ImaginAi, that work takes the form of an education ecosystem. Product and technology work is informed by collaboration with teachers, grounding learning experiences in educational needs.'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

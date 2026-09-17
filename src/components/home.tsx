import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Cpu, Layers3, Smartphone, Award, Globe2 } from 'lucide-react';
import { copy, facts, localPath, Locale, solutions, solutionSlugs } from '@/lib/site';
import { Cta, ProductImage, TextLink } from './site-ui';
import { SystemVisual, OrbitVisual } from './visuals';
import { EcosystemFeature } from './ecosystem';
import { InsightsPreview } from './insights';
export function Home({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const icons = [Cpu, Layers3, Smartphone];
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="accent-dash" />
            {t.eyebrow}
          </span>
          <h1>
            {t.hero[0]}
            <br />
            <span>{t.hero[1]}</span>
          </h1>
          <p>{t.intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href={localPath(locale, '/contact')}>
              {t.talk}
              <ArrowUpRight size={17} />
            </Link>
            <TextLink href={localPath(locale, '/work')}>{t.explore}</TextLink>
          </div>
          <div className="hero-origin">
            <Globe2 size={13} />
            {t.origin}
          </div>
        </div>
        <SystemVisual locale={locale} />
        <a
          href="#capabilities"
          className="scroll-hint"
          aria-label={locale === 'fr' ? 'Découvrir nos solutions' : 'Discover our capabilities'}
        >
          <ArrowDown size={14} />
          <span>{locale === 'fr' ? 'L’AMBITION DE CONSTRUIRE' : 'SCROLL TO DISCOVER'}</span>
        </a>
      </section>
      <section
        className="proof-strip container"
        aria-label={locale === 'fr' ? 'Nos réalisations en bref' : 'Proof of execution'}
      >
        <div className="proof-intro">
          {locale === 'fr' ? (
            <>
              Des idées concrétisées.
              <br />
              <strong>Des produits utilisés.</strong>
            </>
          ) : (
            <>
              Ideas made real.
              <br />
              <strong>Products in people’s hands.</strong>
            </>
          )}
        </div>
        <div className="proof-item">
          <strong>{facts.learners}</strong>
          <span>{t.proof[0]}</span>
        </div>
        <div className="proof-item">
          <strong>{t.proof[1]}</strong>
          <span>{t.proof[2]}</span>
        </div>
        <div className="proof-item proof-award">
          <Award size={27} strokeWidth={1.3} />
          <div>
            <strong>{t.proof[3]}</strong>
            <span>{t.proof[4]}</span>
          </div>
        </div>
      </section>
      <section id="capabilities" className="section container capabilities">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.capabilities}</span>
            <h2>{t.capabilityTitle}</h2>
          </div>
          <p>{t.capabilityIntro}</p>
        </div>
        <div className="capability-list">
          {solutions[locale].slice(0, 3).map((s, i) => {
            const Icon = icons[i];
            return (
              <Link
                href={localPath(locale, `/solutions/${solutionSlugs[i]}`)}
                className="capability-row"
                key={s.title}
              >
                <span className="capability-number">0{i + 1}</span>
                <span className="capability-icon">
                  <Icon size={24} strokeWidth={1.4} />
                </span>
                <h3>
                  {i === 2
                    ? locale === 'fr'
                      ? 'Produits numériques'
                      : 'Digital Products'
                    : s.title}
                </h3>
                <p>{s.description}</p>
                <span className="circle-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="capabilities-bottom">
          <span>
            {locale === 'fr'
              ? 'Le produit, le design et l’ingénierie. Ensemble.'
              : 'Product thinking, design, and engineering. Connected.'}
          </span>
          <TextLink href={localPath(locale, '/solutions')}>{t.allSolutions}</TextLink>
        </div>
      </section>
      {locale === 'en' ? (
        <EcosystemFeature />
      ) : (
        <section className="work-section">
          <div className="container work-grid">
            <div className="work-copy">
              <span className="eyebrow">{t.workLabel}</span>
              <h2>{t.workTitle}</h2>
              <p>{t.workDesc}</p>
              <div className="work-tags">
                <span>{locale === 'fr' ? 'Ingénierie produit' : 'Product engineering'}</span>
                <span>{locale === 'fr' ? 'Intelligence artificielle' : 'Applied AI'}</span>
                <span>EdTech</span>
              </div>
              <TextLink light href={localPath(locale, '/work/imaginai')}>
                {t.caseStudy}
              </TextLink>
              <div className="work-proof">
                <strong>
                  143K<span>+</span>
                </strong>
                <span>
                  {locale === 'fr'
                    ? 'apprenants accompagnés\npar ImaginAi'
                    : 'learners supported\nby ImaginAi'}
                </span>
              </div>
            </div>
            <ProductImage locale={locale} />
          </div>
        </section>
      )}
      <section className="section container problems-section">
        <div>
          <span className="eyebrow">{t.problemsLabel}</span>
          <h2>{t.problemsTitle}</h2>
        </div>
        <div className="problem-list">
          {t.problems.map((problem, i) => (
            <Link key={problem} href={localPath(locale, `/solutions/${solutionSlugs[i]}`)}>
              <span className="problem-index">0{i + 1}</span>
              <div>
                <h3>{problem}</h3>
                <span>{t.problemCopy[i]}</span>
              </div>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
      </section>
      <section className="approach-section container">
        <OrbitVisual />
        <div>
          <span className="eyebrow">{t.approachLabel}</span>
          <h2>{t.approachTitle}</h2>
          <p>{t.approachDesc}</p>
          <TextLink href={localPath(locale, '/company/about')}>{t.company}</TextLink>
        </div>
      </section>
      {locale === 'en' && (
        <>
          <div className="container home-recognition">
            <span>PROMEX 2025 · Award</span>
            <span>CONIA 2025 · Participation</span>
            <span>CITS 2026 · Bootcamp</span>
            <TextLink href="/company/impact">Recognition & milestones</TextLink>
          </div>
          <InsightsPreview />
        </>
      )}
      <Cta locale={locale} />
    </>
  );
}

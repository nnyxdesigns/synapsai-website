import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Cpu, Layers3, Smartphone, Award, Globe2 } from 'lucide-react';
import { copy, facts, localPath, Locale, solutions, solutionSlugs } from '@/lib/site';
import { Cta, ProductImage, TextLink } from './site-ui';
import { SystemVisual, OrbitVisual } from './visuals';
import { EcosystemFeature } from './ecosystem';
import { InsightsPreview } from './insights';

const englishHomepageProof = {
  users: '+145K',
  usersLabel: 'users impacted',
  support: 'Powered by Microsoft for Startups',
  supportLabel: 'Startup program support',
  recognition: 'Mastercard Foundation',
  recognitionLabel: 'GHSS-YIC · Youth Innovation Challenge · 2026',
};

export function Home({ locale }: { locale: Locale }) {
  if (locale === 'en') return <EnglishHome />;
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
      <Cta locale={locale} />
    </>
  );
}

function EnglishHome() {
  const t = copy.en;
  const icons = [Cpu, Layers3, Smartphone];
  const problemVisuals = [
    {
      src: '/media/generated/home/real-world-automation-mechanical-concept.png',
      alt: 'Mechanical concept system with glass panels and small glowing spheres representing automation',
    },
    {
      src: '/media/generated/home/real-world-workflow-concept.png',
      alt: 'Conceptual modular pathway representing workflow fit',
    },
    {
      src: '/media/generated/home/real-world-after-launch-concept.png',
      alt: 'Conceptual evolving structure representing long-term product care',
    },
  ];

  return (
    <div className="home-english">
      <section className="hero container home-hero">
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
            <Link className="button button-dark" href="/contact">
              {t.talk}
              <ArrowUpRight size={17} />
            </Link>
            <TextLink href="/work">{t.explore}</TextLink>
          </div>
          <div className="hero-origin">
            <Globe2 size={13} />
            {t.origin}
          </div>
        </div>
        <div className="home-hero-visual">
          <figure className="home-hero-photo">
            <Image
              src="/media/generated/home/home-team-hero-concept.png"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
              alt="Fictional product team collaborating around an AI product concept"
            />
          </figure>
        </div>
      </section>

      <section className="home-band home-band-light">
        <div className="proof-strip container" aria-label="Proof of execution">
          <div className="proof-intro">
            Ideas made real.
            <br />
            <strong>Products in people’s hands.</strong>
          </div>
          <div className="proof-item">
            <strong>{englishHomepageProof.users}</strong>
            <span>{englishHomepageProof.usersLabel}</span>
          </div>
          <div className="proof-item">
            <strong>{englishHomepageProof.support}</strong>
            <span>{englishHomepageProof.supportLabel}</span>
          </div>
          <div className="proof-item proof-award">
            <Award size={27} strokeWidth={1.3} />
            <div>
              <strong>{englishHomepageProof.recognition}</strong>
              <span>{englishHomepageProof.recognitionLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="home-band home-band-dark">
        <div className="section container capabilities">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t.capabilities}</span>
              <h2>{t.capabilityTitle}</h2>
            </div>
            <p>{t.capabilityIntro}</p>
          </div>
          <div className="capability-list">
            {solutions.en.slice(0, 3).map((s, i) => {
              const Icon = icons[i];
              return (
                <Link
                  href={`/solutions/${solutionSlugs[i]}`}
                  className="capability-row"
                  key={s.title}
                >
                  <span className="capability-number">0{i + 1}</span>
                  <span className="capability-icon">
                    <Icon size={24} strokeWidth={1.4} />
                  </span>
                  <h3>{i === 2 ? 'Digital Products' : s.title}</h3>
                  <p>{s.description}</p>
                  <span className="circle-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="capabilities-bottom">
            <span>Product thinking, design, and engineering. Connected.</span>
            <TextLink href="/solutions">{t.allSolutions}</TextLink>
          </div>
        </div>
      </section>

      <EcosystemFeature />

      <section className="home-context-band">
        <div className="container home-context-grid">
          <figure className="home-context-visual">
            <Image
              src="/media/generated/home/home-learning-context-concept.png"
              width={1024}
              height={1536}
              sizes="(max-width: 760px) 100vw, 42vw"
              alt="Fictional learner working with a mentor around a study exercise"
            />
            <figcaption>CONCEPT VISUAL / FICTIONAL LEARNING SCENE</figcaption>
          </figure>
          <div className="home-context-copy">
            <span className="eyebrow">THE CONDITIONS AROUND THE PRODUCT</span>
            <h2>Useful technology starts with the situation around it.</h2>
            <p>
              People bring different tools, languages, access conditions and ways of working to the
              same task. We design the product around that context, so the interface can support the
              next useful decision.
            </p>
            <div className="home-context-points" aria-label="Design principles">
              <span>
                <b>01</b> Start with the real task
              </span>
              <span>
                <b>02</b> Make complexity feel workable
              </span>
              <span>
                <b>03</b> Leave room for human judgment
              </span>
            </div>
            <TextLink href="/company/about">How we work</TextLink>
          </div>
        </div>
      </section>

      <section className="home-band home-band-dark home-problems-band">
        <div className="section container problems-section">
          <div>
            <span className="eyebrow">{t.problemsLabel}</span>
            <h2>{t.problemsTitle}</h2>
          </div>
          <div className="problem-list">
            {t.problems.map((problem, i) => (
              <Link
                key={problem}
                href={`/solutions/${solutionSlugs[i]}`}
                className="home-problem-card"
              >
                <figure className="home-problem-visual">
                  <Image
                    src={problemVisuals[i].src}
                    alt={problemVisuals[i].alt}
                    width={716}
                    height={716}
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </figure>
                <div className="home-problem-copy">
                  <span className="problem-index">0{i + 1}</span>
                  <h3>{problem}</h3>
                  <span>{t.problemCopy[i]}</span>
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band home-band-light">
        <div className="approach-section container">
          <div className="home-approach-visual">
            <figure className="home-network-visual">
              <Image
                src="/media/generated/home/home-network-concept.png"
                width={1536}
                height={1024}
                sizes="(max-width: 760px) 100vw, 48vw"
                alt="Conceptual network connecting people, context, workflow and learning"
              />
              <figcaption>CONCEPT SYSTEM MAP / NOT PRODUCT DATA</figcaption>
            </figure>
          </div>
          <div>
            <span className="eyebrow">{t.approachLabel}</span>
            <h2>{t.approachTitle}</h2>
            <p>{t.approachDesc}</p>
            <TextLink href="/company/about">{t.company}</TextLink>
          </div>
        </div>
      </section>

      <section className="home-band home-band-dark home-proof-band">
        <InsightsPreview />
      </section>

      <Cta locale="en" />
    </div>
  );
}

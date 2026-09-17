import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Globe2,
  Mail,
  Layers3,
  Cpu,
  Smartphone,
} from 'lucide-react';
import { copy, Locale, localPath, solutions, solutionSlugs } from '@/lib/site';
import { Cta, ProductImage, TextLink } from './site-ui';
import { OrbitVisual, SystemVisual } from './visuals';
import { ContactForm } from './contact-form';
import { CompanyNav, Team } from './team';
import { Careers } from './careers';
import {
  ProductsHub,
  ProductDetail,
  EcosystemCaseStudy,
  ImpactPage,
  DeliveryMethod,
  CompanyOverview,
} from './ecosystem';
import { englishPageMeta } from '@/lib/ecosystem';
const titles: Record<string, { en: string; fr: string }> = {
  '/solutions': {
    en: 'Technology shaped around your next move.',
    fr: 'La technologie au service de votre prochaine étape.',
  },
  '/products': {
    en: 'Ideas we believe in. Products we build.',
    fr: 'Des idées qui nous animent. Des produits que nous construisons.',
  },
  '/products/imaginai': { en: 'A connected way to learn.', fr: 'Apprendre, autrement. Ensemble.' },
  '/work': { en: 'Built to make a difference.', fr: 'Des produits pour faire une différence.' },
  '/work/imaginai': {
    en: 'ImaginAi. From an idea to a learning ecosystem.',
    fr: 'ImaginAi. D’une idée à un écosystème éducatif.',
  },
  '/company': {
    en: 'Product minds. Engineering hands.',
    fr: 'L’esprit produit. Le savoir-faire technique.',
  },
  '/company/about': {
    en: 'Technology with purpose. Built in Cameroon.',
    fr: 'Une technologie qui a du sens. Née au Cameroun.',
  },
  '/company/team': {
    en: 'The people behind what we build.',
    fr: 'Les personnes derrière nos réalisations.',
  },
  '/company/impact': {
    en: 'Built, used and recognized.',
    fr: 'Construire, être utile, avancer.',
  },
  '/faq': {
    en: 'A few things you might be wondering.',
    fr: 'Les réponses à vos premières questions.',
  },
  '/contact': { en: 'What should we build next?', fr: 'Que construire ensemble ?' },
};
export function pageTitle(path: string, locale: Locale) {
  if (locale === 'en' && englishPageMeta[path]) return englishPageMeta[path].title;
  const i = solutionSlugs.indexOf(path.split('/')[2] as (typeof solutionSlugs)[number]);
  return path.startsWith('/solutions/') && i >= 0
    ? solutions[locale][i].title
    : titles[path]?.[locale] || 'SynapsAi';
}
export function pageDescription(path: string, locale: Locale) {
  if (locale === 'en' && englishPageMeta[path]) return englishPageMeta[path].description;
  const i = solutionSlugs.indexOf(path.split('/')[2] as (typeof solutionSlugs)[number]);
  if (path.startsWith('/solutions/') && i >= 0) return solutions[locale][i].description;
  const descriptions: Record<string, [string, string]> = {
    '/solutions': [
      'Explore AI, automation, custom software, web and mobile products, and digital transformation with SynapsAi.',
      'Découvrez les solutions SynapsAi : IA, automatisation, logiciels sur mesure, web, mobile et transformation digitale.',
    ],
    '/products': [
      'Discover the digital products designed and built by SynapsAi, including the ImaginAi education ecosystem.',
      'Découvrez les produits numériques conçus par SynapsAi, dont l’écosystème éducatif ImaginAi.',
    ],
    '/products/imaginai': [
      'Discover ImaginAi: AI-powered learning experiences for learners and a web platform for teachers.',
      'Découvrez ImaginAi : un apprentissage enrichi par l’IA pour les apprenants et une plateforme web pour les enseignants.',
    ],
    '/work': [
      'See what SynapsAi has built: real products, applied AI, and an education ecosystem used by 143K+ learners.',
      'Découvrez les réalisations SynapsAi : produits numériques, IA appliquée et un écosystème utilisé par plus de 143 000 apprenants.',
    ],
    '/work/imaginai': [
      'Explore how SynapsAi brought AI, mobile software, and a teacher web platform together in ImaginAi.',
      'Découvrez comment SynapsAi réunit IA, application mobile et plateforme web pour enseignants dans ImaginAi.',
    ],
    '/company': [
      'Meet SynapsAi, a Cameroonian technology company focused on useful software, applied AI, and digital products.',
      'Découvrez SynapsAi, une entreprise technologique camerounaise spécialisée dans le logiciel, l’IA et les produits numériques.',
    ],
    '/company/about': [
      'Learn about SynapsAi’s purpose, product perspective, and approach to engineering digital solutions.',
      'Découvrez la mission de SynapsAi, sa vision produit et son approche de la conception de solutions numériques.',
    ],
    '/company/team': [
      'Meet SynapsAi’s cofounders: Frank Arnaud Yap, CTO; Youssouf Nchetkou Ndam, CEO; and Steve Mekam Kontche, Tech Lead.',
      'Découvrez les cofondateurs de SynapsAi : Frank Arnaud Yap, CTO ; Youssouf Nchetkou Ndam, CEO ; et Steve Mekam Kontche, Tech Lead.',
    ],
    '/company/impact': [
      'Review SynapsAi’s documented milestones, product reach, participation and recognition around ImaginAi.',
      'Découvrez les jalons documentés de SynapsAi, la portée du produit, les participations et les distinctions liées à ImaginAi.',
    ],
    '/faq': [
      'Answers about SynapsAi, our solutions, ImaginAi, and starting a project conversation.',
      'Les réponses sur SynapsAi, nos solutions, ImaginAi et la prise de contact pour votre projet.',
    ],
    '/contact': [
      'Tell SynapsAi about your idea, your organization, and the challenge you want to solve.',
      'Présentez votre idée, votre organisation et le défi que vous souhaitez résoudre avec SynapsAi.',
    ],
  };
  return descriptions[path]?.[locale === 'fr' ? 1 : 0] || copy[locale].intro;
}
function PageHero({
  locale,
  path,
  label,
  description,
}: {
  locale: Locale;
  path: string;
  label: string;
  description?: string;
}) {
  return (
    <section className="page-hero container">
      <div className="breadcrumbs">
        <Link href={localPath(locale)}>{locale === 'fr' ? 'Accueil' : 'Home'}</Link>
        <span>/</span>
        <span>{label}</span>
      </div>
      <span className="eyebrow">
        <span className="accent-dash" />
        {label}
      </span>
      <h1>{pageTitle(path, locale)}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}
export function Interior({ locale, path }: { locale: Locale; path: string }) {
  const fr = locale === 'fr';
  const t = copy[locale];
  const solutionIndex = solutionSlugs.indexOf(path.split('/')[2] as (typeof solutionSlugs)[number]);
  if (!fr) {
    if (path === '/company/careers') return <Careers locale={locale} />;
    if (path === '/company') return <CompanyOverview />;
    if (path === '/products') return <ProductsHub />;
    if (path === '/products/imaginai') return <ProductDetail />;
    if (path === '/products/imaginai-prof') return <ProductDetail prof />;
    if (path === '/work/imaginai') return <EcosystemCaseStudy />;
    if (path === '/company/impact') return <ImpactPage />;
  }
  if (path === '/company/impact') return <ImpactPage locale={locale} />;
  if (path === '/company/careers') return <Careers locale={locale} />;
  if (path === '/company/team')
    return (
      <>
        <PageHero
          locale={locale}
          path={path}
          label={t.team}
          description={
            fr
              ? 'Trois cofondateurs. Une ambition commune : relier les besoins des personnes aux possibilités de l’intelligence artificielle et du logiciel.'
              : 'Three cofounders. One shared ambition: connect people’s needs with the possibilities of AI and software.'
          }
        />
        <CompanyNav locale={locale} path={path} />
        <Team locale={locale} standalone />
        <Cta locale={locale} />
      </>
    );
  if (path === '/contact')
    return (
      <>
        <section className="container contact-layout">
          <div className="contact-intro">
            <span className="eyebrow">
              <span className="accent-dash" />
              {fr ? 'PARLONS DE VOTRE PROJET' : 'LET’S START A CONVERSATION'}
            </span>
            <h1>{pageTitle(path, locale)}</h1>
            <p>
              {fr
                ? 'Une idée à explorer. Un processus à améliorer. Un produit à construire. Racontez-nous ce que vous avez en tête.'
                : 'An idea to explore. A process to improve. A product to build. Tell us what you have in mind.'}
            </p>
            <a className="contact-email" href="mailto:contact@synapsai.co">
              <Mail size={19} />
              contact@synapsai.co
              <ArrowUpRight size={18} />
            </a>
            <span className="contact-location">
              <Globe2 size={17} />
              {t.origin}
            </span>
            <OrbitVisual />
          </div>
          <ContactForm locale={locale} />
        </section>
      </>
    );
  if (path === '/solutions')
    return (
      <>
        <PageHero
          locale={locale}
          path={path}
          label={t.nav[0]}
          description={
            fr
              ? 'Partir du besoin. Concevoir le bon outil. Connecter les personnes, les processus et la technologie.'
              : 'Start with the need. Shape the right tool. Connect people, processes, and technology.'
          }
        />
        <section className="container solution-directory">
          {solutions[locale].map((s, i) => (
            <Link
              key={s.title}
              href={localPath(locale, `/solutions/${solutionSlugs[i]}`)}
              className="solution-entry"
            >
              <span className="eyebrow">
                0{i + 1} / {s.title}
              </span>
              <h2>{s.short}</h2>
              <p>{s.description}</p>
              <div className="solution-entry-bottom">
                <span>{fr ? 'Explorer cette solution' : 'Explore this solution'}</span>
                <ArrowUpRight size={23} />
              </div>
            </Link>
          ))}
        </section>
        {!fr && <DeliveryMethod />}
        <Cta locale={locale} />
      </>
    );
  if (path.startsWith('/solutions/') && solutionIndex >= 0) {
    const s = solutions[locale][solutionIndex];
    return (
      <>
        <PageHero locale={locale} path={path} label={t.nav[0]} description={s.description} />
        <section className="container solution-detail">
          <div>
            <span className="eyebrow">{fr ? 'VOTRE POINT DE DÉPART' : 'YOUR STARTING POINT'}</span>
            <h2>{s.short}</h2>
            <p>{s.problem}</p>
            <p>{s.outcome}</p>
            <Link className="button button-dark" href={localPath(locale, '/contact')}>
              {t.talk}
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <SystemVisual locale={locale} />
        </section>
        <section className="container detail-scope">
          <span className="eyebrow">
            {fr ? 'À EXPLORER ENSEMBLE' : 'WHAT WE CAN EXPLORE TOGETHER'}
          </span>
          {s.details.map((detail, i) => (
            <div key={detail}>
              <span>0{i + 1}</span>
              <h3>{detail}</h3>
              <Check size={20} />
            </div>
          ))}
        </section>
        <section className="container related-work">
          <div>
            <span className="eyebrow">{fr ? 'DU CONCRET' : 'SEE IT IN PRACTICE'}</span>
            <h2>{fr ? 'Notre expérience, en produit.' : 'Our experience, in a product.'}</h2>
            <p>
              {fr
                ? 'ImaginAi réunit intelligence artificielle, application mobile et plateforme web dans un écosystème éducatif.'
                : 'ImaginAi brings AI, mobile software, and a web platform together in one education ecosystem.'}
            </p>
            <TextLink href={localPath(locale, '/work/imaginai')}>{t.caseStudy}</TextLink>
          </div>
          <ProductImage locale={locale} />
        </section>
        {!fr && <DeliveryMethod institutional={solutionIndex === 3} />}
        <Cta locale={locale} />
      </>
    );
  }
  if (path === '/products' || path === '/work')
    return (
      <>
        <PageHero
          locale={locale}
          path={path}
          label={path === '/products' ? t.nav[1] : t.nav[2]}
          description={
            path === '/products'
              ? fr
                ? 'Nos produits mettent le design, l’ingénierie et l’intelligence artificielle au service d’expériences d’apprentissage connectées.'
                : 'Our own products: where design, engineering, and applied AI come together.'
              : fr
                ? 'Des réalisations tangibles. Découvrez comment ImaginAi relie apprenants, enseignants et usages du quotidien.'
                : 'Real execution. Explore the ImaginAi education ecosystem.'
          }
        />
        <section className="container portfolio-feature">
          <Link
            href={localPath(locale, `${path}/imaginai`)}
            className="portfolio-image-link"
            aria-label={path === '/work' ? t.caseStudy : t.product}
          >
            <ProductImage locale={locale} large />
          </Link>
          <div className="portfolio-caption">
            <div>
              <span className="eyebrow">EDTECH · IA · WEB · MOBILE</span>
              <h2>ImaginAi</h2>
              <p>
                {fr
                  ? path === '/products'
                    ? 'Une expérience mobile pour les apprenants et une plateforme web pour les enseignants, réunies dans un même écosystème.'
                    : 'Une réalisation SynapsAi qui rassemble stratégie produit, design et ingénierie autour de l’apprentissage.'
                  : t.workDesc}
              </p>
            </div>
            <TextLink href={localPath(locale, `${path}/imaginai`)}>
              {path === '/work' ? t.caseStudy : t.product}
            </TextLink>
          </div>
        </section>
        <Cta locale={locale} />
      </>
    );
  if (path === '/products/imaginai' || path === '/work/imaginai') {
    const isWork = path.startsWith('/work');
    return (
      <>
        <PageHero
          locale={locale}
          path={path}
          label={isWork ? (fr ? 'ÉTUDE DE CAS / IMAGINAI' : 'CASE STUDY / IMAGINAI') : 'IMAGINAI'}
          description={
            isWork
              ? fr
                ? 'Un produit SynapsAi qui associe intelligence artificielle, ingénierie mobile et plateforme web au service de l’apprentissage.'
                : 'A SynapsAi product bringing together applied AI, mobile engineering, and a web platform in support of learning.'
              : t.workDesc
          }
        />
        <div className="container product-wide">
          <ProductImage locale={locale} large />
        </div>
        <section className="container case-facts">
          <div>
            <span>{fr ? 'PRODUIT' : 'PRODUCT'}</span>
            <strong>ImaginAi</strong>
          </div>
          <div>
            <span>{fr ? 'PLATEFORMES' : 'PLATFORMS'}</span>
            <strong>Web & mobile</strong>
          </div>
          <div>
            <span>{fr ? 'APPRENANTS' : 'LEARNERS'}</span>
            <strong>143K+</strong>
          </div>
          <div>
            <span>{fr ? 'DISTINCTION' : 'RECOGNITION'}</span>
            <strong>PROMEX 2025</strong>
          </div>
        </section>
        <section className="container story-section">
          <span className="eyebrow">
            {isWork ? (fr ? 'LE CONTEXTE' : 'THE CONTEXT') : fr ? 'L’ÉCOSYSTÈME' : 'THE ECOSYSTEM'}
          </span>
          <div>
            <h2>
              {fr
                ? 'L’apprentissage, de part et d’autre de la classe.'
                : 'Learning, on both sides of the classroom.'}
            </h2>
            <p>
              {fr
                ? 'ImaginAi s’adresse aux apprenants d’Afrique subsaharienne et aux enseignants. L’écosystème associe une application mobile pour les apprenants à une plateforme web responsive pour les enseignants.'
                : 'ImaginAi serves learners in Sub-Saharan Africa and teachers. Its ecosystem connects a learner mobile application with a responsive web platform for teachers.'}
            </p>
            <p>
              {isWork
                ? fr
                  ? 'Cette réalisation rassemble stratégie produit, design et ingénierie autour d’un même besoin : accompagner l’apprentissage avec des expériences intégrant l’intelligence artificielle.'
                  : 'This work brings product thinking, design, and engineering together around a shared need: supporting learning through AI-powered experiences.'
                : fr
                  ? 'Les expériences d’apprentissage intègrent l’intelligence artificielle. Les outils mobiles comprennent des quiz, des examens et des échanges avec une IA.'
                  : 'AI is part of the learning experience. Mobile tools include quizzes, exams, and conversations with an AI assistant.'}
            </p>
          </div>
        </section>
        <section className="container ecosystem-grid">
          {[
            {
              icon: Smartphone,
              title: fr ? 'Pour les apprenants' : 'For learners',
              desc: fr
                ? 'Des parcours guidés, des exercices, des quiz avec corrections et un suivi de progression sur mobile.'
                : 'Guided paths, exercises, quizzes with corrections, and progress tracking on mobile.',
            },
            {
              icon: Layers3,
              title: fr ? 'Pour les enseignants' : 'For teachers',
              desc: fr
                ? 'Une plateforme web pour gérer les classes, suivre les apprenants et organiser ressources et activités.'
                : 'A web platform to manage classes, follow learner progress, and organize resources and activities.',
            },
            {
              icon: Cpu,
              title: fr ? 'Une réalisation SynapsAi' : 'Built by SynapsAi',
              desc: fr
                ? 'Le design produit et l’ingénierie réunis dans un écosystème en production.'
                : 'Product design and engineering in a deployed ecosystem.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon size={26} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </section>
        <section className="container story-section">
          <span className="eyebrow">{fr ? 'UNE PREUVE CONCRÈTE' : 'PROOF IN PRACTICE'}</span>
          <div>
            <h2>
              {fr ? 'Un produit entre les mains des utilisateurs.' : 'A product in people’s hands.'}
            </h2>
            <p>
              {fr
                ? 'Le site officiel présente plus de 143 000 apprenants et la distinction « Meilleur projet numérique éducatif — PROMEX 2025 ». Ces éléments illustrent le parcours d’ImaginAi.'
                : 'The official website reports 143K+ learners and recognition as Best Educational Digital Project at PROMEX 2025. These are milestones in ImaginAi’s journey.'}
            </p>
            <div className="story-links">
              <a
                href="https://imaginai.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
              >
                {fr ? 'Visiter ImaginAi' : 'Visit ImaginAi'}
                <ArrowUpRight size={17} />
              </a>
              <TextLink href={localPath(locale, isWork ? '/products/imaginai' : '/work/imaginai')}>
                {isWork ? t.product : t.caseStudy}
              </TextLink>
            </div>
          </div>
        </section>
        <Cta locale={locale} />
      </>
    );
  }
  if (path === '/company' || path === '/company/about')
    return (
      <>
        <PageHero
          locale={locale}
          path={path}
          label={t.nav[3]}
          description={
            fr
              ? 'Fondée en 2024 au Cameroun, SynapsAi développe des solutions pour accompagner les apprenants, les enseignants et les professionnels. Notre ambition : rendre l’IA plus accessible et l’ancrer dans des usages concrets.'
              : 'Founded in 2024 in Cameroon, SynapsAi develops solutions for learners, teachers, and professionals. Our ambition is to make AI more accessible and connect it to practical, everyday uses.'
          }
        />
        <CompanyNav locale={locale} path={path} />
        <section className="container company-statement">
          <OrbitVisual />
          <div>
            <span className="eyebrow">{fr ? 'NOTRE RAISON D’ÊTRE' : 'OUR PURPOSE'}</span>
            <h2>
              {fr
                ? 'Relier les besoins réels aux possibilités de la technologie.'
                : 'Connect real needs to what technology makes possible.'}
            </h2>
            <p>
              {fr
                ? 'Nous nous intéressons aux outils qui aident les personnes et les organisations au quotidien. Cela passe par le design produit, le développement logiciel et l’application de l’IA à des besoins concrets.'
                : 'We focus on tools that help people and organizations in their everyday work. That means product design, software development, and applying AI to practical needs.'}
            </p>
          </div>
        </section>
        <section className="container story-section">
          <span className="eyebrow">{fr ? 'NOTRE PERSPECTIVE' : 'OUR PERSPECTIVE'}</span>
          <div>
            <h2>
              {fr
                ? 'Construire pour comprendre. Comprendre pour mieux construire.'
                : 'Build to understand. Understand to build better.'}
            </h2>
            <p>{t.approachDesc}</p>
            <p>
              {fr
                ? 'ImaginAi incarne cette approche : un écosystème éducatif associant une application mobile, une plateforme web et des expériences d’apprentissage intégrant l’IA.'
                : 'ImaginAi puts that approach into practice: an education ecosystem connecting a mobile app, a web platform, and AI-powered learning experiences.'}
            </p>
            <TextLink href={localPath(locale, '/work/imaginai')}>{t.caseStudy}</TextLink>
          </div>
        </section>
        <section className="container company-principles">
          <article>
            <span className="eyebrow">{fr ? 'NOTRE MISSION' : 'OUR MISSION'}</span>
            <h2>{fr ? 'L’IA, à portée d’usage.' : 'AI within everyday reach.'}</h2>
            <p>
              {fr
                ? 'Rendre les services d’intelligence artificielle plus accessibles, inclusifs et personnalisés. Partir d’un besoin réel pour concevoir une expérience que chacun peut s’approprier.'
                : 'Make AI services more accessible, inclusive, and personal. Begin with a real need and design an experience people can make their own.'}
            </p>
          </article>
          <article>
            <span className="eyebrow">{fr ? 'NOTRE ANCRAGE' : 'OUR PERSPECTIVE'}</span>
            <h2>{fr ? 'Comprendre le contexte.' : 'Understand the context.'}</h2>
            <p>
              {fr
                ? 'Avec ImaginAi, nous abordons l’apprentissage à partir des réalités locales : accès aux ressources, accompagnement après les cours et contraintes d’usage mobile. Une attention au terrain qui donne du sens au produit.'
                : 'With ImaginAi, we approach learning through local realities: access to resources, support beyond the classroom, and the constraints of mobile use. That attention to context gives the product its purpose.'}
            </p>
          </article>
        </section>
        <Team locale={locale} />
        <Cta locale={locale} />
      </>
    );
  const questions = fr
    ? [
        [
          'Que construit SynapsAi ?',
          'SynapsAi conçoit des logiciels sur mesure, des produits web et mobile, des solutions d’intelligence artificielle et des outils d’automatisation des processus métier.',
        ],
        [
          'ImaginAi est-il un produit de SynapsAi ?',
          'Oui. ImaginAi est l’écosystème éducatif développé par SynapsAi. Il associe une application pour les apprenants et une plateforme web pour les enseignants.',
        ],
        [
          'Faut-il déjà avoir un cahier des charges ?',
          'Vous pouvez commencer par décrire votre idée, votre organisation et le problème à résoudre dans un e-mail. La page contact vous aide à préparer ce premier échange.',
        ],
        [
          'Comment discuter d’un budget ou d’un calendrier ?',
          'Présentez votre besoin à contact@synapsai.co. Le périmètre, le calendrier et le budget sont des sujets à préciser avec l’équipe pour votre projet.',
        ],
        [
          'Où découvrir ImaginAi ?',
          'Le site imaginai.io présente l’écosystème ImaginAi. Vous trouverez également une présentation du produit et une étude de cas sur ce site.',
        ],
      ]
    : [
        [
          'What does SynapsAi build?',
          'SynapsAi designs custom software, web and mobile products, artificial intelligence solutions, and business-process automation tools.',
        ],
        [
          'Is ImaginAi a SynapsAi product?',
          'Yes. SynapsAi builds and owns the ecosystem: ImaginAi is the mobile application for secondary and higher-education learners; ImaginAi Prof is the web platform for teachers and instructors.',
        ],
        [
          'Do I need a detailed brief to get in touch?',
          'You can start by describing your idea, your organization, and the problem you want to solve in an email. Our contact page helps you prepare that first conversation.',
        ],
        [
          'How can I discuss a budget or timeline?',
          'Share your needs with contact@synapsai.co. Scope, timeline, and budget are topics to clarify with the team for your specific project.',
        ],
        [
          'Where can I discover ImaginAi?',
          'Visit imaginai.io for the ImaginAi ecosystem. You can also explore the product overview and case study on this website.',
        ],
      ];
  return (
    <>
      <PageHero locale={locale} path={path} label="FAQ" />
      <section className="container faq-layout">
        <div>
          <h2>{fr ? 'Faisons connaissance.' : 'Let’s get acquainted.'}</h2>
          <p>
            {fr
              ? 'Une autre question ? Parlons-en directement.'
              : 'Have another question? Let’s talk about it.'}
          </p>
          <TextLink href={localPath(locale, '/contact')}>{t.talk}</TextLink>
        </div>
        <div className="faq-list">
          {questions.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <ArrowRight size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}

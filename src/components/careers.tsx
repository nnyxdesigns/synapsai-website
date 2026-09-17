import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { team } from '@/lib/company';
import type { Locale } from '@/lib/site';
import { CompanyNav } from './team';
import './careers.css';

const conversation = 'mailto:contact@synapsai.co?subject=Careers%20at%20SynapsAi';

function CareersDrawing({ locale = 'en' }: { locale?: Locale }) {
  return (
    <svg className="careers-drawing" viewBox="0 0 1000 430" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8">
        <path
          className="careers-grid"
          d="M20 280 500 30 980 280 500 530ZM20 190 500 440 980 190M140 128 620 378M260 66 740 316M380 4 860 254M140 342 620 92M260 404 740 154M380 466 860 216"
        />
        {[0, 1, 2].map((i) => (
          <g
            key={i}
            className={`careers-layer careers-layer-${i}`}
            transform={`translate(0 ${i * -34})`}
          >
            <path d="m300 250 200-104 200 104v24L500 378 300 274Z" fill="var(--canvas)" />
            <path d="m300 250 200 104 200-104M500 354v24" />
          </g>
        ))}
        <path
          className="careers-connector"
          d="M155 230v50l345 180 345-180v-50M500 15v50"
          strokeDasharray="3 7"
        />
        <path
          d="m112 207 43-22 43 22v22l-43 23-43-23Zm690 0 43-22 43 22v22l-43 23-43-23Z"
          fill="var(--canvas)"
        />
        <path d="m112 207 43 23 43-23m604 0 43 23 43-23" />
      </g>
      <image
        href="/media/brand/synapsai-symbol.svg"
        x="463"
        y="193"
        width="74"
        height="44"
        className="careers-mark"
      />
      <g className="careers-drawing-labels" fill="currentColor">
        <text x="70" y="170">
          {locale === 'fr' ? 'COMPRENDRE' : 'UNDERSTAND'}
        </text>
        <text x="813" y="170">
          {locale === 'fr' ? 'CONSTRUIRE' : 'BUILD'}
        </text>
        <text x="459" y="409">
          {locale === 'fr' ? 'ÊTRE UTILE' : 'MAKE IT USEFUL'}
        </text>
      </g>
    </svg>
  );
}

function FrenchCareers() {
  const conversation = 'mailto:contact@synapsai.co?subject=Carri%C3%A8res%20chez%20SynapsAi';
  return (
    <div className="careers-page">
      <CompanyNav locale="fr" path="/company/careers" />
      <section className="careers-hero container">
        <span className="eyebrow">
          <span className="accent-dash" /> CARRIÈRES CHEZ SYNAPSAI
        </span>
        <h1>
          Construire quelque chose
          <br />
          <span>qui compte pour quelqu’un.</span>
        </h1>
        <p>
          Une IA utile. Des logiciels pensés avec soin. Des produits façonnés par les personnes qui
          les utilisent. Découvrez le travail que nous construisons au Cameroun, pour l’Afrique et
          au-delà.
        </p>
        <a href="#opportunities" className="button button-dark">
          Parlons de la suite <ArrowDown size={16} />
        </a>
        <div className="careers-art">
          <span className="careers-figure-label">FIG. 01 — DE LA POSSIBILITÉ À L’USAGE</span>
          <CareersDrawing locale="fr" />
          <span className="careers-art-footer">PERSONNES + IDÉES + INGÉNIERIE</span>
        </div>
      </section>
      <section className="careers-mission container careers-section">
        <div>
          <span className="eyebrow">LE TRAVAIL À VENIR</span>
          <h2>
            La technologie commence
            <br />
            par un besoin humain.
          </h2>
        </div>
        <div>
          <p className="careers-lead">
            Un apprenant qui cherche à comprendre. Un enseignant qui prépare un cours. Une
            organisation qui veut mieux travailler.
          </p>
          <p>
            Ce sont les problèmes qui inspirent les produits et services de SynapsAi. Notre travail
            relie IA appliquée, design produit et ingénierie logicielle aux réalités du quotidien.
          </p>
          <Link className="text-link" href="/fr/company/about">
            Découvrir SynapsAi <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container careers-section" aria-labelledby="careers-work">
        <div className="careers-section-heading">
          <div>
            <span className="eyebrow">DES IDÉES ENTRE LES MAINS</span>
            <h2 id="careers-work">
              Des produits réels.
              <br />
              Des raisons concrètes de s’impliquer.
            </h2>
          </div>
          <Link href="/fr/work/imaginai" className="text-link">
            Explorer l’écosystème <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="careers-products">
          <Link href="/fr/products/imaginai" className="careers-product">
            <div className="careers-product-image">
              <Image
                src="/media/products/imaginai-mobile-scene.webp"
                alt="Application mobile d’apprentissage ImaginAi."
                width={1500}
                height={1125}
              />
            </div>
            <div className="careers-product-copy">
              <span className="eyebrow">POUR LES APPRENANTS</span>
              <h3>
                ImaginAi <ArrowUpRight size={20} />
              </h3>
              <p>Aider les apprenants à explorer, pratiquer et suivre leur progression.</p>
            </div>
          </Link>
          <div className="careers-product">
            <div className="careers-product-image careers-prof-image">
              <Image
                src="/media/products/imaginai-prof-devices.webp"
                alt="Ressources pédagogiques ImaginAi Prof sur ordinateur et téléphone."
                width={1107}
                height={654}
              />
            </div>
            <div className="careers-product-copy">
              <span className="eyebrow">POUR LES ENSEIGNANTS</span>
              <h3>ImaginAi Prof</h3>
              <p>Relier préparation des cours, activités de classe et suivi des apprenants.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container careers-section" aria-labelledby="careers-perspective">
        <span className="eyebrow">UNE DIRECTION PARTAGÉE</span>
        <h2 id="careers-perspective">Les questions qui comptent.</h2>
        <div className="careers-principles">
          {[
            [
              '01',
              'À qui cela sert-il ?',
              'Commencer par la personne, son contexte et le problème à résoudre.',
            ],
            [
              '02',
              'Est-ce utile dans le réel ?',
              'Aller au-delà de la démonstration : accès, fiabilité et détails du quotidien.',
            ],
            [
              '03',
              'Comment rendre cela plus clair ?',
              'Relier un design attentif à une ingénierie précise.',
            ],
          ].map(([number, title, body]) => (
            <article key={number}>
              <span className="careers-number">{number} /</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link href="/fr/company/about" className="text-link">
          Notre approche <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="container careers-section" aria-labelledby="careers-people">
        <div className="careers-section-heading">
          <div>
            <span className="eyebrow">LES PERSONNES DERRIÈRE SYNAPSAI</span>
            <h2 id="careers-people">Rencontrer les cofondateurs.</h2>
          </div>
          <Link href="/fr/company/team" className="text-link">
            Voir l’équipe <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="careers-people">
          {team.map((person) => (
            <article key={person.name}>
              <div className="careers-portrait">
                <Image src={person.portrait} alt={person.name} width={420} height={460} />
              </div>
              <h3>{person.name}</h3>
              <p>
                {person.role} <span>· {person.focus.fr}</span>
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="opportunities"
        className="container careers-section careers-opportunities"
        aria-labelledby="careers-contact"
      >
        <div>
          <span className="eyebrow">VOTRE PROCHAINE ÉTAPE</span>
          <h2 id="careers-contact">
            Le bon travail commence
            <br />
            par une conversation.
          </h2>
          <p>
            Les problèmes sur lesquels nous travaillons vous intéressent ? Écrivez-nous pour
            échanger sur les possibilités chez SynapsAi.
          </p>
        </div>
        <div className="careers-contact-card">
          <span className="eyebrow">ENTAMER UNE CONVERSATION</span>
          <h3>Parlez-nous de ce que vous aimeriez construire.</h3>
          <p>
            Présentez-vous, partagez votre domaine d’intérêt et ajoutez, si vous le souhaitez, un
            lien vers un projet dont vous êtes fier.
          </p>
          <a className="button button-dark" href={conversation}>
            Contacter l’équipe <ArrowUpRight size={17} />
          </a>
          <a className="careers-email" href={conversation}>
            contact@synapsai.co
          </a>
          <small>
            Votre application e-mail s’ouvrira. Aucune candidature n’est envoyée depuis ce site.
          </small>
        </div>
      </section>
    </div>
  );
}

export function Careers({ locale = 'en' }: { locale?: Locale }) {
  if (locale === 'fr') return <FrenchCareers />;
  return (
    <div className="careers-page">
      <CompanyNav locale="en" path="/company/careers" />
      <section className="careers-hero container">
        <span className="eyebrow">
          <span className="accent-dash" /> CAREERS AT SYNAPSAI
        </span>
        <h1>
          Build something
          <br />
          <span>that matters to someone.</span>
        </h1>
        <p>
          Useful AI. Thoughtful software. Products shaped by the people who use them. Explore the
          work we’re building in Cameroon, for Africa and beyond.
        </p>
        <a href="#opportunities" className="button button-dark">
          Let’s talk about your next chapter <ArrowDown size={16} />
        </a>
        <div className="careers-art">
          <span className="careers-figure-label">FIG. 01 — FROM POSSIBILITY TO PURPOSE</span>
          <CareersDrawing />
          <span className="careers-art-footer">PEOPLE + IDEAS + ENGINEERING</span>
        </div>
      </section>

      <section className="careers-mission container careers-section">
        <div>
          <span className="eyebrow">THE WORK AHEAD</span>
          <h2>
            Technology starts
            <br />
            with a human need.
          </h2>
        </div>
        <div>
          <p className="careers-lead">
            A student trying to understand. A teacher preparing a lesson. An organization finding a
            better way to work.
          </p>
          <p>
            These are the kinds of problems behind SynapsAi’s products and services. Our work
            connects applied AI, product design and software engineering to the realities of
            everyday use.
          </p>
          <Link className="text-link" href="/company/about">
            Get to know SynapsAi <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="container careers-section" aria-labelledby="careers-work">
        <div className="careers-section-heading">
          <div>
            <span className="eyebrow">IDEAS, IN PEOPLE’S HANDS</span>
            <h2 id="careers-work">
              Real products.
              <br />
              Real reasons to care.
            </h2>
          </div>
          <Link href="/work/imaginai" className="text-link">
            Explore the ecosystem <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="careers-products">
          <Link href="/products/imaginai" className="careers-product">
            <div className="careers-product-image">
              <Image
                src="/media/products/imaginai-mobile-scene.webp"
                alt="ImaginAi’s mobile learning application on a phone."
                width={1500}
                height={1125}
              />
            </div>
            <div className="careers-product-copy">
              <span className="eyebrow">FOR LEARNERS</span>
              <h3>
                ImaginAi <ArrowUpRight size={20} />
              </h3>
              <p>Helping learners explore concepts, practise and follow their progress.</p>
            </div>
          </Link>
          <Link href="/products/imaginai-prof" className="careers-product">
            <div className="careers-product-image careers-prof-image">
              <Image
                src="/media/products/imaginai-prof-devices.webp"
                alt="ImaginAi Prof teaching resources displayed on a laptop and phone."
                width={1107}
                height={654}
              />
            </div>
            <div className="careers-product-copy">
              <span className="eyebrow">FOR EDUCATORS</span>
              <h3>
                ImaginAi Prof <ArrowUpRight size={20} />
              </h3>
              <p>Connecting lesson preparation, classroom activities and learner follow-up.</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="container careers-section" aria-labelledby="careers-perspective">
        <span className="eyebrow">A SHARED DIRECTION</span>
        <h2 id="careers-perspective">The questions worth asking.</h2>
        <div className="careers-principles">
          {[
            [
              '01',
              'Who does this help?',
              'Start with the person, their context and the problem that needs solving.',
            ],
            [
              '02',
              'Does it work in the real world?',
              'Think beyond a demo. Consider access, reliability and the details of everyday use.',
            ],
            [
              '03',
              'How could it be clearer?',
              'Connect thoughtful design with careful engineering. Make the useful thing easier to use.',
            ],
          ].map(([number, title, body]) => (
            <article key={number}>
              <span className="careers-number">{number} /</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link href="/insights" className="text-link">
          Read our perspectives <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="container careers-section" aria-labelledby="careers-people">
        <div className="careers-section-heading">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND SYNAPSAI</span>
            <h2 id="careers-people">Meet the cofounders.</h2>
          </div>
          <Link href="/company/team" className="text-link">
            More about the team <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="careers-people">
          {team.map((person) => (
            <article key={person.name}>
              <div className="careers-portrait">
                <Image src={person.portrait} alt={person.name} width={420} height={460} />
              </div>
              <h3>{person.name}</h3>
              <p>
                {person.role} <span>· {person.focus.en}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="opportunities"
        className="container careers-section careers-opportunities"
        aria-labelledby="careers-contact"
      >
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2 id="careers-contact">
            Good work begins
            <br />
            with a conversation.
          </h2>
          <p>
            Interested in the problems we’re working on? Get in touch to ask about opportunities at
            SynapsAi.
          </p>
        </div>
        <div className="careers-contact-card">
          <span className="eyebrow">START A CONVERSATION</span>
          <h3>Tell us what you care about building.</h3>
          <p>
            Introduce yourself, share your area of interest and include a link to work you’re proud
            of, if you have one.
          </p>
          <a className="button button-dark" href={conversation}>
            Contact the team <ArrowUpRight size={17} />
          </a>
          <a className="careers-email" href={conversation}>
            contact@synapsai.co
          </a>
          <small>Opens your email app. No application is submitted through this website.</small>
        </div>
      </section>
    </div>
  );
}

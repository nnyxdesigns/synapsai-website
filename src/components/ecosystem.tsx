import Link from 'next/link';
import { ProductScreen } from './product-screen';
import { ArrowUpRight, ArrowDownUp, Monitor, Smartphone, GraduationCap } from 'lucide-react';
import { products, englishPageMeta, milestones } from '@/lib/ecosystem';
import { localPath, type Locale } from '@/lib/site';
import { Cta, ProductImage, TextLink } from './site-ui';
import { CompanyNav, Team } from './team';

function EnglishHero({ path, label }: { path: string; label: string }) {
  const meta = englishPageMeta[path];
  return (
    <section className="page-hero container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link
          href={
            path.startsWith('/products/')
              ? '/products'
              : path.startsWith('/work/')
                ? '/work'
                : '/company'
          }
        >
          {label}
        </Link>
      </nav>
      <span className="eyebrow">
        <span className="accent-dash" />
        {label}
      </span>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </section>
  );
}
export function ProfVisual() {
  return <ProductScreen kind="prof" className="prof-visual" />;
}
export function StakeholderMap() {
  return (
    <figure className="stakeholder-map">
      <div className="stakeholder-pair">
        <Link href="/products/imaginai">
          <Smartphone size={24} />
          <span>MOBILE / LEARNERS</span>
          <strong>ImaginAi</strong>
          <p>Understand. Practise. Progress.</p>
        </Link>
        <ArrowDownUp className="stakeholder-connector" size={28} aria-hidden="true" />
        <Link href="/products/imaginai-prof">
          <Monitor size={24} />
          <span>WEB / INSTRUCTORS</span>
          <strong>ImaginAi Prof</strong>
          <p>Organize. Guide. Follow up.</p>
        </Link>
      </div>
      <div className="stakeholder-institution">
        <GraduationCap size={25} />
        <div>
          <strong>Educational structures</strong>
          <p>A shared context for classroom operations, learning groups and follow-up.</p>
        </div>
      </div>
      <figcaption>
        Two products connected by an education purpose. Institutions are a stakeholder layer, not a
        third application.
      </figcaption>
    </figure>
  );
}
export function EcosystemFeature() {
  return (
    <section className="ecosystem-feature">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / BUILT BY SYNAPSAI</span>
            <h2>
              Two experiences.
              <br />
              One learning ecosystem.
            </h2>
          </div>
          <p>
            ImaginAi on mobile for learners. ImaginAi Prof on the web for instructors. Connected
            around the work of education.
          </p>
        </div>
        <div className="ecosystem-product-grid">
          {products.map((p, i) => (
            <article key={p.path}>
              {i === 0 ? <ProductImage locale="en" /> : <ProfVisual />}
              <div className="ecosystem-product-copy">
                <span className="eyebrow">
                  {p.channel} / {i === 0 ? 'LEARNERS' : 'INSTRUCTORS'}
                </span>
                <h3>{p.name}</h3>
                <p>{p.audience}.</p>
                <TextLink href={p.path}>Explore {p.name}</TextLink>
              </div>
            </article>
          ))}
        </div>
        <div className="ecosystem-feature-end">
          <p>
            Built and owned by SynapsAi. Designed to connect learner activity, instructor follow-up
            and classroom needs.
          </p>
          <TextLink href="/work/imaginai">Explore the ecosystem case study</TextLink>
        </div>
      </div>
    </section>
  );
}
function InstitutionSection() {
  return (
    <section className="container story-section">
      <span className="eyebrow">A THIRD PERSPECTIVE</span>
      <div>
        <h2>Education needs a connected environment.</h2>
        <p>
          Schools and learning organizations bring together people, resources and teaching routines.
          The ecosystem creates a foundation for connecting learner support with class and group
          workflows.
        </p>
        <p>
          Institution-level deployment and integration needs should be scoped with each
          organization. The two existing products provide the starting point for that conversation.
        </p>
        <TextLink href="/contact">Discuss your education context</TextLink>
      </div>
    </section>
  );
}
export function ProductsHub() {
  return (
    <>
      <EnglishHero path="/products" label="PRODUCTS" />
      <div className="container product-portfolio">
        {products.map((p, i) => (
          <section key={p.path} className="product-portfolio-row">
            <div>
              <span className="eyebrow">
                0{i + 1} / {p.channel}
              </span>
              <h2>{p.name}</h2>
              <span className="product-audience">{p.audience}</span>
              <p>{p.description}</p>
              <TextLink href={p.path}>Discover {p.name}</TextLink>
            </div>
            {i === 0 ? <ProductImage locale="en" /> : <ProfVisual />}
          </section>
        ))}
      </div>
      <section className="container ecosystem-relationship">
        <span className="eyebrow">HOW THE PLATFORMS RELATE</span>
        <h2>Separate experiences. Connected purpose.</h2>
        <StakeholderMap />
      </section>
      <InstitutionSection />
      <section className="container ecosystem-outbound">
        <div>
          <h2>Explore the product ecosystem.</h2>
          <p>
            For detailed capabilities and product access, continue to ImaginAi’s dedicated website.
          </p>
        </div>
        <a
          href="https://imaginai.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-dark"
        >
          Visit imaginai.io
          <ArrowUpRight size={17} />
        </a>
        <TextLink href="/work/imaginai">See how SynapsAi built it</TextLink>
      </section>
    </>
  );
}
export function CompanyOverview() {
  return (
    <>
      <EnglishHero path="/company" label="COMPANY" />
      <CompanyNav locale="en" path="/company" />
      <section className="container story-section">
        <span className="eyebrow">A COMPANY THAT BUILDS</span>
        <div>
          <h2>From the need to the product.</h2>
          <p>
            SynapsAi designs software, AI-powered workflows and digital products for organizations.
            Founded in Cameroon in 2024, our work connects product decisions with the engineering
            needed to make them useful.
          </p>
          <p>
            The ImaginAi ecosystem brings that work into education through distinct learner and
            instructor platforms. Our wider focus is the same: understand the task, shape the
            experience and build the system around it.
          </p>
          <div className="story-links">
            <TextLink href="/company/about">Our story and perspective</TextLink>
            <TextLink href="/company/impact">Our milestones</TextLink>
            <TextLink href="/solutions">What we build</TextLink>
          </div>
        </div>
      </section>
      <Team locale="en" />
      <Cta locale="en" />
    </>
  );
}
export function ProductDetail({ prof = false }: { prof?: boolean }) {
  const product = products[prof ? 1 : 0];
  const other = products[prof ? 0 : 1];
  return (
    <>
      <EnglishHero path={product.path} label="PRODUCTS" />
      <section className="container product-detail-hero">
        <div>
          <span className="product-audience">{product.audience}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <a
            className="button button-dark"
            href="https://imaginai.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore {product.name}
            <ArrowUpRight size={17} />
          </a>
        </div>
        {prof ? <ProfVisual /> : <ProductImage locale="en" />}
      </section>
      <section className="container story-section">
        <span className="eyebrow">THE CHALLENGE</span>
        <div>
          <h2>
            {prof ? 'Keep the learning group in view.' : 'Keep moving after the lesson ends.'}
          </h2>
          <p>
            {prof
              ? 'Teaching involves more than delivering a lesson: forming groups, organizing resources, assigning work and identifying who needs follow-up. ImaginAi Prof gives these instructor responsibilities a dedicated web experience.'
              : 'Secondary and higher-education study moves between understanding a concept, attempting an exercise and reviewing a correction. ImaginAi brings learning support into that mobile study session.'}
          </p>
          <p>
            {prof
              ? 'The objective is instructional visibility: help teachers organize their work and interpret learner activity while retaining their own professional judgment.'
              : 'Guided paths and AI-powered interactions sit alongside practice and progress. The aim is to make the next useful step easier to find, including when a learner studies beyond classroom time.'}
          </p>
        </div>
      </section>
      <section className="container product-journey">
        <span className="eyebrow">
          {prof ? 'THE INSTRUCTOR EXPERIENCE' : 'THE LEARNER EXPERIENCE'}
        </span>
        <h2>
          {prof ? 'Organize the work. Follow the learning.' : 'From a question to a next step.'}
        </h2>
        <ol>
          {product.steps.map((step, i) => (
            <li key={step}>
              <span>0{i + 1}</span>
              <h3>{step}</h3>
              <p>
                {
                  (prof
                    ? [
                        'Create the class or learning group that gives activities a shared context.',
                        'Bring resources and assignments into the teaching workflow.',
                        'Use follow-up and reporting to see the activity available in the platform.',
                        'Interpret the information and decide where guidance is needed.',
                      ]
                    : [
                        'Use learning resources and AI support to work through a question.',
                        'Attempt exercises and quizzes, with space to practise.',
                        'Use corrections to identify what needs another look.',
                        'Keep track of learning activity and decide what to revisit.',
                      ])[i]
                }
              </p>
            </li>
          ))}
        </ol>
      </section>
      <div className="container product-detail-capture">
        <ProductScreen kind={prof ? 'report' : 'scene'} />
      </div>
      <section className="container story-section">
        <span className="eyebrow">CONNECTED, DISTINCT</span>
        <div>
          <h2>
            {prof ? 'The learner has a different workspace.' : 'Connected to the teaching context.'}
          </h2>
          <p>
            {prof
              ? 'ImaginAi is the mobile application for learners. ImaginAi Prof is the instructor web platform. Each experience serves its own audience while participating in the same ecosystem.'
              : 'ImaginAi Prof gives teachers and instructors a separate web workspace for classes, tasks and follow-up. Learner study and instructional organization remain distinct experiences with a shared purpose.'}
          </p>
          <TextLink href={other.path}>Discover {other.name}</TextLink>
        </div>
      </section>
      {!prof && (
        <section className="container product-reach">
          <strong>143K+</strong>
          <div>
            <h2>Learners on ImaginAi.</h2>
            <p>
              The approved public reach baseline, reported by SynapsAi. Reach describes adoption,
              not a measured learning-outcome improvement.
            </p>
            <a href="https://synapsai.co/">Source: SynapsAi</a>
          </div>
        </section>
      )}
      <section className="container ecosystem-outbound">
        <div>
          <span className="eyebrow">BUILT BY SYNAPSAI</span>
          <h2>The product is one part of the story.</h2>
          <p>Explore the strategy and engineering behind the connected ecosystem.</p>
        </div>
        <TextLink href="/work/imaginai">Read the case study</TextLink>
        <a
          className="text-link"
          href="https://imaginai.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Product details at ImaginAi
          <ArrowUpRight size={17} />
        </a>
      </section>
    </>
  );
}
export function EcosystemCaseStudy() {
  return (
    <>
      <EnglishHero path="/work/imaginai" label="WORK / CASE STUDY" />
      <section className="container case-study-lead">
        <ProductImage locale="en" large />
        <div>
          <span className="eyebrow">SYNAPSAI-OWNED PRODUCT ECOSYSTEM</span>
          <h2>
            One education purpose.
            <br />
            More than one user journey.
          </h2>
          <p>
            ImaginAi combines a learner mobile product with ImaginAi Prof, a dedicated instructor
            web platform. The work is the design and delivery of connected experiences for different
            education roles.
          </p>
          <dl>
            <div>
              <dt>Scope</dt>
              <dd>Product strategy, UX, software and applied AI</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>Mobile and web</dd>
            </div>
            <div>
              <dt>Public proof</dt>
              <dd>143K+ learners · PROMEX 2025</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="container ecosystem-relationship">
        <span className="eyebrow">01 / THREE PROBLEM SPACES</span>
        <h2>Start with who needs to do what.</h2>
        <StakeholderMap />
        <div className="stakeholder-needs">
          {[
            [
              'Learners',
              'Access explanations, practise and keep track of study beyond the lesson.',
            ],
            [
              'Instructors',
              'Organize classes and tasks, follow activity and decide where guidance is needed.',
            ],
            [
              'Educational structures',
              'Connect classroom organization with learner support and clearer follow-up.',
            ],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container story-section">
        <span className="eyebrow">02 / PRODUCT STRATEGY</span>
        <div>
          <h2>Two platforms, because the work is different.</h2>
          <p>
            A learner’s study session and a teacher’s class-management workflow need different
            structures. A mobile learner experience makes room for explanations and practice; a web
            instructor experience makes room for groups, resources and follow-up.
          </p>
          <p>
            SynapsAi’s product boundary keeps those purposes clear while bringing them into one
            ecosystem. Educational organizations provide the wider setting in which both roles
            operate.
          </p>
          <div className="story-links">
            <TextLink href="/products/imaginai">The learner product</TextLink>
            <TextLink href="/products/imaginai-prof">The instructor product</TextLink>
          </div>
        </div>
      </section>
      <section className="container case-platform-section">
        <ProductScreen kind="report" />
        <div>
          <span className="eyebrow">03 / WORKFLOWS AND INTEROPERABILITY</span>
          <h2>Connect the roles without collapsing them.</h2>
          <p>
            The shared workflow centres on learning groups, instructional activities, learner
            participation and follow-up. The mobile and web interfaces expose the parts relevant to
            each audience.
          </p>
          <p>
            This is a product-level account of the relationship. An institution’s required access
            rules, integration points and reporting needs belong in a scoped deployment discussion.
          </p>
        </div>
      </section>
      <section className="container story-section">
        <span className="eyebrow">04 / UX AND ENGINEERING</span>
        <div>
          <h2>The interface, the context and the system boundary.</h2>
          <p>
            The delivered scope brings mobile software, a responsive web platform and AI-powered
            learning into one product family. SynapsAi’s public product story supports those
            boundaries; it does not disclose a private infrastructure stack.
          </p>
          <p>
            The resulting design questions are concrete: which role needs which information, how
            does an activity remain understandable across interfaces, and what happens when input or
            connectivity is incomplete? These are useful criteria for reviewing the ecosystem as it
            evolves.
          </p>
          <div className="case-boundaries">
            <span>Learner mobile experience</span>
            <span>Learning context and activity</span>
            <span>Instructor web workflow</span>
          </div>
          <p className="diagram-note">
            Conceptual product boundaries, not a deployment or data-storage diagram.
          </p>
        </div>
      </section>
      <section className="container story-section">
        <span className="eyebrow">05 / EXECUTION AND ITERATION</span>
        <div>
          <h2>From separate needs to a shipped product family.</h2>
          <p>
            The tangible result is a learner application and an instructor platform, supported by a
            dedicated product property at imaginai.io. The product scope includes learning paths,
            practice and progress on one side, and classes, resources, tasks and follow-up on the
            other.
          </p>
          <p>
            The team’s 2026 CITS Douala bootcamp participation adds a documented moment of user
            discovery to this story. It supports a claim of participation and field engagement, not
            a controlled measure of learning improvement.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/company/synapsai-co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Company account of the CITS bootcamp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <section className="container case-evidence">
        <div>
          <strong>143K+</strong>
          <span>Learners · approved public baseline</span>
        </div>
        <div>
          <strong>PROMEX 2025</strong>
          <span>Best Educational Digital Project</span>
        </div>
        <div>
          <strong>CONIA 2025</strong>
          <span>Participation and project presentation</span>
        </div>
      </section>
      <section className="container story-section">
        <span className="eyebrow">06 / WHAT THE WORK MAKES CLEAR</span>
        <div>
          <h2>A shared purpose needs distinct experiences.</h2>
          <p>
            The ecosystem demonstrates SynapsAi’s ability to bring product thinking, design,
            software and AI together across platforms. Its central design lesson is the importance
            of audience boundaries: learner support, instructor workflow and institutional context
            should remain legible.
          </p>
          <p>
            Further institutional requirements and product changes should be evaluated against
            actual needs. The next useful step is a clear context and a defined problem, rather than
            an assumed deployment or an unannounced feature roadmap.
          </p>
          <div className="story-links">
            <TextLink href="/company/impact">Explore the documented milestones</TextLink>
            <TextLink href="/insights/inside-imaginai-designing-around-how-students-study">
              Read the product perspective
            </TextLink>
          </div>
        </div>
      </section>
      <Cta locale="en" />
    </>
  );
}
export function ImpactPage({ locale = 'en' }: { locale?: Locale }) {
  if (locale === 'fr') {
    const milestoneCopy = [
      {
        kind: 'Entreprise',
        title: 'SynapsAi fondée au Cameroun',
        description:
          'Une entreprise qui relie les besoins concrets aux logiciels et à l’intelligence artificielle.',
        sourceLabel: 'Présentation de SynapsAi',
      },
      {
        kind: 'Participation',
        title: 'ImaginAi à la CONIA 2025',
        description:
          'Participation au Palais des Congrès de Yaoundé, lors de l’événement national consacré à l’IA organisé par le MINPOSTEL.',
        sourceLabel: 'Historique des distinctions d’ImaginAi',
      },
      {
        kind: 'Distinction',
        title: 'Meilleur projet numérique éducatif — PROMEX',
        description: 'ImaginAi distingué lors de la deuxième édition du salon PROMEX.',
        sourceLabel: 'Distinction documentée par SynapsAi',
      },
      {
        kind: 'Participation au programme',
        title: 'CITS Innovation Bootcamp — Douala',
        description:
          'Participation au bootcamp et aux activités de découverte des utilisateurs, documentée dans un compte rendu public d’un cofondateur.',
        sourceLabel: 'Compte rendu public du bootcamp',
      },
      {
        kind: 'Périmètre produit actuel',
        title: 'Deux plateformes, un écosystème éducatif',
        description:
          'ImaginAi accompagne les apprenants sur mobile. ImaginAi Prof accompagne les enseignants sur le web. Il s’agit d’un état du périmètre actuel, pas d’une annonce de lancement.',
        sourceLabel: 'Découvrir l’écosystème éducatif',
      },
    ];
    return (
      <>
        <section className="page-hero container">
          <div className="breadcrumbs">
            <Link href="/fr">Accueil</Link>
            <span>/</span>
            <span>Entreprise / Impact</span>
          </div>
          <span className="eyebrow">
            <span className="accent-dash" />
            ENTREPRISE / IMPACT
          </span>
          <h1>Construire, être utile, avancer.</h1>
          <p>
            Les jalons documentés de SynapsAi, de la portée du produit aux participations et
            distinctions liées à ImaginAi.
          </p>
        </section>
        <CompanyNav locale="fr" path="/company/impact" />
        <section className="container impact-intro">
          <div>
            <strong>143K+</strong>
            <span>Apprenants sur ImaginAi</span>
            <a href="https://synapsai.co/" target="_blank" rel="noopener noreferrer">
              Déclaré par SynapsAi
            </a>
          </div>
          <div>
            <h2>
              La portée est un début.
              <br />
              L’utilité est le travail.
            </h2>
            <p>
              Construire pour l’éducation signifie rendre l’accompagnement accessible aux apprenants
              et donner aux enseignants des outils adaptés à leurs usages. Nos jalons suivent la
              réalisation du produit, les participations et les distinctions.
            </p>
            <p>
              L’adoption et les récompenses décrivent une portée et une reconnaissance. Elles ne
              remplacent pas des résultats d’apprentissage mesurés.
            </p>
          </div>
        </section>
        <section className="container impact-history">
          <div className="section-heading">
            <div>
              <span className="eyebrow">JALONS DE L’ENTREPRISE</span>
              <h2>Un parcours de construction et de participation.</h2>
            </div>
          </div>
          <ol>
            {milestones.map((m, i) => (
              <li key={m.title}>
                <div className="milestone-date">
                  {m.date}
                  <span>{milestoneCopy[i].kind}</span>
                </div>
                <div>
                  <h3>{milestoneCopy[i].title}</h3>
                  <p>{milestoneCopy[i].description}</p>
                  <a href={m.source} target="_blank" rel="noopener noreferrer">
                    {milestoneCopy[i].sourceLabel}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="container ecosystem-outbound">
          <div>
            <h2>Voir le travail derrière ces jalons.</h2>
            <p>L’écosystème ImaginAi relie l’histoire produit et l’ingénierie de SynapsAi.</p>
          </div>
          <TextLink href={localPath('fr', '/work/imaginai')}>Explorer l’étude de cas</TextLink>
          <TextLink href={localPath('fr', '/contact')}>Parler de votre projet</TextLink>
        </section>
        <Cta locale="fr" />
      </>
    );
  }
  return (
    <>
      <EnglishHero path="/company/impact" label="COMPANY / IMPACT" />
      <CompanyNav locale="en" path="/company/impact" />
      <section className="container impact-intro">
        <div>
          <strong>143K+</strong>
          <span>Learners on ImaginAi</span>
          <a href="https://synapsai.co/">Reported by SynapsAi</a>
        </div>
        <div>
          <h2>
            Reach is a beginning.
            <br />
            Usefulness is the work.
          </h2>
          <p>
            Building for education means making support available to learners and giving instructors
            tools for their own workflows. Our milestones track product delivery, participation and
            recognition.
          </p>
          <p>
            Adoption and awards describe reach and recognition. They are not substitutes for
            measured learning outcomes.
          </p>
        </div>
      </section>
      <section className="container impact-history">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMPANY MILESTONES</span>
            <h2>A record of building and participation.</h2>
          </div>
        </div>
        <ol>
          {milestones.map((m) => (
            <li key={m.title}>
              <div className="milestone-date">
                {m.date}
                <span>{m.kind}</span>
              </div>
              <div>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
                <a href={m.source} target="_blank" rel="noopener noreferrer">
                  {m.sourceLabel}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="container ecosystem-outbound">
        <div>
          <h2>See the work behind the milestones.</h2>
          <p>The ImaginAi ecosystem connects the company’s product and engineering story.</p>
        </div>
        <TextLink href="/work/imaginai">Explore the case study</TextLink>
        <TextLink href="/insights">Read our Insights</TextLink>
      </section>
      <Cta locale="en" />
    </>
  );
}
export function DeliveryMethod({ institutional = false }: { institutional?: boolean }) {
  return (
    <section className="container delivery-method">
      <span className="eyebrow">FROM THE PROBLEM TO A WORKING SYSTEM</span>
      <h2>Make the decisions in the right order.</h2>
      <ol>
        {[
          ['Understand', 'Identify users, existing workflows and constraints.'],
          ['Shape', 'Define a useful scope, interface and review criteria.'],
          ['Build', 'Connect design, software and the required integrations.'],
          ['Evaluate', 'Check real tasks, failure paths and the next iteration.'],
        ].map(([title, desc], i) => (
          <li key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ol>
      {institutional && (
        <div className="institution-scenario">
          <h3>For an educational organization</h3>
          <p>
            A possible engagement could connect teaching routines, learning resources and follow-up
            around existing systems. Access, integrations and institutional reporting would be
            scoped to the organization. This is an application scenario, not a claim of a completed
            client deployment.
          </p>
          <TextLink href="/products">Explore the ImaginAi product ecosystem</TextLink>
        </div>
      )}
      <TextLink href="/work/imaginai">See our product work in practice</TextLink>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { workProjects, type WorkProject } from '@/lib/work';

function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <article className="work-card">
      <Link href={`/work/${project.slug}`} className="work-card-media" aria-label={`Open ${project.name} case study`}>
        <Image src={project.desktopImage} alt={project.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" />
        <span className="work-card-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="work-card-copy">
        <span className="eyebrow">{project.category}</span>
        <h2>{project.name}</h2>
        <p>{project.summary}</p>
        <Link href={`/work/${project.slug}`} className="text-link">Read the case study <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}

export function WorkPortfolioIndex() {
  return (
    <>
      <section className="work-intro container">
        <span className="eyebrow"><span className="accent-dash" />SELECTED WORK</span>
        <h1>Ideas made useful.</h1>
        <p>From first sketch to shipped product, we turn real operational and everyday needs into experiences people can use.</p>
      </section>
      <section className="work-grid container" aria-label="Selected SynapsAi work">
        <article className="work-card work-card-feature">
          <Link href="/work/imaginai" className="work-card-media" aria-label="Open ImaginAi case study">
            <Image src="/media/products/imaginai-mobile-hand.webp" alt="ImaginAi mobile learning application" fill sizes="(max-width: 767px) 100vw, 66vw" />
            <span className="work-card-arrow"><ArrowUpRight size={18} /></span>
          </Link>
          <div className="work-card-copy">
            <span className="eyebrow">EDTECH · AI · WEB · MOBILE</span>
            <h2>ImaginAi</h2>
            <p>A connected learning ecosystem bringing mobile study support and instructor workflows together.</p>
            <Link href="/work/imaginai" className="text-link">Read the case study <ArrowUpRight size={16} /></Link>
          </div>
        </article>
        {workProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </>
  );
}

export function WorkCaseStudy({ project }: { project: WorkProject }) {
  return (
    <>
      <section className="work-case-hero container">
        <div>
          <span className="eyebrow"><span className="accent-dash" />CASE STUDY / {project.name.toUpperCase()}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <a href={project.url} target="_blank" rel="noreferrer" className="button button-primary">Visit the live product <ArrowUpRight size={17} /></a>
        </div>
        <div className="work-case-hero-media"><Image src={project.desktopImage} alt={project.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 55vw" /></div>
      </section>
      <section className="work-story container">
        <div><span className="eyebrow">THE CHALLENGE</span><h2>{project.challenge}</h2></div>
        <div><span className="eyebrow">WHAT WE BUILT</span><p>{project.solution}</p><div className="work-capabilities">{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div></div>
      </section>
      <section className="work-gallery container">
        <div className="work-gallery-main"><Image src={project.desktopImage} alt={project.imageAlt} fill sizes="(max-width: 767px) 100vw, 70vw" /></div>
        <div className="work-gallery-mobile"><Image src={project.mobileImage} alt={`${project.name} mobile view`} fill sizes="(max-width: 767px) 100vw, 30vw" /></div>
      </section>
      <section className="work-end container"><span className="eyebrow">BUILT END TO END</span><h2>Have a real problem worth solving?</h2><Link href="/contact" className="text-link">Start a conversation <ArrowUpRight size={16} /></Link></section>
    </>
  );
}

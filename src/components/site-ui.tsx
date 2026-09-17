import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, MapPin, MoveUpRight } from 'lucide-react';
import { socialProfiles } from '@/lib/company';
import { SocialIcon } from './social-icon';
import { ProductScreen } from './product-screen';
import { copy, localPath, Locale, solutions, solutionSlugs } from '@/lib/site';
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`text-link ${light ? 'text-link-light' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Cta({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{t.ctaLabel}</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDesc}</p>
          <Link href={localPath(locale, '/contact')} className="button button-dark">
            {t.talk}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="cta-arrow" aria-hidden="true">
          <MoveUpRight strokeWidth={0.7} />
        </div>
      </div>
    </section>
  );
}
export function Footer({
  locale,
  showInsights = false,
}: {
  locale: Locale;
  showInsights?: boolean;
}) {
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className={`footer-main ${locale === 'en' ? 'footer-main-en' : ''}`}>
          <div className="footer-brand">
            <Link href={localPath(locale)} aria-label="SynapsAi">
              <Image src="/media/brand/synapsai-logo.svg" width={135} height={31} alt="SynapsAi" />
            </Link>
            <p>{t.footer}</p>
            <span>
              <MapPin size={13} />
              {locale === 'fr' ? 'Cameroun · Pour le monde' : 'Cameroon · For the world'}
            </span>
          </div>
          <div>
            <h3>{t.nav[0]}</h3>
            {solutions[locale].map((s, i) => (
              <Link key={s.title} href={localPath(locale, `/solutions/${solutionSlugs[i]}`)}>
                {s.title}
              </Link>
            ))}
          </div>
          {locale === 'en' && (
            <div>
              <h3>Products</h3>
              <Link href="/products">Our ecosystem</Link>
              <Link href="/products/imaginai">ImaginAi</Link>
              <Link href="/products/imaginai-prof">ImaginAi Prof</Link>
              <Link href="/work/imaginai">Ecosystem case study</Link>
            </div>
          )}
          <div>
            <h3>{t.nav[3]}</h3>
            <Link href={localPath(locale, '/company/about')}>{t.about}</Link>
            <Link href={localPath(locale, '/company/team')}>{t.team}</Link>
            <Link href={localPath(locale, '/company/careers')}>
              {locale === 'fr' ? 'Carrières' : 'Careers'}
            </Link>
            <Link href={localPath(locale, '/work')}>{t.nav[2]}</Link>
            <Link href={localPath(locale, '/company/impact')}>
              {locale === 'fr' ? 'Impact et jalons' : 'Impact & milestones'}
            </Link>
            <Link href={localPath(locale, '/contact')}>{t.contact}</Link>
          </div>
          <div>
            <h3>{t.resources}</h3>
            {showInsights && <Link href={localPath(locale, '/insights')}>Insights</Link>}
            <Link href={localPath(locale, '/faq')}>{t.faq}</Link>
            <a href="mailto:contact@synapsai.co" className="footer-email">
              contact@synapsai.co
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        {locale === 'en' && (
          <nav className="footer-socials" aria-label="Official SynapsAi social profiles">
            {socialProfiles.map((profile) => {
              return (
                <a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SynapsAi on ${profile.label} (opens in a new tab)`}
                >
                  <SocialIcon name={profile.label} />
                </a>
              );
            })}
          </nav>
        )}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SynapsAi.{' '}
            {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </span>
          <span>
            {locale === 'fr'
              ? 'Pensé avec soin. Construit avec du sens.'
              : 'Thoughtfully designed. Purposefully built.'}
          </span>
          <a href="#top" aria-label={locale === 'fr' ? 'Retour en haut' : 'Back to top'}>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export function ProductImage({ locale, large = false }: { locale: Locale; large?: boolean }) {
  if (locale === 'en') return <ProductScreen kind={large ? 'scene' : 'mobile'} />;
  return (
    <div className={`product-image ${large ? 'product-image-large' : ''}`}>
      <div className="product-image-head">
        <span className="imaginai-wordmark">
          imagin<span>Ai</span>
          <span className="product-dot">®</span>
        </span>
        <span className="product-tag">
          {locale === 'fr' ? 'ÉCOSYSTÈME ÉDUCATIF' : 'LEARNER MOBILE APPLICATION'}
        </span>
      </div>
      <div className="product-halo" />
      <Image
        src="/media/products/imaginai-mobile.png"
        width={1500}
        height={1125}
        alt={
          locale === 'fr'
            ? 'Écrans réels de l’application ImaginAi : progression et outils d’apprentissage.'
            : 'Real ImaginAi app screens showing learning progress and educational tools.'
        }
        sizes="(max-width: 760px) 92vw, 55vw"
      />
      <div className="product-image-bottom">
        <span>{locale === 'fr' ? 'L’apprentissage, connecté.' : 'Learning, connected.'}</span>
        <span>
          {locale === 'fr' ? 'WEB + MOBILE' : 'MOBILE'}
          <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}

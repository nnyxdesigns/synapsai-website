'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { copy, localPath, Locale, solutions, solutionSlugs } from '@/lib/site';
export function Header({
  locale,
  path,
  showInsights = false,
  englishOnly = false,
}: {
  locale: Locale;
  path: string;
  showInsights?: boolean;
  englishOnly?: boolean;
}) {
  const t = copy[locale];
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(e: PointerEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setDropdown(false);
    }
    function escape(e: KeyboardEvent) {
      if (e.key === 'Escape' && dropdown) {
        setDropdown(false);
        trigger.current?.focus();
      } else if (e.key === 'Escape' && mobile) {
        setMobile(false);
        mobileTrigger.current?.focus();
      }
    }
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', escape);
    };
  }, [dropdown, mobile]);
  const go = () => {
    setMobile(false);
    setDropdown(false);
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href={localPath(locale)}
          className="brand"
          aria-label={locale === 'fr' ? 'SynapsAi — Accueil' : 'SynapsAi — Home'}
          onClick={go}
        >
          <Image
            src="/media/brand/synapsai-logo.svg"
            alt="SynapsAi"
            width={135}
            height={31}
            priority
          />
        </Link>
        <nav
          id="main-navigation"
          aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}
          className={`main-nav ${mobile ? 'is-open' : ''}`}
        >
          <div
            className="nav-dropdown"
            ref={menuRef}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(false);
            }}
          >
            <button
              ref={trigger}
              className={`nav-trigger ${path.startsWith('/solutions') ? 'active' : ''}`}
              aria-expanded={dropdown}
              aria-controls="solutions-menu"
              onClick={() => setDropdown(!dropdown)}
            >
              {t.nav[0]}
              <ChevronDown size={12} />
            </button>
            {dropdown && (
              <div className="dropdown-panel" id="solutions-menu">
                <span className="eyebrow">
                  {locale === 'fr'
                    ? 'DE L’IDÉE À LA RÉALISATION'
                    : 'FROM POSSIBILITY TO PRODUCTION'}
                </span>
                <Link
                  href={localPath(locale, '/solutions')}
                  className="dropdown-overview"
                  onClick={go}
                >
                  {t.allSolutions}
                  <ArrowUpRight size={18} />
                </Link>
                {solutions[locale].map((s, i) => (
                  <Link
                    href={localPath(locale, `/solutions/${solutionSlugs[i]}`)}
                    key={s.title}
                    onClick={go}
                  >
                    <span>{s.title}</span>
                    <small>{s.short}</small>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {[
            { href: '/products', label: t.nav[1] },
            { href: '/work', label: t.nav[2] },
            ...(showInsights ? [{ href: '/insights', label: 'Insights' }] : []),
            { href: '/company', label: t.nav[3] },
          ].map(({ href: p, label }) => (
            <Link
              key={p}
              href={localPath(locale, p)}
              onClick={go}
              className={path.startsWith(p) ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
          <Link className="mobile-contact" href={localPath(locale, '/contact')} onClick={go}>
            {t.talk}
            <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="header-actions">
          {englishOnly ? (
            <span className="english-only-label" lang="en">
              EN
            </span>
          ) : (
            <div className="locale-switch" aria-label={locale === 'fr' ? 'Langue' : 'Language'}>
              <Link
                href={localPath('en', path)}
                hrefLang="en"
                lang="en"
                aria-label="English"
                aria-current={locale === 'en' ? 'true' : undefined}
                onClick={go}
              >
                EN
              </Link>
              <span>/</span>
              <Link
                href={localPath('fr', path)}
                hrefLang="fr"
                lang="fr"
                aria-label="Français"
                aria-current={locale === 'fr' ? 'true' : undefined}
                onClick={go}
              >
                FR
              </Link>
            </div>
          )}
          <Link className="button button-dark header-cta" href={localPath(locale, '/contact')}>
            {t.talk}
            <ArrowUpRight size={15} />
          </Link>
          <button
            ref={mobileTrigger}
            className="mobile-toggle"
            aria-controls="main-navigation"
            onClick={() => setMobile(!mobile)}
            aria-expanded={mobile}
            aria-label={
              mobile
                ? locale === 'fr'
                  ? 'Fermer le menu'
                  : 'Close menu'
                : locale === 'fr'
                  ? 'Ouvrir le menu'
                  : 'Open menu'
            }
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

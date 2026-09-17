import { Locale } from '@/lib/site';
export function SystemVisual({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  return (
    <div className="system-visual">
      <div className="visual-topline">
        <span>
          <i />
          {fr ? 'DES SYSTÈMES CONNECTÉS' : 'CONNECTED BY DESIGN'}
        </span>
        <span>SYS. 001</span>
      </div>
      <svg
        viewBox="0 0 640 440"
        role="img"
        aria-label={
          fr
            ? 'Les données et les processus convergent vers un système intelligent, puis vers des produits web et mobile.'
            : 'Data and workflows converge into an intelligent system that connects web and mobile products.'
        }
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(1 .42 -1 .42 320 22)"
          >
            <path d="M32 0H0V32" fill="none" stroke="#34343a" strokeWidth=".6" />
          </pattern>
          <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#25272d" />
            <stop offset="1" stopColor="#16181c" />
          </linearGradient>
          <linearGradient id="core" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#747987" />
            <stop offset=".5" stopColor="#414550" />
            <stop offset="1" stopColor="#292c34" />
          </linearGradient>
          <linearGradient id="side" x1="0" x2="1">
            <stop stopColor="#272a31" />
            <stop offset="1" stopColor="#101216" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="250%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="12"
              floodColor="#000000"
              floodOpacity=".17"
            />
          </filter>
          <filter id="soft">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <ellipse
          cx="332"
          cy="288"
          rx="133"
          ry="52"
          fill="#000000"
          opacity=".13"
          filter="url(#soft)"
        />
        <path d="M0 56H640V426H0Z" fill="url(#grid)" opacity=".5" />
        <g fill="none" stroke="#50545f" strokeWidth="1.3">
          <path d="M153 147 246 187 246 220 315 249" />
          <path d="M482 113 403 147 403 210 347 235" />
          <path d="M133 315 212 281 258 300 298 282" />
          <path d="M354 278 431 311 485 288" />
          <path d="M320 275V355l80 33" />
        </g>
        <g
          fill="none"
          stroke="#a1a6af"
          strokeWidth="2"
          strokeDasharray="5 85"
          className="flow-path"
        >
          <path d="M153 147 246 187 246 220 315 249" />
          <path d="M482 113 403 147 403 210 347 235" />
          <path d="M354 278 431 311 485 288" />
        </g>
        <g filter="url(#shadow)">
          <path d="m75 125 80-35 80 35v16l-80 36-80-36Z" fill="#0c0d10" />
          <path d="m75 125 80-35 80 35-80 36Z" fill="url(#tile)" stroke="#424650" />
          <g stroke="#b9bec8" fill="none" strokeWidth="1.4">
            <ellipse cx="155" cy="119" rx="18" ry="8" />
            <path d="M137 119v12c0 10 36 10 36 0v-12m-36 6c0 10 36 10 36 0" />
          </g>
        </g>
        <g filter="url(#shadow)">
          <path d="m414 95 70-31 70 31v14l-70 32-70-32Z" fill="#0c0d10" />
          <path d="m414 95 70-31 70 31-70 32Z" fill="url(#tile)" stroke="#424650" />
          <g stroke="#b9bec8" fill="none" strokeWidth="1.5">
            <path d="m467 89 12-5 13 6-12 5Zm13 14 12-5 13 6-12 5Zm-25-3 12-5 13 6-12 5Z" />
          </g>
        </g>
        <g filter="url(#shadow)">
          <path d="m59 302 73-32 73 32v14l-73 32-73-32Z" fill="#0c0d10" />
          <path d="m59 302 73-32 73 32-73 32Z" fill="url(#tile)" stroke="#424650" />
          <g stroke="#b9bec8" fill="none" strokeWidth="1.5">
            <path d="m112 299 22-10 22 10-22 10Zm0 6 22 10 22-10m-44 6 22 10 22-10" />
          </g>
        </g>
        <g filter="url(#shadow)">
          <path d="m423 263 70-31 70 31v15l-70 31-70-31Z" fill="#0c0d10" />
          <path d="m423 263 70-31 70 31-70 31Z" fill="url(#tile)" stroke="#424650" />
          <g stroke="#b9bec8" fill="none" strokeWidth="1.5">
            <path d="m474 259 27-12 16 8-27 12Zm0 0v9l16 8v-9m27-12v9l-27 12" />
          </g>
        </g>
        <g className="core-tile" filter="url(#shadow)">
          <path d="m225 222 95-43 95 43v34l-95 44-95-44Z" fill="url(#side)" />
          <path d="m225 222 95-43 95 43-95 43Z" fill="url(#core)" stroke="#777d8c" />
          <path d="m235 229 85 38 85-38" fill="none" stroke="#9198a8" opacity=".5" />
          <image
            href="/media/brand/synapsai-symbol.svg"
            x="280"
            y="195"
            width="80"
            height="58"
            transform="translate(0 110) scale(1 .5)"
          />
        </g>
        <g fill="#a1a6af" fontSize="10" fontFamily="monospace" letterSpacing="1">
          <text x="108" y="72">
            {fr ? 'DONNÉES' : 'YOUR DATA'}
          </text>
          <text x="447" y="49">
            {fr ? 'PROCESSUS' : 'WORKFLOWS'}
          </text>
          <text x="76" y="378">
            {fr ? 'VOS OUTILS' : 'YOUR TOOLS'}
          </text>
          <text x="463" y="330">
            {fr ? 'PRODUITS' : 'PRODUCTS'}
          </text>
        </g>
        <circle cx="400" cy="388" r="4" fill="#b9bec8" />
        <circle cx="400" cy="388" r="9" fill="none" stroke="#b9bec8" opacity=".3" />
      </svg>
      <div className="visual-bottomline">
        <span>{fr ? 'DES IDÉES AUX SYSTÈMES.' : 'FROM IDEAS TO SYSTEMS.'}</span>
        <span className="visual-key">
          <i />
          {fr ? 'L’intelligence en action' : 'Intelligence in action'}
        </span>
      </div>
    </div>
  );
}
export function OrbitVisual() {
  return (
    <div className="orbit-visual" aria-hidden="true">
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <div className="orbit-center">
        <svg viewBox="0 0 60 60">
          <image href="/media/brand/synapsai-symbol.svg" x="5" y="8" width="50" height="44" />
        </svg>
      </div>
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-dot dot-three" />
    </div>
  );
}

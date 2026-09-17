import Image from 'next/image';

const screens = {
  mobile: {
    file: 'imaginai-mobile-hand',
    width: 588,
    height: 791,
    label: 'ImaginAi',
    caption: 'The learner experience, on mobile.',
    alt: 'ImaginAi mobile home showing learning activity, document analysis and study tools.',
  },
  prof: {
    file: 'imaginai-prof-devices',
    width: 1107,
    height: 654,
    label: 'ImaginAi Prof',
    caption: 'Teaching resources, accessible across screen sizes.',
    alt: 'ImaginAi Prof teaching resources displayed on a laptop and phone; French interface branded ImaginAi Partner.',
  },
  scene: {
    file: 'imaginai-mobile-scene',
    width: 1500,
    height: 1125,
    label: 'ImaginAi / MOBILE',
    caption: 'Study tools and learning activity in one mobile experience.',
    alt: 'ImaginAi mobile application displayed on a phone against a dark textured background.',
  },
  report: {
    file: 'imaginai-prof-report',
    width: 1500,
    height: 1125,
    label: 'ImaginAi Prof / FOLLOW-UP',
    caption: 'A view of learner submissions and activity reporting. French interface.',
    alt: 'ImaginAi Prof class task showing learner submissions and an activity report in the supplied French interface.',
  },
};

export function ProductScreen({
  kind,
  className = '',
}: {
  kind: keyof typeof screens;
  className?: string;
}) {
  const screen = screens[kind];
  return (
    <figure className={`product-screen product-screen-${kind} ${className}`}>
      <div className="product-screen-label">{screen.label}</div>
      <div className="product-screen-media">
        <Image
          src={`/media/products/${screen.file}.webp`}
          width={screen.width}
          height={screen.height}
          alt={screen.alt}
          sizes="(max-width: 760px) 92vw, 60vw"
        />
      </div>
      <figcaption>{screen.caption}</figcaption>
    </figure>
  );
}

export function SocialIcon({ name }: { name: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'LinkedIn' ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" />
          <circle cx="7" cy="7" r=".7" fill="currentColor" />
        </>
      ) : name === 'Instagram' ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
        </>
      ) : (
        <>
          <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5a9 9 0 1 1 16.5-4.5Z" />
          <path d="M8 8c0 4 4 8 8 8l1-3-3-1-1 2-3-3 2-1-1-3Z" />
        </>
      )}
    </svg>
  );
}

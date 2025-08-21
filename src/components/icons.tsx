// src/components/icons.tsx
export function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3l6 2v6c0 5-3.2 8.5-6 9-2.8-.5-6-4-6-9V5l6-2z" 
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TruckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 7h11v7H3zM14 9h3l3 3v2h-6z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function LeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 14c7 0 12-6 16-10 0 9-5 16-12 16-2.5 0-4-1.5-4-3 0-1 .5-2 1-3z" 
        fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
export function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bubbles" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#bubbles)" opacity="0.15" />
      <path
        d="M8.5 10.5a3 3 0 1 1 5.8-.9m-7.8 5.3c1.2 1.5 3.1 2.6 5.5 2.6 3.9 0 7-2.5 7-6 0-1.7-.8-3.2-2.1-4.3"
        stroke="#0f172a"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7" r="2" fill="#0ea5e9" opacity={0.9} />
      <circle cx="9" cy="6" r="1.2" fill="#10b981" opacity={0.9} />
    </svg>
  );
}

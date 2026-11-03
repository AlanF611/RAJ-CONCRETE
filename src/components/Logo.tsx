import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="TOP Construction Inc. — Home">
      <span className="relative grid h-9 w-9 place-items-center border border-accent-500 bg-ink-950 transition-colors group-hover:bg-accent-500">
        <span className="font-display text-lg font-black text-white">T</span>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-accent-500 transition-colors group-hover:bg-ink-950" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-extrabold uppercase tracking-[0.08em] text-white">
          TOP Construction
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-charcoal-400">
          Inc.
        </span>
      </span>
    </Link>
  );
}

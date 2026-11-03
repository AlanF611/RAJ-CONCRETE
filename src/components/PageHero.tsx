import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

type Crumb = { label: string; path?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  alt: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, description, image, alt, crumbs = [] }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-20 md:min-h-[70vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-max relative z-10 pb-16 pt-32 md:pb-20">
        {crumbs.length > 0 && (
          <Reveal>
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-400">
              <Link to="/" className="transition-colors hover:text-accent-400">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-charcoal-600" />
                  {c.path ? (
                    <Link to={c.path} className="transition-colors hover:text-accent-400">{c.label}</Link>
                  ) : (
                    <span className="text-charcoal-200">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal delay={80}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={140}>
          <h1 className="heading-xl mt-5 max-w-4xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-300">{description}</p>
          </Reveal>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-accent-500 via-accent-700 to-transparent" />
    </section>
  );
}

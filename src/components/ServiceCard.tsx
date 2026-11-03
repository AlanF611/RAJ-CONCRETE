import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceCategory } from '@/data/services';
import Reveal from './Reveal';

export default function ServiceCard({ category, index = 0 }: { category: ServiceCategory; index?: number }) {
  const Icon = category.icon;
  return (
    <Reveal delay={index * 100}>
      <article className="group relative flex h-full flex-col overflow-hidden border border-charcoal-800 bg-charcoal-950 transition-all duration-500 hover:border-accent-500/50">
        {/* Image */}
        <div className="img-zoom relative aspect-[16/10] overflow-hidden">
          <img
            src={category.image}
            alt={category.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
          <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center border border-accent-500/40 bg-ink-950/80 backdrop-blur">
            <Icon className="h-5 w-5 text-accent-400" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <h3 className="heading-md">{category.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-400">{category.description}</p>

          {category.services.length > 0 && (
            <ul className="mt-6 space-y-2.5 border-t border-charcoal-800 pt-6">
              {category.services.map((s) => (
                <li key={s.name} className="flex items-center gap-3 text-sm text-charcoal-300">
                  <span className="h-1 w-1 shrink-0 bg-accent-500" />
                  {s.name}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent-400"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

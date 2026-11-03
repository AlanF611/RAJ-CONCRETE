import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

type CTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CTASection({
  eyebrow = 'Get Started',
  title = "Let's Build Something Together",
  description = "Have a concrete construction project in mind? Contact TOP Construction Inc. to discuss your requirements and request a project estimate.",
  primaryLabel = 'Request a Quote',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryTo = '/services',
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 section-pad">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden border border-charcoal-800 bg-gradient-to-br from-charcoal-900 to-ink-950 px-6 py-16 md:px-16 md:py-24">
            {/* Decorative orange slab */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="heading-lg mt-5">{title}</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-300">{description}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link to={primaryTo} className="btn-primary">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={secondaryTo} className="btn-outline">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

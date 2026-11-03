import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { site, nav } from '@/data/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = [
    { label: 'Structural Concrete', path: '/services#structural-concrete' },
    { label: 'Site Concrete', path: '/services#site-concrete' },
    { label: 'Decorative Concrete', path: '/services#decorative-concrete' },
    { label: 'Foundations & Footings', path: '/services#structural-concrete' },
    { label: 'Retaining Walls', path: '/services#structural-concrete' },
  ];

  return (
    <footer className="relative border-t border-charcoal-800 bg-ink-950">
      <div className="container-max">
        {/* Top grid */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal-400">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group grid h-10 w-10 place-items-center border border-charcoal-700 text-charcoal-300 transition-all hover:border-accent-500 hover:text-accent-400"
                  aria-label={s.label}
                >
                  <span className="text-xs font-semibold uppercase">{s.label.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-charcoal-300 transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-sm text-charcoal-300 transition-colors hover:text-accent-400"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-charcoal-300">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <a href={site.emailHref} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>{site.hours[0].day}: {site.hours[0].time}</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-outline mt-6">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal-800 py-8 sm:flex-row">
          <p className="text-xs text-charcoal-500">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-600">
            Structural & Site Concrete Contractor &middot; {site.serviceAreas}
          </p>
        </div>
      </div>
    </footer>
  );
}

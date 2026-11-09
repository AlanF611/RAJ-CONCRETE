import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { nav, site } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-charcoal-800 bg-ink-950/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-max">
        {/* Aumentamos la altura del navbar a h-24 (96px) para que el logo vertical respire */}
        <div className="flex h-24 items-center justify-between">
          
          {/* LOGO INTEGRADO */}
          <Link to="/" className="group flex items-center h-full py-2">
            <img 
              src="/img/logo.png" 
              alt={`${site.name} Logo`} 
              // h-16 (64px) en móvil y h-20 (80px) en escritorio. Como el navbar mide 96px, se ve perfecto.
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('nav-logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Respaldo en caso de que la imagen no cargue */}
            <div id="nav-logo-fallback" className="hidden flex-col">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white uppercase leading-none">
                {site.shortName.split(' ')[0]}
                <span className="text-accent-500">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-charcoal-400 uppercase mt-1">
                {site.shortName.split(' ').slice(1).join(' ') || 'Concrete'}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-charcoal-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-px bg-accent-500 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-300 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent-500" />
              {site.phone}
            </a>
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        // Ajustamos top-20 a top-24 para que empate con la nueva altura del navbar
        className={`fixed inset-x-0 top-24 z-40 origin-top overflow-hidden bg-ink-950/98 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="container-max flex flex-col py-6">
          {nav.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `border-b border-charcoal-800 py-4 font-display text-2xl font-bold transition-all duration-400 ${
                  isActive ? 'text-accent-400' : 'text-white'
                }`
              }
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(12px)',
                opacity: open ? 1 : 0,
              }}
            >
              <span className="mr-3 text-xs font-medium text-charcoal-500">0{i + 1}</span>
              {item.label}
            </NavLink>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a href={site.phoneHref} className="flex items-center gap-2 text-charcoal-300">
              <Phone className="h-4 w-4 text-accent-500" />
              {site.phone}
            </a>
            <Link to="/contact" className="btn-primary w-full">
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 top-24 z-30 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </header>
  );
}

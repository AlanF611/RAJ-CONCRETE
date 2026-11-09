import { Link } from 'react-router-dom';
import { site } from '@/data/site';
// Importa aquí los iconos que uses en tu footer (Facebook, Instagram, etc.)

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-ink-950">
      <div className="container-max grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* LOGO Y DESCRIPCIÓN INTEGRADOS DIRECTAMENTE AQUÍ */}
        <div className="lg:col-span-1">
          <Link to="/" className="group flex items-center gap-3">
            <img 
              src="/img/logo.png" 
              alt={`${site.name} Logo`} 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('footer-logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Texto de respaldo por si la imagen falla */}
            <div id="footer-logo-fallback" className="hidden flex-col">
              <span className="font-display text-xl font-extrabold tracking-tight text-white uppercase leading-none">
                {site.shortName.split(' ')[0]}
                <span className="text-accent-500">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-charcoal-400 uppercase mt-1">
                {site.shortName.split(' ').slice(1).join(' ') || 'Concrete'}
              </span>
            </div>
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-charcoal-400">
            {site.description}
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-6 space-y-3 text-sm text-charcoal-400">
            <li><Link to="/about" className="hover:text-accent-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent-400 transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-6 space-y-3 text-sm text-charcoal-400">
            <li>{site.address.line1}</li>
            <li>{site.address.city}, {site.address.state} {site.address.zip}</li>
            <li><a href={site.phoneHref} className="hover:text-accent-400 transition-colors">{site.phone}</a></li>
            <li><a href={site.emailHref} className="hover:text-accent-400 transition-colors">{site.email}</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Follow Us</h4>
          <div className="mt-6 flex gap-4">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm font-medium text-charcoal-400 hover:text-accent-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-charcoal-800 py-6">
        <div className="container-max flex flex-col items-center justify-between gap-4 text-xs text-charcoal-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed & Insured Concrete Contractor</p>
        </div>
      </div>
    </footer>
  );
}

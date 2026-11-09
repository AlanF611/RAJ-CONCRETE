import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, HardHat, Building2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { site } from '@/data/site';
import { homeFeaturedServices, whyChooseUs } from '@/data/services';
import { industries } from '@/data/industries';
import { projects } from '@/data/projects';

export default function Home() {
  // Rutas actualizadas según tu carpeta en GitHub
  const localProjectsImages = [
    '/img/01_Home/photo_07.jpeg', // Terreno (Proyecto 1)
    '/img/01_Home/photo_12.jpeg', // Varillas (Proyecto 2)
    '/img/01_Home/photo_24.jpeg', // Estructura metálica (Proyecto 3)
  ];

  return (
    <>
      {/* ===== HERO CON VIDEO DE FONDO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Video de fondo desde tu carpeta */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/img/01_Home/photo_37.jpeg" // Imagen de respaldo (losa)
            className="h-full w-full object-cover"
          >
            <source src="/img/01_Home/nuevo.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
          
          {/* Capas de superposición para que el texto sea legible */}
          <div className="absolute inset-0 bg-ink-950/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        </div>

        <div className="container-max relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <Reveal delay={100}>
              {/* Nombre de la empresa actualizado */}
              <span className="eyebrow">RAJ Concrete &middot; Concrete Contractor</span>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="heading-xl mt-6">
                Building Strength.
                <br />
                <span className="text-accent-400">Delivering Excellence.</span>
              </h1>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal-300">
                Trusted structural and site concrete solutions backed by over 20 years of hands-on experience.
              </p>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Request a Quote
                </Link>
              </div>
            </Reveal>

            {/* Stats integrados en el Hero */}
            <Reveal delay={550}>
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-charcoal-800/50 pt-8 sm:grid-cols-4">
                {[
                  { value: '20+', label: 'Years of Experience' },
                  { value: '3', label: 'Core Service Lines' },
                  { value: '8+', label: 'Industries Served' },
                  { value: '100%', label: 'Commitment to Safety' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-extrabold text-white md:text-4xl">{s.value}</div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading-lg mt-5">
              A concrete contractor built on workmanship and trust.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-charcoal-300">{site.description}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, text: 'Unwavering commitment to safety and quality.' },
                { icon: HardHat, text: 'Skilled crews and disciplined field execution.' },
                { icon: Award, text: 'Two decades of hands-on concrete experience.' },
                { icon: Building2, text: 'Trusted by developers, GCs, and owners.' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span className="text-sm text-charcoal-300">{item.text}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline mt-9">
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== EXPERIENCE HIGHLIGHT (PHOTO 37: Vaciado de losa) ===== */}
      <section className="relative overflow-hidden bg-ink-950 section-pad">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="img-zoom relative aspect-[4/5] overflow-hidden border border-charcoal-800">
                <img
                  src="/img/01_Home/photo_37.jpeg"
                  alt="Trabajadores vaciando concreto en una losa con varillas"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <span className="eyebrow">20+ Years of Experience</span>
                <h2 className="heading-lg mt-5">
                  Decades of discipline, precision, and performance.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-charcoal-300">
                  Throughout our career, we have had the privilege of working alongside some of the largest
                  construction companies in the United States, contributing our expertise to commercial,
                  residential, and industrial projects.
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal-300">
                  This experience has shaped our disciplined approach, attention to detail, and ability to
                  perform under demanding schedules and specifications.
                </p>
                <div className="mt-8 grid grid-cols-3 divide-x divide-charcoal-800 border-y border-charcoal-800">
                  {[
                    { v: '20+', l: 'Years' },
                    { v: '8+', l: 'Industries' },
                    { v: '3', l: 'Service Lines' },
                  ].map((s) => (
                    <div key={s.l} className="px-4 py-5 text-center">
                      <div className="font-display text-2xl font-extrabold text-accent-400">{s.v}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-charcoal-400">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="eyebrow">What We Do</span>
                <h2 className="heading-lg mt-5">Featured Services</h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/services" className="btn-outline">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeFeaturedServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="group h-full border border-charcoal-800 bg-ink-950 p-7 transition-all duration-500 hover:border-accent-500/50 hover:bg-charcoal-900">
                    <div className="grid h-12 w-12 place-items-center border border-charcoal-700 transition-colors group-hover:border-accent-500">
                      <Icon className="h-6 w-6 text-charcoal-200 transition-colors group-hover:text-accent-400" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-400">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="relative overflow-hidden bg-ink-950 section-pad">
        <div className="container-max">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Who We Serve</span>
              <h2 className="heading-lg mt-5">Industries We Work With</h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-300">
                We provide structural and site concrete services across a wide range of project types,
                supporting developers, general contractors, and property owners.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 8).map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.id} delay={i * 70}>
                  <Link
                    to="/industries"
                    className="group flex h-full flex-col border border-charcoal-800 bg-charcoal-950 p-6 transition-all duration-400 hover:border-accent-500/50 hover:bg-charcoal-900"
                  >
                    <Icon className="h-7 w-7 text-accent-400" />
                    <h3 className="mt-5 font-display text-base font-bold text-white">{ind.title}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-400 transition-colors group-hover:text-accent-400">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS (PHOTOS 07, 12, 24) ===== */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="eyebrow">Our Work</span>
                <h2 className="heading-lg mt-5">Featured Projects</h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/projects" className="btn-outline">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 110}>
                <Link to="/projects" className="group block">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-charcoal-800">
                    <img
                      src={localProjectsImages[i] || p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                    <span className="absolute left-4 top-4 bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-400">{p.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative overflow-hidden bg-ink-950 section-pad">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              {/* Nombre de la empresa actualizado */}
              <span className="eyebrow">Why RAJ Concrete</span>
              <h2 className="heading-lg mt-5">Built on results, not promises.</h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-300">
                Our reputation is built on dependable workmanship, disciplined execution, and relationships
                that last well beyond a single project.
              </p>
              <Link to="/about" className="btn-outline mt-8">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 100}>
                    <div className="group h-full border border-charcoal-800 bg-charcoal-950 p-7 transition-all duration-500 hover:border-accent-500/40">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl font-black text-charcoal-700 transition-colors group-hover:text-accent-500">
                          0{i + 1}
                        </span>
                        <Icon className="h-6 w-6 text-accent-400" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal-400">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection />
    </>
  );
}

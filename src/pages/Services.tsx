import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { serviceCategories } from '@/data/services';

export default function Services() {
  // Rutas exactas basadas en tus capturas de GitHub
  const serviceImages = [
    '/img/03_Structural_Concrete/photo_03.jpeg', // Imagen para Structural Concrete
    '/img/04_Site_Concrete/photo_01.jpeg',       // Imagen para Site Concrete
    '/img/05_Projects_Gallery/photo_07.jpeg',    // Imagen para Decorative/Projects
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Concrete Expertise.<br /><span className="text-accent-400">Built to Perform.</span></>}
        description="RAJ Concrete provides structural and site concrete services across a wide range of project types, supporting developers, general contractors, and property owners."
        // Imagen del Hero tomada de tu carpeta de Structural Concrete
        image="/img/03_Structural_Concrete/photo_14.jpeg"
        alt="Trabajadores vaciando concreto con una bomba"
        crumbs={[{ label: 'Services' }]}
      />

      {/* Intro */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Capabilities</span>
              <h2 className="heading-lg mt-5">Three disciplines. One standard of excellence.</h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-300">
                From structural foundations to site flatwork and decorative finishes, our crews deliver
                dependable concrete construction built to perform under the most demanding conditions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service categories */}
      {serviceCategories.map((cat, i) => {
        const Icon = cat.icon;
        const reversed = i % 2 === 1;
        
        // Si la categoría tiene una imagen local asignada, la usa. Si no, usa la original.
        const currentImage = serviceImages[i] || cat.image;

        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-24 section-pad ${i % 2 === 0 ? 'bg-ink-950' : 'bg-charcoal-950'}`}
          >
            <div className="container-max">
              <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
                {/* Image */}
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="img-zoom relative aspect-[5/4] overflow-hidden border border-charcoal-800">
                    <img
                      src={currentImage}
                      alt={cat.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center border border-accent-500/40 bg-ink-950/80 backdrop-blur">
                      <Icon className="h-6 w-6 text-accent-400" />
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal delay={140} className={reversed ? 'lg:order-1' : ''}>
                  <div>
                    <span className="eyebrow">0{i + 1} &middot; {cat.title}</span>
                    <h2 className="heading-lg mt-5">{cat.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-charcoal-300">{cat.description}</p>

                    {cat.services.length > 0 && (
                      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {cat.services.map((s) => (
                          <li
                            key={s.name}
                            className="flex items-center gap-3 border-l-2 border-accent-500/50 bg-charcoal-900/50 px-4 py-3 text-sm text-charcoal-200"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 bg-accent-500" />
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-9">
                      <Link to="/contact" className="btn-primary">
                        Request a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Quick overview cards */}
      <section className="section-pad bg-ink-950">
        <div className="container-max">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">At a Glance</span>
              <h2 className="heading-lg mt-5">All services, side by side.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <ServiceCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start Your Project"
        title="Ready to break ground?"
        description="Tell us about your scope and our team will help you plan, schedule, and execute it."
        primaryLabel="Request a Quote"
        secondaryLabel="View Industries"
        secondaryTo="/industries"
      />
    </>
  );
}

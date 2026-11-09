import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { industries } from '@/data/industries';

export default function Industries() {
  // Arreglo con fotos reales de tus proyectos para representar cada industria
  const industryImages = [
    '/img/05_Projects_Gallery/photo_18.jpeg', // Para la 1ra industria (Ej. Industrial)
    '/img/05_Projects_Gallery/photo_24.jpeg', // Para la 2da industria (Ej. Comercial)
    '/img/02_About_Us/photo_25.jpeg',         // Para la 3ra industria (Ej. Residencial)
    '/img/05_Projects_Gallery/photo_33.jpeg', // Para la 4ta industria (Ej. Institucional)
    '/img/03_Structural_Concrete/photo_27.jpeg', // Para la 5ta industria
    '/img/04_Site_Concrete/photo_13.jpeg',       // Para la 6ta industria
    '/img/05_Projects_Gallery/photo_42.jpeg',    // Para la 7ma industria
    '/img/03_Structural_Concrete/photo_43.jpeg', // Para la 8va industria
  ];

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Building <span className="text-accent-400">Across Industries.</span></>}
        description="RAJ Concrete provides structural and site concrete services across a wide range of project types, supporting developers, general contractors, and property owners."
        // Imagen del Hero tomada de tu carpeta de proyectos
        image="/img/05_Projects_Gallery/photo_46.jpeg"
        alt="Obra de RAJ Concrete"
        crumbs={[{ label: 'Industries' }]}
      />

      {/* Note */}
      <section className="border-b border-charcoal-800 bg-charcoal-950 py-10">
        <div className="container-max">
          <Reveal>
            <p className="text-sm leading-relaxed text-charcoal-400">
              The markets below represent areas RAJ Concrete is equipped to serve. Project scope,
              availability, and confirmed portfolio references are subject to confirmation on a
              per-project basis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((ind, i) => {
        const Icon = ind.icon;
        const reversed = i % 2 === 1;
        
        // Asigna la imagen local según el índice de la industria
        const currentImage = industryImages[i] || ind.image;

        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`scroll-mt-24 section-pad ${i % 2 === 0 ? 'bg-ink-950' : 'bg-charcoal-950'}`}
          >
            <div className="container-max">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="img-zoom relative aspect-[5/4] overflow-hidden border border-charcoal-800">
                    <img
                      src={currentImage}
                      alt={ind.alt || ind.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center border border-accent-500/40 bg-ink-950/80 backdrop-blur">
                      <Icon className="h-6 w-6 text-accent-400" />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={140} className={reversed ? 'lg:order-1' : ''}>
                  <div>
                    <span className="eyebrow">0{i + 1} &middot; Market</span>
                    <h2 className="heading-lg mt-5">{ind.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-charcoal-300">{ind.intro}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {ind.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 border-l-2 border-accent-500/50 bg-charcoal-900/50 px-4 py-3 text-sm text-charcoal-200"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 bg-accent-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        eyebrow="Your Industry, Our Expertise"
        title="Don't see your project type? Ask us."
        description="If your project involves structural or site concrete, we can likely help. Reach out to discuss your requirements."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryTo="/projects"
      />
    </>
  );
}

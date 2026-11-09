import { useMemo, useState } from 'react';
import { X, MapPin, Building2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { projects, projectCategories, type Project } from '@/data/projects';

export default function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  // Arreglo con las imágenes locales de tu galería de proyectos
  const galleryImages = [
    '/img/05_Projects_Gallery/photo_07.jpeg',
    '/img/05_Projects_Gallery/photo_12.jpeg',
    '/img/05_Projects_Gallery/photo_18.jpeg',
    '/img/05_Projects_Gallery/photo_24.jpeg',
    '/img/05_Projects_Gallery/photo_25.jpeg',
    '/img/05_Projects_Gallery/photo_33.jpeg',
    '/img/05_Projects_Gallery/photo_37.jpeg',
    '/img/05_Projects_Gallery/photo_42.jpeg',
    '/img/05_Projects_Gallery/photo_43.jpeg',
    '/img/05_Projects_Gallery/photo_46.jpeg',
    '/img/05_Projects_Gallery/photo_53.jpeg',
    '/img/05_Projects_Gallery/photo_58.jpeg',
  ];

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  // Función para obtener la imagen local basada en el ID o índice del proyecto
  const getProjectImage = (project: Project) => {
    // Busca el índice del proyecto en el arreglo original
    const originalIndex = projects.findIndex(p => p.id === project.id);
    // Si existe en el arreglo local, usa esa foto, sino usa la original
    return galleryImages[originalIndex] || project.image;
  };

  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title={<>Built to Last.<br /><span className="text-accent-400">Proven Through Every Project.</span></>}
        description="A selection of structural and site concrete projects representative of the work RAJ Concrete delivers."
        // Imagen del Hero tomada de tu galería
        image="/img/05_Projects_Gallery/photo_53.jpeg"
        alt="Vista aérea de una obra de RAJ Concrete"
        crumbs={[{ label: 'Projects' }]}
      />

      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    active === cat
                      ? 'bg-accent-500 text-white'
                      : 'border border-charcoal-700 text-charcoal-300 hover:border-accent-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const imageSrc = getProjectImage(p);
              
              return (
                <Reveal key={p.id} delay={i * 80}>
                  <button
                    onClick={() => setSelected(p)}
                    className="group block w-full text-left"
                    aria-label={`View details for ${p.title}`}
                  >
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-charcoal-800">
                      <img
                        src={imageSrc}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                      <span className="absolute left-4 top-4 bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                        {p.category}
                      </span>
                      <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center border border-white/20 bg-ink-950/70 backdrop-blur transition-all group-hover:border-accent-500 group-hover:bg-accent-500">
                        <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:rotate-[-45deg]" />
                      </span>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal-400">
                        <MapPin className="h-3.5 w-3.5" />
                        {p.location}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Your Project Next"
        title="Let's add your project to this list."
        description="From foundations to flatwork, our team is ready to deliver. Tell us about your scope."
        primaryLabel="Request a Quote"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm md:items-center md:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${selected.title}`}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-charcoal-700 bg-charcoal-950 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={getProjectImage(selected)} alt={selected.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/20 bg-ink-950/70 backdrop-blur transition-colors hover:bg-accent-500"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            {/* Body */}
            <div className="p-8 md:p-10">
              <span className="eyebrow">{selected.category}</span>
              <h3 className="heading-md mt-4">{selected.title}</h3>
              <div className="mt-5 flex flex-wrap gap-6 text-sm text-charcoal-300">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  {selected.location}
                </span>
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-accent-500" />
                  {selected.category}
                </span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-charcoal-300">{selected.description}</p>
              <p className="mt-6 text-xs leading-relaxed text-charcoal-500">
                Project details and imagery are representative of RAJ Concrete's work.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

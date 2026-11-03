import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { industries } from '@/data/industries';

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Building <span className="text-accent-400">Across Industries.</span></>}
        description="TOP Construction Inc. provides structural and site concrete services across a wide range of project types, supporting developers, general contractors, and property owners."
        image="https://images.pexels.com/photos/4534504/pexels-photo-4534504.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Contemporary office buildings in the city"
        crumbs={[{ label: 'Industries' }]}
      />

      {/* Note */}
      <section className="border-b border-charcoal-800 bg-charcoal-950 py-10">
        <div className="container-max">
          <Reveal>
            <p className="text-sm leading-relaxed text-charcoal-400">
              The markets below represent areas TOP Construction Inc. is equipped to serve. Project scope,
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
                      src={ind.image}
                      alt={ind.alt}
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

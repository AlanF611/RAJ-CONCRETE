import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Gem, ShieldCheck, Users, TrendingUp, Award, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { whyChooseUs } from '@/data/services';

const values = [
  { icon: TrendingUp, title: 'Continuous Improvement & Innovation' },
  { icon: Users, title: 'Strong Field Leadership & Experienced Crews' },
  { icon: ShieldCheck, title: 'Ethical Business Practices & Accountability' },
  { icon: Gem, title: 'Projects That Stand the Test of Time' },
];

export default function About() {
  return (
    <>
      {/* Hero con foto local de obra (photo_04) */}
      <PageHero
        eyebrow="About RAJ Concrete"
        title={<>Built on Experience.<br /><span className="text-accent-400">Driven by Excellence.</span></>}
        description="Over 20 years of hands-on experience specializing in structural and site concrete."
        image="/img/02_About_Us/photo_04.jpeg"
        alt="Trabajador de RAJ Concrete en una obra de cimentación"
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Introduction */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Our Company</span>
            <h2 className="heading-lg mt-5">A trusted name in concrete construction.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-charcoal-300">
              <p>
                RAJ Concrete is a trusted concrete contractor with over 20 years of hands-on
                experience specializing in structural concrete and site concrete.
              </p>
              <p>
                Our team has successfully delivered projects ranging from complex structural foundations to
                large-scale site concrete scopes, always meeting the highest standards of safety,
                quality, and performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden bg-ink-950 section-pad">
        <div className="container-max grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="relative h-full overflow-hidden border border-charcoal-800 bg-charcoal-950 p-8 md:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-accent-400" />
                  <span className="eyebrow">Our Mission</span>
                </div>
                <h3 className="heading-md mt-6">Deliver durable, high-quality concrete construction.</h3>
                <p className="mt-5 text-base leading-relaxed text-charcoal-300">
                  To deliver durable, high-quality concrete construction through skilled workmanship,
                  disciplined project execution, and a commitment to safety and integrity.
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal-300">
                  We strive to build long-term partnerships with general contractors, developers, and
                  owners by consistently meeting schedules, specifications, and expectations on every
                  project.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative h-full overflow-hidden border border-charcoal-800 bg-charcoal-950 p-8 md:p-12">
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-accent-400" />
                  <span className="eyebrow">Our Vision</span>
                </div>
                <h3 className="heading-md mt-6">A leading concrete contractor, recognized nationwide.</h3>
                <p className="mt-5 text-base leading-relaxed text-charcoal-300">
                  To become a leading concrete contractor recognized nationwide for excellence in
                  structural and site concrete.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Supporting Values */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">What We Stand For</span>
              <h2 className="heading-lg mt-5">Values that anchor every pour.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="group h-full border border-charcoal-800 bg-ink-950 p-7 transition-all duration-500 hover:border-accent-500/40">
                    <Icon className="h-8 w-8 text-accent-400" />
                    <h3 className="mt-6 font-display text-base font-bold text-white">{v.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={120}>
            <p className="mt-12 max-w-3xl text-lg leading-relaxed text-charcoal-300">
              By investing in our people and our processes, RAJ Concrete seeks to set the standard
              for reliable, professional concrete construction in the U.S.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Experience (photo_25: Vaciado de losa residencial) */}
      <section className="relative overflow-hidden bg-ink-950 section-pad">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-charcoal-800">
              <img
                src="/img/02_About_Us/photo_25.jpeg"
                alt="Equipo de RAJ Concrete vaciando concreto en una losa"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <span className="eyebrow">Our Experience</span>
              <h2 className="heading-lg mt-5">Working alongside the largest names in construction.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-300">
                <p>
                  Throughout our career, we have had the privilege of working alongside some of the largest
                  construction companies in the United States, contributing our expertise to commercial,
                  residential, and industrial projects.
                </p>
                <p>
                  This experience has shaped our disciplined approach, attention to detail, and ability to
                  perform under demanding schedules and specifications.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-charcoal-950">
        <div className="container-max">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="heading-lg mt-5">Reasons clients rely on RAJ Concrete.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="group h-full border border-charcoal-800 bg-ink-950 p-7 transition-all duration-500 hover:border-accent-500/40">
                    <span className="font-display text-3xl font-black text-charcoal-700 transition-colors group-hover:text-accent-500">
                      0{i + 1}
                    </span>
                    <Icon className="mt-4 h-7 w-7 text-accent-400" />
                    <h3 className="mt-5 font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-400">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        eyebrow="Partner With Us"
        title="Experience the RAJ Concrete difference."
        description="Let our team bring discipline, quality, and safety to your next concrete project."
        primaryLabel="Request a Quote"
        secondaryLabel="View Our Services"
      />
    </>
  );
}

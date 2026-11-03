import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

const projectTypes = [
  'Structural Concrete',
  'Site Concrete',
  'Decorative Concrete',
  'Multifamily',
  'Retail',
  'Commercial',
  'Mixed-Use',
  'Industrial',
  'Hospitality',
  'Public Works',
  'Residential',
  'Other',
];

const inputClass =
  'w-full border border-charcoal-700 bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-charcoal-500 outline-none transition-colors focus:border-accent-500';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let's Build <span className="text-accent-400">Something Together.</span></>}
        description="Have a concrete construction project in mind? Contact TOP Construction Inc. to discuss your requirements and request a project estimate."
        image="https://images.pexels.com/photos/8469999/pexels-photo-8469999.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Architect in safety gear holding blueprints"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad bg-charcoal-950">
        <div className="container-max grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="border border-charcoal-800 bg-ink-950 p-8 md:p-10">
              <h2 className="heading-md">Request a Quote</h2>
              <p className="mt-3 text-sm text-charcoal-400">
                Fill out the form below and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center justify-center gap-4 border border-accent-500/40 bg-accent-500/5 p-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent-400" />
                  <h3 className="font-display text-xl font-bold text-white">Request Received</h3>
                  <p className="max-w-sm text-sm text-charcoal-300">
                    Thank you for reaching out to TOP Construction Inc. A member of our team will contact
                    you shortly to discuss your project.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', company: '', email: '', phone: '', projectType: '', location: '', details: '' });
                    }}
                    className="btn-outline mt-2"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Full Name <span className="text-accent-500">*</span>
                      </label>
                      <input id="name" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Company Name
                      </label>
                      <input id="company" name="company" value={form.company} onChange={handleChange} className={inputClass} placeholder="Company or organization" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Email Address <span className="text-accent-500">*</span>
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="(000) 000-0000" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="projectType" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Project Type <span className="text-accent-500">*</span>
                      </label>
                      <select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange} className={inputClass}>
                        <option value="" disabled>Select a type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                        Project Location
                      </label>
                      <input id="location" name="location" value={form.location} onChange={handleChange} className={inputClass} placeholder="City, State" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="details" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-300">
                      Project Details <span className="text-accent-500">*</span>
                    </label>
                    <textarea id="details" name="details" required rows={5} value={form.details} onChange={handleChange} className={inputClass} placeholder="Tell us about your project scope, timeline, and requirements." />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Submit Request
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-charcoal-500">
                    By submitting, you agree to be contacted by TOP Construction Inc. regarding your project inquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={140} className="lg:col-span-5">
            <div className="space-y-6">
              {/* Contact details */}
              <div className="border border-charcoal-800 bg-ink-950 p-8">
                <h3 className="font-display text-lg font-bold text-white">Business Contact</h3>
                <ul className="mt-6 space-y-5 text-sm text-charcoal-300">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-charcoal-500">Phone</div>
                      <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-charcoal-500">Email</div>
                      <a href={site.emailHref} className="hover:text-white">{site.email}</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-charcoal-500">Office Address</div>
                      <p>{site.address.line1}, {site.address.line2}</p>
                      <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-charcoal-500">Service Areas</div>
                      <p>{site.serviceAreas}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="border border-charcoal-800 bg-ink-950 p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent-500" />
                  <h3 className="font-display text-lg font-bold text-white">Business Hours</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-charcoal-800 pb-3 text-charcoal-300">
                      <span>{h.day}</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-charcoal-800 bg-ink-950">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage:
                    'linear-gradient(rgba(74,74,82,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(74,74,82,0.4) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                  <MapPin className="h-10 w-10 text-accent-500" />
                  <p className="text-sm font-medium text-charcoal-300">Map Placeholder</p>
                  <p className="max-w-xs text-xs text-charcoal-500">
                    Configure with your business location to display an interactive map here.
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-wrap gap-3">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="border border-charcoal-700 px-5 py-2.5 text-sm font-semibold text-charcoal-300 transition-colors hover:border-accent-500 hover:text-accent-400"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

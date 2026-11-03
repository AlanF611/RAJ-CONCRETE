// Central site configuration. Edit these placeholders to reflect real business details.

export const site = {
  name: 'TOP Construction Inc.',
  shortName: 'TOP Construction',
  tagline: 'Building Strength. Delivering Excellence.',
  description:
    'TOP Construction Inc. is a trusted concrete contractor specializing in structural and site concrete. We deliver dependable construction solutions through skilled workmanship, disciplined project execution, and an unwavering commitment to quality and safety.',
  yearsExperience: '20+',
  // Contact placeholders — replace with real business details.
  phone: '(000) 000-0000',
  phoneHref: 'tel:+10000000000',
  email: 'info@topconstructioninc.com',
  emailHref: 'mailto:info@topconstructioninc.com',
  address: {
    line1: '1234 Construction Way',
    line2: 'Suite 100',
    city: 'Your City',
    state: 'ST',
    zip: '00000',
  },
  serviceAreas: 'United States',
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
  ],
  mapEmbedUrl: '',
};

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

// SEO metadata per route
export const seo: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'TOP Construction Inc. — Structural & Site Concrete Contractor',
    description:
      'Trusted structural and site concrete solutions backed by over 20 years of hands-on experience. Explore our services and request a quote.',
  },
  '/about': {
    title: 'About Us | TOP Construction Inc.',
    description:
      'Built on experience. Driven by excellence. Learn about TOP Construction Inc., our mission, vision, and 20+ years of concrete construction expertise.',
  },
  '/services': {
    title: 'Services | TOP Construction Inc.',
    description:
      'Structural concrete, site concrete, and decorative concrete services from TOP Construction Inc. Foundations, slabs, walls, sidewalks, curbs and more.',
  },
  '/industries': {
    title: 'Industries We Serve | TOP Construction Inc.',
    description:
      'TOP Construction Inc. provides concrete construction services across multifamily, retail, commercial, mixed-use, industrial, hospitality, public works, and residential markets.',
  },
  '/projects': {
    title: 'Projects | TOP Construction Inc.',
    description:
      'Explore our project portfolio. Structural and site concrete projects built to last, proven through every pour.',
  },
  '/contact': {
    title: 'Contact | TOP Construction Inc.',
    description:
      "Let's build something together. Contact TOP Construction Inc. to discuss your concrete construction project and request an estimate.",
  },
};

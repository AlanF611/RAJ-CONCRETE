// Central site configuration para RAJ Concrete.

export const site = {
  name: 'RAJ Concrete',
  shortName: 'RAJ Concrete',
  tagline: 'Building Strength. Delivering Excellence.',
  description:
    'RAJ Concrete is a trusted concrete contractor specializing in structural and site concrete. We deliver dependable construction solutions through skilled workmanship, disciplined project execution, and an unwavering commitment to quality and safety.',
  yearsExperience: '20+',
  
  // Datos de contacto reales
  phone: '323-970-8317',
  phoneHref: 'tel:3239708317',
  email: 'info@rajconcrete.com', // Cambia esto si tienes un correo corporativo
  emailHref: 'mailto:info@rajconcrete.com',
  
  address: {
    line1: '411 E Huntington Dr Ste107 #1008',
    line2: '', // Dejé la línea 2 vacía porque el Ste y #1008 ya están en la línea 1
    city: 'Arcadia',
    state: 'CA',
    zip: '91006',
  },
  
  serviceAreas: 'Southern California', // Ajusta esto según tu cobertura real (ej. Los Angeles, Arcadia, etc.)
  
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    // Quité la 'X' para que se vea más limpio, pero puedes volver a ponerla si la usas
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
    title: 'RAJ Concrete — Structural & Site Concrete Contractor',
    description:
      'Trusted structural and site concrete solutions backed by over 20 years of hands-on experience. Explore our services and request a quote.',
  },
  '/about': {
    title: 'About Us | RAJ Concrete',
    description:
      'Built on experience. Driven by excellence. Learn about RAJ Concrete, our mission, vision, and 20+ years of concrete construction expertise.',
  },
  '/services': {
    title: 'Services | RAJ Concrete',
    description:
      'Structural concrete, site concrete, and decorative concrete services from RAJ Concrete. Foundations, slabs, walls, sidewalks, curbs and more.',
  },
  '/industries': {
    title: 'Industries We Serve | RAJ Concrete',
    description:
      'RAJ Concrete provides concrete construction services across multifamily, retail, commercial, mixed-use, industrial, hospitality, public works, and residential markets.',
  },
  '/projects': {
    title: 'Projects | RAJ Concrete',
    description:
      'Explore our project portfolio. Structural and site concrete projects built to last, proven through every pour.',
  },
  '/contact': {
    title: 'Contact | RAJ Concrete',
    description:
      "Let's build something together. Contact RAJ Concrete to discuss your concrete construction project and request an estimate.",
  },
};

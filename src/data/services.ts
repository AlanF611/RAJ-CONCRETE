import {
  Layers, Building2, Compass, HardHat, Construction, Hammer, Ruler, PaintBucket,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  name: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  services: Service[];
  image: string;
  alt: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'structural-concrete',
    title: 'Structural Concrete',
    icon: Layers,
    description:
      'Reliable structural concrete solutions for demanding construction projects, from foundations to elevated structures.',
    image:
      'https://images.pexels.com/photos/36833957/pexels-photo-36833957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Construction site with concrete forms and metal reinforcements',
    services: [
      { name: 'Concrete Foundations & Footings' },
      { name: 'Grade Beams & Pile Caps' },
      { name: 'Elevated Slabs & Podium Slabs' },
      { name: 'Concrete Walls & Shear Walls' },
      { name: 'Retaining Walls' },
      { name: 'Rebar Fabrication & Installation' },
      { name: 'Structural Formwork & Concrete Placement' },
    ],
  },
  {
    id: 'site-concrete',
    title: 'Site Concrete',
    icon: Construction,
    description:
      'High-quality site concrete work designed to support the functionality, accessibility and durability of commercial and residential developments.',
    image:
      'https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Construction workers leveling freshly poured concrete',
    services: [
      { name: 'Slabs on Grade' },
      { name: 'Sidewalks & Walkways' },
      { name: 'Curbs & Gutters' },
      { name: 'Drive Approaches' },
      { name: 'Parking Lots & Paving' },
      { name: 'ADA-Compliant Ramps & Flatwork' },
      { name: 'Concrete Pads & Equipment Pads' },
    ],
  },
  {
    id: 'decorative-concrete',
    title: 'Decorative Concrete',
    icon: PaintBucket,
    description:
      'Decorative concrete solutions designed to enhance the appearance and functionality of concrete surfaces.',
    image:
      'https://images.pexels.com/photos/31672890/pexels-photo-31672890.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Workers smoothing concrete with finishing tools',
    services: [],
  },
];

export const whyChooseUs = [
  { icon: HardHat, title: 'Proven Experience', description: 'Proven experience in structural and site concrete across demanding project types.' },
  { icon: Ruler, title: 'Technical Knowledge', description: 'Deep knowledge of codes, plans, and field execution on every scope we take on.' },
  { icon: Compass, title: 'Reliable Scheduling', description: 'Reliable scheduling and professional project management from start to finish.' },
  { icon: Building2, title: 'Built on Trust', description: 'Long-term relationships built on trust and consistent results.' },
];

export const homeFeaturedServices = [
  { icon: Layers, title: 'Structural Concrete', description: 'Foundations, walls, slabs and elevated structures engineered to perform.' },
  { icon: Construction, title: 'Site Concrete', description: 'Flatwork, paving, curbs and ADA-compliant concrete built to last.' },
  { icon: Hammer, title: 'Rebar & Formwork', description: 'Precision rebar fabrication, installation and structural formwork.' },
  { icon: Building2, title: 'Retaining Walls', description: 'Engineered retaining walls and shear walls for demanding sites.' },
];

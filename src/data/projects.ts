// Placeholder projects — easy to edit, add, or replace. Do not represent completed real-world projects.

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  alt: string;
};

export const projectCategories = [
  'All',
  'Structural Concrete',
  'Site Concrete',
  'Commercial',
  'Multifamily',
  'Industrial',
] as const;

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Commercial Foundation — Office Tower',
    category: 'Structural Concrete',
    location: 'Location Placeholder, ST',
    description:
      'A structural concrete foundation and grade beam system supporting a multi-story commercial office development, delivered on a demanding schedule.',
    image:
      'https://images.pexels.com/photos/36833957/pexels-photo-36833957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Construction site with concrete forms and rebar',
  },
  {
    id: 'p2',
    title: 'Podium Slab — Multifamily Development',
    category: 'Multifamily',
    location: 'Location Placeholder, ST',
    description:
      'An elevated podium slab supporting a wrap-style multifamily residential development above a concrete parking deck.',
    image:
      'https://images.pexels.com/photos/40651442/pexels-photo-40651442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'High-rise residential buildings',
  },
  {
    id: 'p3',
    title: 'Site Concrete — Retail Center',
    category: 'Site Concrete',
    location: 'Location Placeholder, ST',
    description:
      'Curbs, gutters, sidewalks, drive approaches and ADA-compliant ramps for a new retail shopping center.',
    image:
      'https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Workers leveling freshly poured concrete',
  },
  {
    id: 'p4',
    title: 'Warehouse Slab on Grade',
    category: 'Industrial',
    location: 'Location Placeholder, ST',
    description:
      'A large-scale slab on grade for a distribution center, designed for heavy loads and high traffic durability.',
    image:
      'https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern warehouse exterior',
  },
  {
    id: 'p5',
    title: 'Elevated Slab — Mixed-Use Podium',
    category: 'Structural Concrete',
    location: 'Location Placeholder, ST',
    description:
      'An elevated concrete podium slab separating retail space below from residential units above in an urban infill project.',
    image:
      'https://images.pexels.com/photos/40242680/pexels-photo-40242680.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Mixed-use urban development',
  },
  {
    id: 'p6',
    title: 'Parking Structure Concrete',
    category: 'Commercial',
    location: 'Location Placeholder, ST',
    description:
      'Cast-in-place concrete columns, beams and slabs for a multi-level parking structure serving a commercial campus.',
    image:
      'https://images.pexels.com/photos/30256877/pexels-photo-30256877.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern parking structure',
  },
  {
    id: 'p7',
    title: 'Sidewalks & ADA Ramps — Streetscape',
    category: 'Site Concrete',
    location: 'Location Placeholder, ST',
    description:
      'Public works streetscape improvements including sidewalks, curb ramps and ADA-compliant flatwork.',
    image:
      'https://images.pexels.com/photos/8358883/pexels-photo-8358883.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Urban street with sidewalk and crosswalk',
  },
  {
    id: 'p8',
    title: 'Retaining Walls — Hillside Residence',
    category: 'Structural Concrete',
    location: 'Location Placeholder, ST',
    description:
      'Engineered concrete retaining walls for a hillside custom home foundation, providing long-term slope stability.',
    image:
      'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary luxury home with driveway',
  },
];

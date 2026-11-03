import {
  Building2, Store, Briefcase, Layers, Warehouse, Hotel, Route, Home,
  type LucideIcon,
} from 'lucide-react';

export type Industry = {
  id: string;
  title: string;
  icon: LucideIcon;
  intro: string;
  items: string[];
  image: string;
  alt: string;
};

export const industries: Industry[] = [
  {
    id: 'multifamily',
    title: 'Multifamily',
    icon: Building2,
    intro: 'Concrete solutions for multifamily developments of every scale.',
    items: [
      'Apartment Complexes',
      'Condominiums',
      'Townhomes',
      'Podium and Wrap-Style Developments',
      'Parking Structures and Garages',
    ],
    image:
      'https://images.pexels.com/photos/40651442/pexels-photo-40651442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'High-rise residential buildings',
  },
  {
    id: 'retail',
    title: 'Retail',
    icon: Store,
    intro: 'Durable concrete work for retail centers and tenant improvements.',
    items: [
      'Shopping Centers',
      'Strip Malls',
      'Stand-Alone Retail Buildings',
      'Restaurants and Food Service Facilities',
      'Tenant Improvements',
    ],
    image:
      'https://images.pexels.com/photos/16547727/pexels-photo-16547727.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern shopping center exterior',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: Briefcase,
    intro: 'Structural and site concrete for commercial and institutional projects.',
    items: [
      'Office Buildings',
      'Medical Offices and Clinics',
      'Corporate Campuses',
      'Institutional Facilities',
    ],
    image:
      'https://images.pexels.com/photos/4534504/pexels-photo-4534504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary office buildings',
  },
  {
    id: 'mixed-use',
    title: 'Mixed-Use',
    icon: Layers,
    intro: 'Integrated concrete scopes for complex mixed-use developments.',
    items: [
      'Residential / Retail Podium Developments',
      'Urban Infill Projects',
      'Transit-Oriented Developments',
    ],
    image:
      'https://images.pexels.com/photos/40242680/pexels-photo-40242680.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Mixed-use urban development',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    icon: Warehouse,
    intro: 'Heavy-duty concrete for industrial and logistics facilities.',
    items: [
      'Warehouses and Distribution Centers',
      'Light Manufacturing Facilities',
      'Logistics and Flex-Space Buildings',
    ],
    image:
      'https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Large modern warehouse exterior',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: Hotel,
    intro: 'Concrete foundations and structures for hospitality venues.',
    items: [
      'Hotels and Motels',
      'Resorts',
      'Event Venues',
    ],
    image:
      'https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern resort with swimming pool',
  },
  {
    id: 'public-works',
    title: 'Public Works & Infrastructure',
    icon: Route,
    intro: 'Site concrete and ADA improvements for public infrastructure.',
    items: [
      'City Sidewalks and Streetscapes',
      'Curb, Gutter, and ADA Improvements',
      'Public Facilities and Improvements',
    ],
    image:
      'https://images.pexels.com/photos/8358883/pexels-photo-8358883.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Urban street with sidewalk and crosswalk',
  },
  {
    id: 'residential',
    title: 'Residential',
    icon: Home,
    intro: 'Custom residential foundations and specialty concrete work.',
    items: [
      'Custom Homes',
      'High-End Residential Foundations',
      'Hillside and Specialty Foundations',
    ],
    image:
      'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary luxury home with driveway',
  },
];

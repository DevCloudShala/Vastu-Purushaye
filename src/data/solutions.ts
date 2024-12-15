import { Home, Building2, MapPin, Bolt, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  features: string[];
  price: string;
  duration: string;
}

export const solutions: Solution[] = [
  {
    id: 'home-consultation',
    title: 'Home Consultation',
    description: 'Comprehensive Vastu analysis and solutions for your residential space',
    icon: Home,
    benefits: [
      'Enhance positive energy flow',
      'Improve family harmony',
      'Boost prosperity and wealth',
      'Better sleep and health'
    ],
    features: [
      'Complete home analysis',
      'Room-by-room recommendations',
      'Detailed report with diagrams',
      'Two follow-up consultations',
      'Remedial solutions'
    ],
    price: '$299',
    duration: '2-3 hours'
  },
  {
    id: 'office-planning',
    title: 'Office Planning',
    description: 'Optimize your workplace for success and employee well-being',
    icon: Building2,
    benefits: [
      'Increase productivity',
      'Improve team collaboration',
      'Attract business opportunities',
      'Enhanced work environment'
    ],
    features: [
      'Workspace layout optimization',
      'Seating arrangement plans',
      'Energy flow analysis',
      'One month of support',
      'Implementation guidance'
    ],
    price: '$499',
    duration: '3-4 hours'
  },
  {
    id: 'plot-analysis',
    title: 'Plot Analysis',
    description: 'Expert Vastu guidance for your land and construction plans',
    icon: MapPin,
    benefits: [
      'Optimal land utilization',
      'Future-proof planning',
      'Avoid construction pitfalls',
      'Maximum value appreciation'
    ],
    features: [
      'Site visit and analysis',
      'Direction optimization',
      'Construction guidelines',
      'Pre-construction consultation',
      'Digital plot analysis report'
    ],
    price: '$399',
    duration: '2-3 hours'
  },
  {
    id: 'remedial-solutions',
    title: 'Remedial Solutions',
    description: 'Quick fixes and adjustments for existing Vastu issues',
    icon: Sun,
    benefits: [
      'Immediate problem resolution',
      'Non-structural solutions',
      'Cost-effective fixes',
      'Rapid implementation'
    ],
    features: [
      'Issue identification',
      'Priority-based solutions',
      'Alternative remedies',
      'Follow-up verification',
      'Maintenance guidance'
    ],
    price: '$199',
    duration: '1-2 hours'
  }
];
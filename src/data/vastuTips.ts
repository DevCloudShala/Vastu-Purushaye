import { Sun, Moon, Wind, Cloud, Compass, Home, Book, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TipCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tips: Tip[];
}

export interface Tip {
  id: string;
  title: string;
  content: string;
  importance: 'high' | 'medium' | 'low';
}

export const vastuTipCategories: TipCategory[] = [
  {
    id: 'directions',
    title: 'Directional Guidelines',
    icon: Compass,
    description: 'Essential tips for proper directional alignment in your space',
    tips: [
      {
        id: 'dir-1',
        title: 'Main Entrance',
        content: 'The main entrance should ideally be in the North or East direction for maximum positive energy flow.',
        importance: 'high'
      },
      {
        id: 'dir-2',
        title: 'Kitchen Placement',
        content: 'Place your kitchen in the Southeast direction to harness the power of fire element.',
        importance: 'high'
      },
      {
        id: 'dir-3',
        title: 'Bedroom Direction',
        content: 'Master bedroom should be in the Southwest direction for stability and strength.',
        importance: 'medium'
      },
      {
        id: 'dir-4',
        title: 'Study Room',
        content: 'Place study or work areas in the East or North for better concentration.',
        importance: 'medium'
      }
    ]
  },
  {
    id: 'elements',
    title: 'Five Elements Balance',
    icon: Sun,
    description: 'Tips for maintaining harmony between the five elements',
    tips: [
      {
        id: 'elem-1',
        title: 'Water Features',
        content: 'Place water features like fountains in the North or Northeast direction.',
        importance: 'high'
      },
      {
        id: 'elem-2',
        title: 'Natural Light',
        content: 'Ensure adequate natural light, especially from the East and North directions.',
        importance: 'high'
      },
      {
        id: 'elem-3',
        title: 'Plants Placement',
        content: 'Keep plants in the East or North direction to enhance positive energy.',
        importance: 'medium'
      },
      {
        id: 'elem-4',
        title: 'Metal Elements',
        content: 'Use metal elements in the West and Northwest areas of your space.',
        importance: 'medium'
      }
    ]
  },
  {
    id: 'daily',
    title: 'Daily Practices',
    icon: Star,
    description: 'Simple daily Vastu practices for better living',
    tips: [
      {
        id: 'daily-1',
        title: 'Morning Routine',
        content: 'Start your day facing East for positive energy absorption.',
        importance: 'high'
      },
      {
        id: 'daily-2',
        title: 'Workspace Setup',
        content: 'Face East or North while working for better concentration.',
        importance: 'high'
      },
      {
        id: 'daily-3',
        title: 'Evening Cleaning',
        content: 'Clean your house in the evening to remove negative energies.',
        importance: 'medium'
      },
      {
        id: 'daily-4',
        title: 'Night Practices',
        content: 'Close all windows and doors in the evening to retain positive energy.',
        importance: 'low'
      }
    ]
  }
];
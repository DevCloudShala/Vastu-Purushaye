export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
  title: string;
  description: string;
}

export const carouselImages: CarouselImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Modern Living Room",
    title: "Harmonious Living",
    description: "Create spaces that inspire peace and prosperity"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600573472573-8b45bf1907fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Zen Garden",
    title: "Natural Balance",
    description: "Align your space with nature's elements"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Modern Office",
    title: "Professional Success",
    description: "Optimize your workspace for growth"
  }
];
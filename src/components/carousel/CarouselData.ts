import {WEB_IMAGE} from '../../data/index.js'

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
    // url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    url: WEB_IMAGE.banner2,

    alt: "Modern Living Room",
    title: "Harmonious Living",
    description: "Create spaces that inspire peace and prosperity"
  },
  {
    id: 2,
    url: WEB_IMAGE.founderBanner1,
    alt: "Modern Living Room",
    title: "",
    description: ""
  },
  {
    id: 3,
    // url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    url: WEB_IMAGE.banner3,

    alt: "Modern Office",
    title: "Professional Success",
    description: "Optimize your workspace for growth"
  }
];
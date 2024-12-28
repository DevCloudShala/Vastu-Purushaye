import { WEB_IMAGE } from "../../data/index.js";

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
    url: WEB_IMAGE.founderBanner1,
    alt: "Modern Living Room",
    title: "",
    description: "",
  },
  {
    id: 2,
    url: WEB_IMAGE.banner2,
    alt: "Modern Living Room",
    title: "Harmonious Living",
    description: "Create spaces that inspire peace and prosperity",
  },
  {
    id: 3,
    url: WEB_IMAGE.banner3,
    alt: "Modern Office",
    title: "Professional Success",
    description: "Optimize your workspace for growth",
  },
];

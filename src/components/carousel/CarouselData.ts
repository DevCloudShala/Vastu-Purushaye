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
    image: WEB_IMAGE.founderBanner1,
    title: "",
    description: "",
  },
  {
    id: 2,
    image: WEB_IMAGE.banner2,
    title: "Harmonious Living",
    description: "Design your home for peace and balance.",
  },
  {
    id: 3,
    image: WEB_IMAGE.banner3,
    title: "Professional Success",
    description: "Create the ideal workspace for growth.",
  },
  
];

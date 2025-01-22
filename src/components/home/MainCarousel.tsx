import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { carouselImages } from "../carousel/CarouselData";


const slides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    title: "Building Tomorrow's World",
    subtitle: "Excellence in Construction"
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    title: "Modern Architecture",
    subtitle: "Innovative Design Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
    title: "Quality Construction",
    subtitle: "Building with Precision"
  }
];

export const MainCarousel = () => {
  return (
    <div className="relative lg:h-screen h-80 w-full ">
      <Swiper
        modules={[ Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {carouselImages.map((slide, index) => (
          <SwiperSlide key={index} >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {index===0? (<></>): <div className="absolute inset-0 bg-black/50" />}
             
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-white"
                >
                  <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl">{slide.description}</p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
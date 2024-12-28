import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel default styles
import { carouselImages } from "./CarouselData";

const ImageCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <Carousel
        showArrows
        showStatus={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        interval={5000}
        stopOnHover
        swipeable
        emulateTouch
        
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClickHandler}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClickHandler}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )
        }
      >
        {carouselImages.map((image) => (
          <div key={image.id} className="relative lg:h-screen h-full mt-6">
            {/* Image */}
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-contain lg:object-cover"
            />

            {/* Overlay Text */}
            {image.title || image.description ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute bottom-8 left-4 right-4 text-white lg:bottom-12 lg:left-8 lg:right-8"
              >
                <h2 className="text-xl lg:text-3xl font-bold mb-2">
                  {image.title}
                </h2>
                <p className="text-sm lg:text-lg text-gray-300">
                  {image.description}
                </p>
              </motion.div>
            ) : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

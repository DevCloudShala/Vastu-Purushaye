import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  autoplayInterval?: number;
  initialIndex?: number;
}

export const useCarousel = ({ 
  totalSlides, 
  autoplayInterval = 5000,
  initialIndex = 0 
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (
      prev === 0 ? totalSlides - 1 : prev - 1
    ));
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isAutoplayPaused) return;
    
    const timer = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoplayInterval, isAutoplayPaused]);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    goToSlide,
    setIsAutoplayPaused
  };
};
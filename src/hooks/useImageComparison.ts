import { useState, useRef, useEffect, useCallback } from "react";

export function useImageComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMove = useCallback((clientX: number, index: number) => {
    const container = containerRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const handleMouseDown = useCallback((index: number) => {
    setIsDragging(true);
    setActiveIndex(index);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || activeIndex === null) return;
      handleMove(e.clientX, activeIndex);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || activeIndex === null) return;
      handleMove(e.touches[0].clientX, activeIndex);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, activeIndex, handleMove, handleMouseUp]);

  const setRef = useCallback((index: number) => {
    return (element: HTMLDivElement | null) => {
      containerRefs.current[index] = element;
    };
  }, []);

  return {
    sliderPosition,
    setRef,
    handleMouseDown,
  };
}

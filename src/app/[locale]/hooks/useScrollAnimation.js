// hooks/useMultipleScrollAnimation.js
import React, { useEffect, useState, useRef } from "react";

export const useMultipleScrollAnimation = (numSections, threshold = 0.3) => {
  const refs = useRef([...Array(numSections)].map(() => React.createRef()));
  const [inViews, setInViews] = useState(Array(numSections).fill(false));

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViews((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        { threshold }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer, i) => {
        if (refs.current[i].current) observer.unobserve(refs.current[i].current);
      });
    };
  }, [threshold, numSections]);

  return [refs.current, inViews];
};

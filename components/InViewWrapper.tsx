"use client";
import React, { useEffect, useRef, useState } from 'react';

interface InViewWrapperProps {
  children: React.ReactNode;
  additionalClass?: string; // Any additional classes that should always be applied
}

const InViewWrapper: React.FC<InViewWrapperProps> = ({ children, additionalClass = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect observer after class is added
        }
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${additionalClass} ${isInView ? 'in-view' : 'not-in-view'} transition-opacity duration-[10s] ease-in-out`}
    >
      {children}
    </div>
  );
};

export default InViewWrapper;

import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
    });

    return () => observer.disconnect();
  }, []);
};
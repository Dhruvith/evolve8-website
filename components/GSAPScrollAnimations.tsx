'use client';

import { useEffect, useRef } from 'react';

export function GSAPScrollAnimations() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || initializedRef.current) return;

    // Try to load GSAP
    let gsap: any;
    let ScrollTrigger: any;

    try {
      gsap = require('gsap');
      ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    } catch (error) {
      // GSAP not available, skip animations
      console.warn('GSAP not available, skipping scroll animations');
      return;
    }

    if (!gsap || !ScrollTrigger) return;

    initializedRef.current = true;

    const sections = document.querySelectorAll('[data-gsap-section]');
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    sectionsRef.current.forEach((section) => {
      const elements = section.querySelectorAll('[data-gsap-element]');
      
      elements.forEach((element, elIndex) => {
        // Ensure content is visible by default
        const htmlElement = element as HTMLElement;
        htmlElement.style.opacity = '1';
        htmlElement.style.transform = 'translateY(0) scale(1)';
        
        try {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
              },
              delay: elIndex * 0.1,
              immediateRender: false,
            }
          );
        } catch (error) {
          // If animation fails, ensure element is visible
          htmlElement.style.opacity = '1';
        }
      });

      // Parallax effect for images
      const images = section.querySelectorAll('[data-gsap-parallax]');
      images.forEach((image) => {
        try {
          gsap.to(image, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        } catch (error) {
          // Ignore parallax errors
        }
      });

      // Text reveal animation
      const textElements = section.querySelectorAll('[data-gsap-text]');
      textElements.forEach((text) => {
        // Ensure text is visible initially
        const htmlText = text as HTMLElement;
        htmlText.style.clipPath = 'inset(0% 0 0 0)';
        
        try {
          gsap.fromTo(
            text,
            {
              clipPath: 'inset(100% 0 0 0)',
            },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
              immediateRender: false,
            }
          );
        } catch (error) {
          // If animation fails, ensure text is visible
          htmlText.style.clipPath = 'inset(0% 0 0 0)';
        }
      });
    });

    return () => {
      if (ScrollTrigger) {
        try {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  return null;
}

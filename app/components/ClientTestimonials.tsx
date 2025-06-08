'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './ClientTestimonials.module.css';

interface Testimonial {
  id: number;
  industry: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    industry: "CYBER SECURITY",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED"
  },
  {
    id: 2,
    industry: "CONSULTANT",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED"
  },
  {
    id: 3,
    industry: "INTERNET PROVIDER",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED"
  },
  {
    id: 4,
    industry: "INTERNET PROVIDER",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED"
  },
];

export default function ClientTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Touch handling for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Duplicate testimonials for infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!carouselRef.current || isMobile) return;

    const carousel = carouselRef.current;
    const cards = carousel.children;
    const cardWidth = 100 / 4; // 25% for 4 cards visible

    // Set up GSAP timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Create infinite scroll animation
    for (let i = 0; i < testimonials.length; i++) {
      timelineRef.current
        .to(carousel, {
          x: `-${(i + 1) * cardWidth}%`,
          duration: 0.8,
          ease: "power2.inOut"
        })
        .to({}, { duration: 4 }); // 4 second pause
    }

    // Reset to beginning
    timelineRef.current.to(carousel, {
      x: "0%",
      duration: 0.8,
      ease: "power2.inOut"
    });

    // Entrance animation
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0.2
      }
    );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!timelineRef.current) return;

    if (isHovered) {
      timelineRef.current.pause();
    } else {
      timelineRef.current.play();
    }
  }, [isHovered]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    const difference = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe left - next
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      } else {
        // Swipe right - previous
        setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What people say about us</h2>
        
        <div 
          ref={containerRef}
          className={styles.carouselContainer}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={carouselRef}
            className={`${styles.carousel} ${isMobile ? styles.mobileCarousel : ''}`}
            style={isMobile ? { 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.3s ease-out'
            } : {}}
          >
            {(isMobile ? testimonials : infiniteTestimonials).map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className={styles.testimonialCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.industry}>
                    {testimonial.industry}
                  </div>
                  <blockquote className={styles.quote}>
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots indicator */}
        {isMobile && (
          <div className={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
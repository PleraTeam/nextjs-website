"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./ProductSuite.module.css";

export default function ProductSuite() {
  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth <= 1024;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile()) return; // Skip animation on mobile/tablet
    
    const wrapper = e.currentTarget;
    const primaryCta = wrapper.querySelector(`.${styles.primaryCta}`);

    if (primaryCta) {
      // Show CTA
      gsap.to(primaryCta, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile()) return; // Skip animation on mobile/tablet
    
    const wrapper = e.currentTarget;
    const primaryCta = wrapper.querySelector(`.${styles.primaryCta}`);

    if (primaryCta) {
      // Hide CTA
      gsap.to(primaryCta, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} headline-subsection`}>
          Business Intelligence Suite
        </h2>
      </div>

      <div className={styles.productGrid}>
        {/* Client Acquisition - Active */}
        <div 
          className={`${styles.productWrapper} ${styles.active}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${styles.container} ${styles.productItem}`}>
            <div className={styles.productLeft}>
              <h3 className={`${styles.productTitle} headline-card`}>
                Client Acquisition
              </h3>
            </div>
            <div className={styles.productRight}>
              <p className={`${styles.productDescription} body-large`}>
                Turn expertise into predictable revenue. Automate prospecting,
                qualify ideal clients, and book meetings that matter.
              </p>
            </div>
            <div className={styles.primaryCta}>
              <button className={styles.ctaButton}>
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.fullWidthBorder}></div>
        </div>

        {/* Operations Management - Coming Soon */}
        <div 
          className={`${styles.productWrapper} ${styles.comingSoon}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${styles.container} ${styles.productItem}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Operations Management</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Scale service delivery without chaos. Eliminate manual processes
                and deliver consistent results as you grow.
              </p>
            </div>
            <div className={styles.primaryCta}>
              <button className={styles.ctaButton}>
                Coming Soon
              </button>
            </div>
          </div>
          <div className={styles.fullWidthBorder}></div>
        </div>

        {/* Marketing Automation - Coming Soon */}
        <div 
          className={`${styles.productWrapper} ${styles.comingSoon}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${styles.container} ${styles.productItem}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Marketing Automation</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Build authority that sells for you. Intelligent content and
                campaigns that establish expertise and drive demand.
              </p>
            </div>
            <div className={styles.primaryCta}>
              <button className={styles.ctaButton}>
                Coming Soon
              </button>
            </div>
          </div>
          <div className={styles.fullWidthBorder}></div>
        </div>

        {/* Team Optimization - Coming Soon */}
        <div 
          className={`${styles.productWrapper} ${styles.comingSoon}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${styles.container} ${styles.productItem}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Team Optimization</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Build teams that scale. Data-driven hiring, performance
                optimization, and retention strategies for growing businesses.
              </p>
            </div>
            <div className={styles.primaryCta}>
              <button className={styles.ctaButton}>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

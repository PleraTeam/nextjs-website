'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Plera_Homepage_Landing_Video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Top Text Overlays */}
        <div className={styles.topTextLeft}>
          <span className={`${styles.overlayText} body-base`}>We don't predict the future</span>
        </div>
        <div className={styles.topTextRight}>
          <span className={`${styles.overlayText} body-base`}>We build it for you</span>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Headline */}
          <div className={styles.headlineSection}>
            <h1 className={`${styles.headline} headline-hero`}>
              AI-powered automation for every business decision
            </h1>
          </div>

          {/* Right Side - CTA Buttons */}
          <div className={styles.ctaSection}>
            <button className={`${styles.primaryCta} button-text`}>
              Check if you qualify
            </button>
            <button className={`${styles.secondaryCta} button-text`}>
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
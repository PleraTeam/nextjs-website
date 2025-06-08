"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import HeroGridOverlay from "./HeroGridOverlay";

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
          preload='auto'
        >
          <source src='/Plera_Homepage_Landing_Video.mp4' type='video/mp4' />
          {/* Fallback for browsers that don't support video */}
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Grid Overlay for Border Structure */}
      <HeroGridOverlay />

      {/* Top Section - 50% height */}
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.topContent}>
            <span className={`${styles.overlayText} body-base`}>
              We don't predict the future
            </span>
            <span className={`${styles.overlayText} body-base`}>
              We build it for you
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section - 50% height */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomContent}>
            <h1 className={`${styles.headline} headline-hero`}>
              AI-powered automation for every business decision
            </h1>
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
      </div>
    </section>
  );
}

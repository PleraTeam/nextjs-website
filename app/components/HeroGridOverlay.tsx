'use client';

import styles from './HeroGridOverlay.module.css';

export default function HeroGridOverlay() {
  return (
    <div className={styles.heroGridOverlay}>
      {/* Top left corner */}
      <div className={styles.gridCell} data-position="top-left"></div>
      
      {/* Top center */}
      <div className={styles.gridCell} data-position="top-center"></div>
      
      {/* Top right corner */}
      <div className={styles.gridCell} data-position="top-right"></div>
    </div>
  );
}
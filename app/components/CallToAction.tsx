import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Headlines */}
        <div className={styles.headlineSection}>
          <h2 className={`${styles.mainHeadline} headline-subsection`}>Don't guess your next move.</h2>
          <h3 className={`${styles.subHeadline} headline-card`}>Automate the right decisions.</h3>
        </div>

        {/* CTA Cards */}
        <div className={styles.cardsContainer}>
          {/* Left Card - Dark Theme */}
          <div className={`${styles.ctaCard} ${styles.darkCard}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                We exclusively work with professional service firms ready to scale systematically. 
                See if you qualify for our business intelligence platform.
              </p>
              <button className={`${styles.ctaButton} ${styles.darkButton}`}>
                Check if you qualify <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>

          {/* Right Card - Light Theme */}
          <div className={`${styles.ctaCard} ${styles.lightCard}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                Explore how our business intelligence platform automates decisions across client acquisition, 
                operations, marketing, and team optimization.
              </p>
              <button className={`${styles.ctaButton} ${styles.lightButton}`}>
                See how it works <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
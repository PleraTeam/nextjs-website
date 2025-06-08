import styles from './ProductSuite.module.css';

export default function ProductSuite() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} headline-subsection`}>Business Intelligence Suite</h2>
        
        <div className={styles.productGrid}>
          {/* Client Acquisition - Active */}
          <div className={`${styles.productItem} ${styles.active}`}>
            <div className={styles.productLeft}>
              <h3 className={`${styles.productTitle} headline-card`}>Client Acquisition</h3>
            </div>
            <div className={styles.productRight}>
              <p className={`${styles.productDescription} body-large`}>
                AI-powered lead scoring and conversion optimization tools that help you identify and engage high-value prospects with precision targeting and automated workflows.
              </p>
            </div>
          </div>

          {/* Operations Management - Coming Soon */}
          <div className={`${styles.productItem} ${styles.comingSoon}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Operations Management</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Streamline your business processes with intelligent automation, resource allocation, and performance monitoring to maximize operational efficiency.
              </p>
            </div>
          </div>

          {/* Marketing Automation - Coming Soon */}
          <div className={`${styles.productItem} ${styles.comingSoon}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Marketing Automation</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Create personalized customer journeys with automated campaigns, dynamic content optimization, and real-time engagement analytics.
              </p>
            </div>
          </div>

          {/* Team Optimization - Coming Soon */}
          <div className={`${styles.productItem} ${styles.comingSoon}`}>
            <div className={styles.productLeft}>
              <h3 className={styles.productTitle}>Team Optimization</h3>
              <span className={styles.badge}>GOING LIVE SOON</span>
            </div>
            <div className={styles.productRight}>
              <p className={styles.productDescription}>
                Enhance team productivity with AI-driven insights, skill matching, workload balancing, and performance optimization recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
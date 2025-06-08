import styles from './ValueProposition.module.css';

export default function ValueProposition() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.headline} headline-section`}>
          Our software powers{' '}
          <span className={styles.accent}>predictable growth</span>{' '}
          and{' '}
          <span className={styles.accent}>operational excellence</span>{' '}
          for B2B companies worldwide, from client acquisition to service delivery.
        </h2>
      </div>
    </section>
  );
}
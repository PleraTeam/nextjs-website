import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <Link href="/" className={styles.logoText}>
            Plera
          </Link>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>
            Menu
          </Link>
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
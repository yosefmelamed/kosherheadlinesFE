import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>© {year} Kosher Headlines</span>
        <nav className={styles.links}>
          <a href="/about">About</a>
          <a href="/sources">Sources</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </nav>
      </div>
    </footer>
  );
}

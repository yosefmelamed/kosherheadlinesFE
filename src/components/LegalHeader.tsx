import React from 'react';
import styles from './LegalHeader.module.css';
 
export default function LegalHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>
          ← Headlines
        </a>
      </div>
    </header>
  );
}
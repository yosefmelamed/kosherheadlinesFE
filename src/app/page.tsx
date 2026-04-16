import { fetchDates, fmtFullDate } from '@/lib/types';
import HeadlinesClient from '@/components/HeadlinesClient';
import styles from './page.module.css';

export const revalidate = 0; // revalidate every 5 min

export default async function HomePage() {
  let dates: { fetch_date: string; story_count: number }[] = [];
  let error: string | null = null;

  try {
    dates = await fetchDates();
  } catch (e) {
    error = 'Could not connect to the API. Is the Express server running?';
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerTop}>
            <span className={styles.edition}>Daily Briefing</span>
            <span className={styles.dateline}>{today}</span>
          </div>
          <h1 className={styles.masthead}>Headlines</h1>
          <p className={styles.tagline}>Curated by AI · Filtered · Concise</p>
          <div className={styles.rule} />
        </div>
      </header>

      {error ? (
        <div className={styles.errorBanner}>
          <p>{error}</p>
          <code>cd api && npm run dev</code>
        </div>
      ) : dates.length === 0 ? (
        <div className={styles.emptyBanner}>
          <p>No headlines yet. Run the fetch job to get started:</p>
          <code>node cron/fetch.js</code>
        </div>
      ) : (
        <HeadlinesClient dates={dates} />
      )}
    </div>
  );
}

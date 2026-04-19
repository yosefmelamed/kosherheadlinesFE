import LegalHeader from '@/components/LegalHeader';
import styles from '../legal.module.css';
 
export const metadata = {
  title: 'Sources | Kosher Headlines',
};
 
export default function SourcesPage() {
  return (
    <>
    <LegalHeader />
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>News Sources</h1>
        <p className={styles.subtitle}>All headlines displayed on Kosher Headlines are sourced from the following publications. We link directly to every original article and encourage you to support these publishers by visiting their sites.</p>
 
        <section>
          <h2>Jewish News</h2>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://www.theyeshivaworld.com" target="_blank" rel="noopener noreferrer">Yeshiva World News</a>
              <span>Orthodox Jewish news, Israel, halacha, and community updates</span>
            </li>
          </ul>
        </section>
 
        <section>
          <h2>Trending &amp; General News</h2>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://www.foxnews.com" target="_blank" rel="noopener noreferrer">Fox News</a>
              <span>US and world breaking news</span>
            </li>
            <li>
              <a href="https://nypost.com" target="_blank" rel="noopener noreferrer">New York Post</a>
              <span>Breaking news and US stories</span>
            </li>
          </ul>
        </section>
 
        <section>
          <h2>US Politics &amp; World</h2>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://www.foxnews.com/politics" target="_blank" rel="noopener noreferrer">Fox News Politics</a>
              <span>US political news and analysis</span>
            </li>
            <li>
              <a href="https://www.washingtonexaminer.com" target="_blank" rel="noopener noreferrer">Washington Examiner</a>
              <span>Conservative political news and analysis</span>
            </li>
            <li>
              <a href="https://www.washingtontimes.com" target="_blank" rel="noopener noreferrer">Washington Times</a>
              <span>US politics and world news</span>
            </li>
            <li>
              <a href="https://www.foxnews.com/world" target="_blank" rel="noopener noreferrer">Fox News World</a>
              <span>International and foreign affairs coverage</span>
            </li>
          </ul>
        </section>
 
        <section>
          <h2>Financial News</h2>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://www.marketwatch.com" target="_blank" rel="noopener noreferrer">MarketWatch</a>
              <span>Markets, economy, and personal finance</span>
            </li>
            <li>
              <a href="https://www.wsj.com" target="_blank" rel="noopener noreferrer">Wall Street Journal</a>
              <span>Business and financial news</span>
            </li>
          </ul>
        </section>
 
        <section>
          <h2>Market Data</h2>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://finance.yahoo.com" target="_blank" rel="noopener noreferrer">Yahoo Finance</a>
              <span>Live stock quotes, indices, crypto, and commodities</span>
            </li>
          </ul>
        </section>
 
        <section>
          <h2>Content Usage</h2>
          <p>We access these publications through their publicly available RSS feeds, which are provided for the purpose of content syndication. We display only headlines and brief AI-generated summaries, and link to every original article. We do not reproduce full article text. If you are a publisher and have concerns about how your content is displayed please contact us at <a href="mailto:admin@kosherheadlines.com">admin@kosherheadlines.com</a>.</p>
        </section>
      </div>
    </div>
    </>
  );
}
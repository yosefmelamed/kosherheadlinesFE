import styles from '../legal.module.css';
import LegalHeader from '@/components/LegalHeader';
 
export const metadata = {
  title: 'About | Kosher Headlines',
};
 
export default function AboutPage() {
  return (
    <>
    <LegalHeader />
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>About Kosher Headlines</h1>
 
        <section>
          <h2>What is Kosher Headlines?</h2>
          <p>Kosher Headlines is a daily news aggregator built for the Orthodox Jewish community. We curate top headlines from across the web every morning, filtered and organized into five categories: Trending, US Politics, World, Financial, and Jewish news.</p>
          <p>Our goal is to provide a kosher, clean, distraction-free way to stay informed in five minutes or less — no images, no inappropriate content, no advertising, no entertainment news or celebrity gossip, and no content that conflicts with Orthodox Jewish values. Just concise, informative news presented in plain text.</p>
        </section>
 
        <section>
          <h2>How It Works</h2>
          <p>Each morning our system collects headlines from trusted news sources, processes them through an AI model to filter, categorize, and summarize each story, and stores the results for display. Every headline links directly to the original article so you can read the full story on the publisher's website.</p>
          <p>We also display live financial market data including major indices, stocks, crypto, and commodities.</p>
        </section>
 
        <section>
          <h2>Our Content Standards</h2>
          <p>We apply a strict editorial filter to every story before it appears on the site. Content is excluded if it falls into any of the following categories:</p>
          <ul>
            <li>Inappropriate content</li>
            <li>Religious content from other faiths or ideologies not aligned with Orthodox Jewish belief</li>
            <li>Stories involving graphic violence</li>
            <li>Content that conflicts with Orthodox Jewish values and sensibilities</li>
            <li>Sports and entertainment news</li>
            <li>Celebrity gossip and pop culture</li>
            <li>Clickbait, sponsored content, and low-quality aggregated material</li>
            <li>Duplicate or redundant coverage of the same story</li>
          </ul>
        </section>
 
        <section>
          <h2>Our Sources</h2>
          <p>We are grateful to the following publications whose RSS feeds make this service possible. All content remains the property of its original publisher and we encourage you to visit their sites directly:</p>
          <ul>
            <li><a href="https://www.theyeshivaworld.com" target="_blank" rel="noopener noreferrer">Yeshiva World News</a></li>
            <li><a href="https://www.foxnews.com" target="_blank" rel="noopener noreferrer">Fox News</a></li>
            <li><a href="https://nypost.com" target="_blank" rel="noopener noreferrer">New York Post</a></li>
            <li><a href="https://www.washingtonexaminer.com" target="_blank" rel="noopener noreferrer">Washington Examiner</a></li>
            <li><a href="https://www.washingtontimes.com" target="_blank" rel="noopener noreferrer">Washington Times</a></li>
            <li><a href="https://www.marketwatch.com" target="_blank" rel="noopener noreferrer">MarketWatch</a></li>
            <li><a href="https://www.wsj.com" target="_blank" rel="noopener noreferrer">Wall Street Journal</a></li>
          </ul>
        </section>
 
        <section>
          <h2>Disclaimer</h2>
          <p>Kosher Headlines is an independent aggregator and is not affiliated with any of the publications listed above. Article summaries are AI-generated paraphrases and may not perfectly represent the original article. Always read the full article on the original publisher's website for complete and accurate information.</p>
          <p>Financial data is provided for informational purposes only and does not constitute financial advice.</p>
        </section>
 
        <section>
          <h2>Contact</h2>
          <p>For questions, feedback, or content concerns please reach out to us at <a href="mailto:admin@kosherheadlines.com">admin@kosherheadlines.com</a>. We aim to respond within 2 business days.</p>
          <p>If you are a publisher and have concerns about how your content is displayed on this site please contact us at the same address and we will address your request promptly.</p>
        </section>
      </div>
    </div>
    </>
  );
}
import LegalHeader from '@/components/LegalHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms of Use | Kosher Headlines',
};

export default function TermsPage() {
  return (
    <>
    <LegalHeader />
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Terms of Use</h1>
        <p className={styles.updated}>Last updated: April 2026</p>

        <section>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using Kosher Headlines you accept and agree to be bound by these Terms of Use. If you do not agree to these terms please do not use this site.</p>
        </section>

        <section>
          <h2>About This Service</h2>
          <p>Kosher Headlines is a news aggregation service. We collect publicly available headlines and summaries from third-party RSS feeds and display them in a clean, organized format. All stories link back to their original source publications. We do not claim ownership of any third-party content.</p>
        </section>

        <section>
          <h2>Content and Attribution</h2>
          <p>All news headlines and article summaries displayed on this site are sourced from and attributed to their respective original publishers. Summaries are AI-generated paraphrases intended to give readers enough context to decide whether to click through to the full article. Full articles are hosted on and owned by their respective publishers.</p>
          <p>We make every effort to accurately attribute all content to its original source and to link directly to the original article.</p>
        </section>

        <section>
          <h2>Financial Information Disclaimer</h2>
          <p>Market data and financial information displayed on this site is for informational purposes only. Nothing on this site constitutes financial advice, investment advice, or a recommendation to buy or sell any security. Always consult a qualified financial advisor before making investment decisions.</p>
        </section>

        <section>
          <h2>No Warranties</h2>
          <p>This site is provided on an as-is basis without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of any information displayed. News headlines and summaries may contain errors or omissions.</p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Kosher Headlines shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on any information displayed here.</p>
        </section>

        <section>
          <h2>Third Party Links</h2>
          <p>This site contains links to third-party websites. We are not responsible for the content, privacy practices, or availability of those external sites. Clicking a link to an external site is at your own discretion.</p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>The design, layout, and original content of this site are owned by Kosher Headlines. Third-party news content remains the property of its respective owners. You may not reproduce, distribute, or commercially exploit content from this site without permission.</p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Use at any time. Continued use of the site after changes are posted constitutes your acceptance of the updated terms.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>If you have any questions about these Terms of Use please contact us through the About page.</p>
        </section>
      </div>
    </div>
    </>
  );
}

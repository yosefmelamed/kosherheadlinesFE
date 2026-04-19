import LegalHeader from '@/components/LegalHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Kosher Headlines',
};

export default function PrivacyPage() {
  return (
    <>
    <LegalHeader />
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 2026</p>

        <section>
          <h2>Overview</h2>
          <p>Kosher Headlines is a news aggregation service that collects and displays publicly available news headlines from third-party RSS feeds. This Privacy Policy explains how we handle information when you use our website.</p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We do not require you to create an account or provide any personal information to use this site. We do not collect names, email addresses, or any other personally identifiable information.</p>
          <p>Like most websites, our servers may automatically log standard technical information when you visit, including your IP address, browser type, operating system, referring URLs, and pages visited. This information is used solely for operating and improving the service and is not sold or shared with third parties.</p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>This site may use minimal cookies or local storage to remember your preferences such as your selected news category or day. We do not use tracking cookies or advertising cookies. If you disable cookies in your browser the site will still function normally.</p>
        </section>

        <section>
          <h2>Third Party Content</h2>
          <p>Headlines and summaries displayed on this site are sourced from third-party RSS feeds. We do not control the privacy practices of those third-party websites. When you click a link to read a full article you will be directed to that third-party website and their privacy policy will apply.</p>
        </section>

        <section>
          <h2>Market Data</h2>
          <p>Financial market data displayed on this site is sourced from publicly available financial data providers. This data is for informational purposes only and should not be considered financial advice.</p>
        </section>

        <section>
          <h2>Advertising</h2>
          <p>If this site displays advertisements, those ad providers may use cookies to serve relevant ads. Please refer to the respective ad provider privacy policies for more information.</p>
        </section>

        <section>
          <h2>Children</h2>
          <p>This site is not directed at children under the age of 13. We do not knowingly collect any information from children.</p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>If you have any questions about this Privacy Policy please contact us through the About page.</p>
        </section>
      </div>
    </div>
    </>
  );
}

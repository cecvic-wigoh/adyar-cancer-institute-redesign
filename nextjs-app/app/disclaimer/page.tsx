import type { Metadata } from 'next';
import styles from '../LegalPage.module.css';

export const metadata: Metadata = {
  title: 'Disclaimer | Cancer Institute (WIA)',
  description: 'Disclaimer of endorsement and liability, portal accessibility, and career information for the Cancer Institute (WIA), Adyar.',
};

export default function DisclaimerPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <header className={styles.header}>
          <h1>Disclaimer</h1>
          <div className={styles.divider}></div>
        </header>

        <article className={styles.content}>
          <section className={styles.section}>
            <h2>Disclaimer of Endorsement and Liability</h2>
            <p>
              (for commercial products, processes and or services)
            </p>
            <p>
              The Cancer Institute (W.I.A) Adyar website will not mention and or endorse or recommend any commercial products, processes or services. Any mention of commercial products, processes, or services as a part of the web content on Centre’s portal should not be construed as an endorsement or recommendation.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Portal accessibility</h2>
            <p>
              The Cancer Institute (W.I.A) Adyar is committed to providing access to its web pages for individuals (medical professionals, social workers, and patients as well, and all those who look for information about the centre, and or on the cancer disease or health information. The Hospital recognizes the importance of making its portal available to the largest possible audience and the goal is to attempt to design the portal to be accessible by everyone.
            </p>
            <p>
              Efforts have been made to ensure the accuracy and currency of the content on this portal. These should not be construed as a statement of medical advice, law or used for any legal purposes. The centre does not take any responsibility of the content for its accuracy, completeness, and usefulness or otherwise.
            </p>
            <p>
              Visitors to the portal should verify/check any information with the relevant other source(s). The centre is not liable to pay for any loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use of information from this portal or in any other connection with the use of this portal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Careers</h2>
            <p>
              The Centre publishes advertisements for career opportunities /job vacancies for all its campuses and the other Centres on this web portal and in leading national newspapers and international and national scientific journals. Cancer Institute (W.I.A) Adyar is not responsible for any fraudulent job offer(s) and no candidate is required to pay anything for a job at this Centre / Hospital(s).
            </p>
            <p>
              We have received emails from applicants who are subject to a SPAM recruitment communication from an email / portal that does not belong to the Cancer Institute (W.I.A) Adyar Hospital. Please note that any official email communications will bear the info@cancerinstitutewia.in as communicators email ID.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Translation</h2>
            <p>
              This portal is executed in English language and is translated into regional language for ease of understanding. In the event of conflict of interpretation, portal executed in English language, for its true meaning, construction, etc. thereof.
            </p>
          </section>

          <div className={styles.lastUpdated}>
            Last Updated: March 2026
          </div>
        </article>
      </div>
    </main>
  );
}

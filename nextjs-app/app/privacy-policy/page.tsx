import type { Metadata } from 'next';
import styles from '../LegalPage.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cancer Institute (WIA)',
  description: 'Privacy policy and data protection practices of the Cancer Institute (WIA), Adyar.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <header className={styles.header}>
          <h1>Privacy Policy</h1>
          <div className={styles.divider}></div>
        </header>

        <article className={styles.content}>
          <section className={styles.section}>
            <p>
              Cancer Institute (W.I.A) and Research Centre (referred to as “we”, us”,) is the author and publisher of the internet resource Cancer Institute (W.I.A) Adyar (together referred to as “Websites”) on the world wide web as well as other software and applications provided by Cancer Institute (W.I.A) Adyar, including but not limited to the mobile applications (referred to as “App”, and together with Websites referred to as “Services”). Cancer Institute (W.I.A) Adyar provides the Services in partnership with its agents, affiliates, associates, representatives or other third parties (together referred to as “Partners”).
            </p>
          </section>

          <section className={styles.section}>
            <h2>DISCLAIMER</h2>
            <p>
              All the information displayed, transmitted or carried by Cancer Institute (W.I.A) Adyar and its related websites including, but not limited to, directories, guides, news articles, opinions, reviews, text, photographs, images, illustrations, profiles, audio clips, video clips, trademarks, service marks and the like, collectively the “Content”, are protected by the copyright and other intellectual property laws and be informed that the content of the same is not intended to be a substitute for professional medical advice and not for solicitation of business.
            </p>
            <p>
              The Content is owned by Cancer Institute (W.I.A) Adyar, its affiliates or third party licensors. You may not modify, publish, transmit, transfer, sell, reproduce, create derivative work from, distribute, repost, perform, display or in any way commercially exploit any of the Content. 
            </p>
          </section>

          <section className={styles.section}>
            <h2>LIMITATION OF LIABILITY</h2>
            <p>
              The Cancer Institute (W.I.A) Adyar website does not represent or endorse the accuracy, completeness or reliability of any advice, opinion, statement or other information displayed, uploaded or distributed through the website. You acknowledge that any reliance upon any such opinion, advice, statement or information shall be at your sole risk.
            </p>
            <p>
              Cancer Institute (W.I.A) Adyar makes no warranty or representation, whatsoever, regarding the website or any content, advertising services or products provided through or in connection with the website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>CONFIDENTIALITY</h2>
            <p>
              Cancer Institute (W.I.A) Adyar is committed to maintain the confidentiality of your medical information, to provide you with this written Notice of Privacy Rights and Practices, and to abide by the terms of the Notice currently in effect. This policy shall be applicable to the information collected or displayed on our website.
            </p>
            <p>
              We will not disclose or sell any of your personal information, including your name, address, age, sex or medical history to any third party without your permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>FEEDBACK & OPINIONS</h2>
            <p>
              Any feedback / opinion(s) expressed in response to e-mail queries shall not be treated as medical advice until and unless the physical examination of the patient is carried out no treatment shall be initiated.
            </p>
            <p>
              E-mail transmission cannot be guaranteed to be secured or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. The sender therefore, does not accept liability for any errors or omissions in the contents of this message.
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

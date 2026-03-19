import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Coming Soon | Cancer Institute (WIA)",
};

export default function ComingSoonPage() {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>Coming Soon</h1>
        <p className={styles.subtitle}>
          This page is under construction. Check back soon for updates.
        </p>
        <Link href="/" className={styles.homeLink}>
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

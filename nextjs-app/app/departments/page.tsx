import Link from "next/link";
import { departments } from "@/data/departments";
import styles from "./Departments.module.css";

export const metadata = {
  title: "Departments | Adyar Cancer Institute (WIA)",
  description: "Explore our clinical, diagnostic, and support departments dedicated to comprehensive cancer care.",
};

export default function DepartmentsPage() {
  const clinicalDepartments = departments.filter((d) => d.category === "clinical");
  const diagnosticDepartments = departments.filter((d) => d.category === "diagnostic");
  const supportDepartments = departments.filter((d) => d.category === "support");

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <span className={styles.label}>+ Medical Excellence</span>
          <h1>Our Departments</h1>
          <p className={styles.lead}>
            At the Cancer Institute (WIA), our departments work in seamless
            collaboration to provide comprehensive, multidisciplinary care
            tailored to every patient's unique needs.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2>Clinical Departments</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.grid}>
            {clinicalDepartments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2>Diagnostic Services</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.grid}>
            {diagnosticDepartments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2>Support Services</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.grid}>
            {supportDepartments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Need Assistance Finding a Specialist?</h2>
            <p>Our patient coordinators are here to help you navigate your care path.</p>
            <div className={styles.ctaBtns}>
              <Link href="/doctors" className="btn btn-primary">Meet Our Doctors</Link>
              <Link href="/#appointment" className="btn btn-outline">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DepartmentCard({ department }: { department: any }) {
  const href = department.isComingSoon
    ? "/coming-soon"
    : department.externalHref || `/departments/${department.slug}`;

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardContent}>
        <h3>{department.navLabel || department.title}</h3>
        <p>{department.tagline}</p>
        <span className={styles.learnMore}>
          {department.isComingSoon ? "Coming Soon" : "Learn More"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

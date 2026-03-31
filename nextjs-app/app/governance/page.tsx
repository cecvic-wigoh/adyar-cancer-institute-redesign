import type { Metadata } from "next";
import Link from "next/link";
import {
  leadershipHighlights,
  governingBody,
  hodIncharges,
  executiveCommittee,
  financeCommittee,
  getInitials,
} from "@/data/governance";
import type {
  LeadershipMember,
  GoverningBodyMember,
  HODEntry,
  CommitteeMember,
} from "@/data/governance";
import styles from "./Governance.module.css";

export const metadata: Metadata = {
  title: "Governance Body | Cancer Institute (WIA)",
  description:
    "Meet the governing body, leadership team, executive committee, HODs, and finance committee of Cancer Institute (WIA), Adyar, Chennai.",
};

export default function GovernancePage() {
  return (
    <main id="main">
      {/* Hero */}
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.label}>+ Institutional Leadership</span>
          <h1>Management</h1>
          <p className={styles.heroSubtitle}>
            Governing Body of the Cancer Institute (WIA)
          </p>
          <p className={styles.heroLead}>
            The Cancer Institute (WIA) is governed by a distinguished body of
            leaders committed to advancing cancer care, research, and education
            in India. Established under the Societies Registration Act of 1860,
            the Governing Body comprises eminent medical professionals,
            accomplished administrators, and respected industry leaders who
            collectively guide the institution&apos;s vision and strategic direction.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>Management</span>
        </nav>
      </div>

      {/* Section 1: Leadership Highlights */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Leadership</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.leadershipGrid}>
            {leadershipHighlights.map((leader) => (
              <LeadershipCard key={leader.name} member={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Governing Body */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Governing Body</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.memberGrid}>
            {governingBody.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: HOD / Incharges */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>HOD / Incharges</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.hodGrid}>
            {hodIncharges.map((hod) => (
              <HODCard key={`${hod.name}-${hod.department}`} entry={hod} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Executive Committee */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Executive Committee Members</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.committeeGrid}>
            {executiveCommittee.map((member) => (
              <CommitteeCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Finance Committee */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Finance Committee</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.committeeGrid}>
            {financeCommittee.map((member) => (
              <CommitteeCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Inline Sub-components ── */

function LeadershipCard({ member }: { member: LeadershipMember }) {
  return (
    <div className={styles.leaderCard}>
      <div className={styles.avatarLg}>
        <span>{getInitials(member.name)}</span>
      </div>
      <div className={styles.leaderName}>{member.name}</div>
      <div className={styles.leaderDesignation}>{member.designation}</div>
      <p className={styles.leaderQuote}>&ldquo;{member.quote}&rdquo;</p>
    </div>
  );
}

function MemberCard({ member }: { member: GoverningBodyMember }) {
  return (
    <div className={styles.memberCard}>
      <div className={styles.avatarMd}>
        <span>{getInitials(member.name)}</span>
      </div>
      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{member.name}</div>
        <div className={styles.memberDesignation}>{member.designation}</div>
        {member.affiliation && (
          <div className={styles.memberAffiliation}>{member.affiliation}</div>
        )}
      </div>
    </div>
  );
}

function HODCard({ entry }: { entry: HODEntry }) {
  return (
    <div className={styles.hodCard}>
      <div className={styles.avatarSm}>
        <span>{getInitials(entry.name)}</span>
      </div>
      <div className={styles.hodInfo}>
        <div className={styles.hodName}>{entry.name}</div>
        <div>
          <span className={styles.hodDept}>{entry.department}</span>
          {entry.designation && (
            <span className={styles.hodDesignation}>({entry.designation})</span>
          )}
        </div>
      </div>
    </div>
  );
}

function CommitteeCard({ member }: { member: CommitteeMember }) {
  return (
    <div className={styles.committeeCard}>
      <div className={styles.avatarSm}>
        <span>{getInitials(member.name)}</span>
      </div>
      <div className={styles.committeeInfo}>
        <div className={styles.committeeName}>{member.name}</div>
        <div className={styles.committeeDesignation}>
          {member.designation}
        </div>
        {member.affiliation && (
          <div className={styles.committeeAffiliation}>
            {member.affiliation}
          </div>
        )}
      </div>
    </div>
  );
}

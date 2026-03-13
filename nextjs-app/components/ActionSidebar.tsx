'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SearchOverlay from './SearchOverlay';
import styles from './ActionSidebar.module.css';

export default function ActionSidebar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <aside className={styles.root} aria-label="Action Sidebar">
        <Link href="/#appointment" className={styles.actionButton} title="Book Appointment">
          <Image src="/sidebar-icons/agenda_1.png" alt="" width={30} height={30} className={styles.iconImg} />
        </Link>

        <Link href="/doctors" className={styles.actionButton} title="Find a Doctor">
          <Image src="/sidebar-icons/medical-team.png" alt="" width={30} height={30} className={styles.iconImg} />
        </Link>

        <Link href="/#faq" className={styles.actionButton} title="FAQ's">
          <Image src="/sidebar-icons/faq.png" alt="" width={30} height={30} className={styles.iconImg} />
        </Link>

        <button 
          className={`${styles.actionButton} ${styles.searchButton}`} 
          onClick={() => setSearchOpen(true)}
          title="Search Website"
        >
          <Image src="/sidebar-icons/magnifying-glass.png" alt="" width={24} height={24} className={styles.iconImg} />
        </button>

        <a href="https://ci-wia-research-pages.vercel.app/research" className={styles.actionButton} title="Research" target="_blank" rel="noopener noreferrer">
          <Image src="/sidebar-icons/agenda.png" alt="" width={30} height={30} className={styles.iconImg} />
        </a>
      </aside>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

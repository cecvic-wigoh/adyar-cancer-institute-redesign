"use client";

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { directoryOfServices, departments, type DiagnosticTest } from '@/data/dos';
import styles from './page.module.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

/* ── Detail Section Component ── */
function DetailSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.detailSection}>
      <h3 className={styles.detailSectionLabel}>{label}</h3>
      <div className={styles.detailSectionBody}>{children}</div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null;
  return (
    <div className={styles.detailField}>
      <dt className={styles.detailFieldLabel}>{label}</dt>
      <dd className={styles.detailFieldValue}>{value}</dd>
    </div>
  );
}

/* ── Test Detail View (right panel) ── */
function TestDetail({ test, onBack, activeSection, onSectionChange }: {
  test: DiagnosticTest;
  onBack: () => void;
  activeSection: string;
  onSectionChange: (s: string) => void;
}) {
  const sections = ['OVERVIEW', 'SPECIMEN', 'CLINICAL & INTERPRETIVE', 'SCHEDULING'];

  return (
    <div className={styles.detailView}>
      {/* Detail Header */}
      <div className={styles.detailHeader}>
        <button className={styles.backBtn} onClick={onBack}>
          <BackIcon /> Back to catalog
        </button>
        <div className={styles.detailHeaderRow}>
          <div>
            <div className={styles.detailTestId}>
              TEST ID : <strong>{test.testCode}</strong>
            </div>
          </div>
          <button className={styles.printBtn} onClick={() => window.print()} title="Print">
            <PrintIcon />
          </button>
        </div>
        <div className={styles.detailDivider} />
        <h1 className={styles.detailTestName}>{test.testName}</h1>
      </div>

      {/* Sidebar + Content */}
      <div className={styles.detailLayout}>
        {/* Left Sidebar Nav */}
        <nav className={styles.detailSidebar}>
          {sections.map(s => (
            <button
              key={s}
              className={`${styles.sidebarItem} ${activeSection === s ? styles.sidebarItemActive : ''}`}
              onClick={() => onSectionChange(s)}
            >
              {s}
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <div className={styles.detailContent}>
          {activeSection === 'OVERVIEW' && (
            <>
              <DetailSection label="DEPARTMENT">
                <p className={styles.detailText}>{test.department}</p>
                {test.intercom && <p className={styles.detailTextMuted}>Intercom: {test.intercom}</p>}
              </DetailSection>

              <DetailSection label="METHOD NAME">
                <p className={styles.detailText}>{test.method || '—'}</p>
              </DetailSection>

              {test.clinicalInfo && (
                <DetailSection label="CLINICAL USE &amp; INFORMATION">
                  <p className={styles.detailText}>{test.clinicalInfo}</p>
                </DetailSection>
              )}

              {test.transport && (
                <DetailSection label="TRANSPORT">
                  <p className={styles.detailText}>{test.transport}</p>
                </DetailSection>
              )}
            </>
          )}

          {activeSection === 'SPECIMEN' && (
            <>
              <DetailSection label="SPECIMEN TYPE">
                <p className={styles.detailText}>{test.sample || '—'}</p>
              </DetailSection>

              <DetailSection label="COLLECTION INSTRUCTIONS">
                <p className={styles.detailText}>{test.sampleInstructions || '—'}</p>
              </DetailSection>

              <DetailSection label="CONTAINER / CAP COLOR">
                <div className={styles.capColorRow}>
                  <CapColorDot color={test.capColor} />
                  <span>{test.capColor || '—'}</span>
                </div>
              </DetailSection>
            </>
          )}

          {activeSection === 'CLINICAL & INTERPRETIVE' && (
            <>
              <DetailSection label="CLINICAL INFORMATION">
                <p className={styles.detailText}>{test.clinicalInfo || 'No additional clinical information available.'}</p>
              </DetailSection>

              {test.transport && (
                <DetailSection label="TRANSPORT / SPECIAL INSTRUCTIONS">
                  <p className={styles.detailText}>{test.transport}</p>
                </DetailSection>
              )}
            </>
          )}

          {activeSection === 'SCHEDULING' && (
            <>
              <DetailSection label="COLLECTION SCHEDULE">
                <p className={styles.detailText}>{test.collectionSchedule || '—'}</p>
              </DetailSection>

              <DetailSection label="TURNAROUND TIME">
                <p className={styles.detailText}>{test.tat || '—'}</p>
              </DetailSection>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CapColorDot({ color }: { color: string }) {
  const colorMap: Record<string, string> = {
    'Yellow': '#FBBF24', 'yellow': '#FBBF24',
    'Red': '#EF4444',
    'Purple': '#8B5CF6', 'EDTA': '#8B5CF6', 'EDTA/Purple': '#8B5CF6',
    'EDTA Tube Lavendar colour': '#C084FC',
    'Blue cap': '#3B82F6',
    'Green yellow': '#84CC16', 'Green/Yellow': '#84CC16', 'Yellow  Green': '#84CC16',
    'Grey': '#9CA3AF',
  };
  const bg = colorMap[color] || '#D1D5DB';
  return <span className={styles.capDot} style={{ backgroundColor: bg }} title={color} />;
}

/* ══════════════════════════════════════════════════════════════
   Main Page Component
   ══════════════════════════════════════════════════════════════ */
export default function DirectoryOfServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [selectedTest, setSelectedTest] = useState<DiagnosticTest | null>(null);
  const [activeSection, setActiveSection] = useState('OVERVIEW');
  const listRef = useRef<HTMLDivElement>(null);

  const filteredTests = useMemo(() => {
    return directoryOfServices.filter(test => {
      // Department filter
      if (activeDepartment !== 'All' && test.department !== activeDepartment) return false;

      // Alphabet filter
      if (activeLetter) {
        if (activeLetter === '#') {
          if (/^[A-Za-z]/.test(test.testName)) return false;
        } else {
          if (!test.testName.toUpperCase().startsWith(activeLetter)) return false;
        }
      }

      // Search filter
      if (searchQuery) {
        const term = searchQuery.toLowerCase();
        return (
          test.testName.toLowerCase().includes(term) ||
          test.testCode.toLowerCase().includes(term) ||
          test.sample.toLowerCase().includes(term) ||
          test.method.toLowerCase().includes(term) ||
          test.clinicalInfo.toLowerCase().includes(term)
        );
      }

      return true;
    });
  }, [searchQuery, activeLetter, activeDepartment]);

  function handleSelectTest(test: DiagnosticTest) {
    setSelectedTest(test);
    setActiveSection('OVERVIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBack() {
    setSelectedTest(null);
  }

  function clearFilters() {
    setSearchQuery('');
    setActiveLetter(null);
    setActiveDepartment('All');
  }

  /* ── Detail View ── */
  if (selectedTest) {
    return (
      <main id="main" className={styles.page}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">HOME</Link>
              <span className={styles.breadcrumbSep}>|</span>
              <button className={styles.breadcrumbBtn} onClick={handleBack}>TEST CATALOG</button>
              <span className={styles.breadcrumbSep}>|</span>
              <span className={styles.breadcrumbCur}>OVERVIEW</span>
            </nav>
          </div>
        </div>

        <div className={styles.contentWrap}>
          <TestDetail
            test={selectedTest}
            onBack={handleBack}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>
      </main>
    );
  }

  /* ── Catalog List View ── */
  return (
    <main id="main" className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span className={styles.breadcrumbSep}>|</span>
            <span className={styles.breadcrumbCur}>TEST CATALOG</span>
          </nav>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.catalogLayout}>

          {/* ── Left Sidebar: Search + Alphabet + Departments ── */}
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>TEST CATALOG</h2>

            {/* Search */}
            <div className={styles.searchWrap}>
              <div className={styles.searchIcon}><SearchIcon /></div>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Alphabet Grid */}
            <div className={styles.alphaGrid}>
              {ALPHABET.map(letter => (
                <button
                  key={letter}
                  className={`${styles.alphaBtn} ${activeLetter === letter ? styles.alphaBtnActive : ''}`}
                  onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Department Filter */}
            <div className={styles.deptFilter}>
              <h3 className={styles.deptFilterTitle}>DEPARTMENTS</h3>
              <button
                className={`${styles.deptBtn} ${activeDepartment === 'All' ? styles.deptBtnActive : ''}`}
                onClick={() => setActiveDepartment('All')}
              >
                All Departments
              </button>
              {departments.map(dept => (
                <button
                  key={dept}
                  className={`${styles.deptBtn} ${activeDepartment === dept ? styles.deptBtnActive : ''}`}
                  onClick={() => setActiveDepartment(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </aside>

          {/* ── Main: Test List ── */}
          <div className={styles.catalogMain} ref={listRef}>
            <div className={styles.catalogHeader}>
              <h2 className={styles.catalogTitle}>
                {activeDepartment !== 'All'
                  ? activeDepartment.toUpperCase()
                  : activeLetter
                    ? `Test Names: ${activeLetter}`
                    : 'ALL TESTS'
                }
              </h2>
              <div className={styles.resultCount}>
                {filteredTests.length} {filteredTests.length === 1 ? 'test' : 'tests'} found
              </div>
            </div>

            {filteredTests.length > 0 ? (
              <ul className={styles.testList}>
                {filteredTests.map(test => (
                  <li key={test.testCode + '-' + test.srNo}>
                    <button
                      className={styles.testListItem}
                      onClick={() => handleSelectTest(test)}
                    >
                      <span className={styles.testListCode}>{test.testCode}</span>
                      <span className={styles.testListName}>{test.testName}</span>
                      <span className={styles.testListMeta}>{test.department}, {test.sample}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyTitle}>No tests found</p>
                <p className={styles.emptyText}>
                  Try a different search term, letter, or department.
                </p>
                <button className={styles.emptyReset} onClick={clearFilters}>
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}

"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { directoryOfServices, departments } from '@/data/dos';
import styles from './page.module.css';

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CapColorDot({ color }: { color: string }) {
  const colorMap: Record<string, string> = {
    'Yellow': '#FBBF24',
    'yellow': '#FBBF24',
    'Red': '#EF4444',
    'Purple': '#8B5CF6',
    'EDTA': '#8B5CF6',
    'EDTA/Purple': '#8B5CF6',
    'EDTA Tube Lavendar colour': '#C084FC',
    'Blue cap': '#3B82F6',
    'Green yellow': '#84CC16',
    'Green/Yellow': '#84CC16',
    'Yellow  Green': '#84CC16',
    'Grey': '#9CA3AF',
  };
  const bg = colorMap[color] || '#D1D5DB';
  return <span className={styles.capDot} style={{ backgroundColor: bg }} title={color} />;
}

export default function DirectoryOfServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [expandedTest, setExpandedTest] = useState<string | null>(null);

  const filteredTests = useMemo(() => {
    return directoryOfServices.filter(test => {
      const matchesDept = activeDepartment === 'All' || test.department === activeDepartment;
      if (!matchesDept) return false;
      if (!searchQuery) return true;
      const term = searchQuery.toLowerCase();
      return (
        test.testName.toLowerCase().includes(term) ||
        test.testCode.toLowerCase().includes(term) ||
        test.sample.toLowerCase().includes(term) ||
        test.method.toLowerCase().includes(term) ||
        test.clinicalInfo.toLowerCase().includes(term)
      );
    });
  }, [searchQuery, activeDepartment]);

  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { All: directoryOfServices.length };
    for (const t of directoryOfServices) {
      counts[t.department] = (counts[t.department] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <main id="main" className={styles.page}>

      {/* Sticky Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>&rsaquo;</span>
            <Link href="/diagnostics">Diagnostics</Link>
            <span className={styles.breadcrumbSep}>&rsaquo;</span>
            <span className={styles.breadcrumbCur}>Directory of Services</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Directory of Services</h1>
          <p className={styles.subtitle}>
            Search our comprehensive catalog of {directoryOfServices.length} diagnostic tests across {departments.length} departments.
            View specimen requirements, turnaround times, and methodologies.
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <div className={styles.searchWrap}>
            <div className={styles.searchIcon}><SearchIcon /></div>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search by test name, code, specimen, or method..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className={styles.searchClear}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          <div className={styles.pillsRow}>
            <div className={styles.pillsScroll}>
              <button
                className={`${styles.pill} ${activeDepartment === 'All' ? styles.pillActive : ''}`}
                onClick={() => setActiveDepartment('All')}
              >
                All <span className={styles.pillCount}>{deptCounts['All']}</span>
              </button>
              {departments.map(dept => (
                <button
                  key={dept}
                  className={`${styles.pill} ${activeDepartment === dept ? styles.pillActive : ''}`}
                  onClick={() => setActiveDepartment(dept)}
                >
                  {dept} <span className={styles.pillCount}>{deptCounts[dept] || 0}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultCount}>
            Showing <strong>{filteredTests.length}</strong> of {directoryOfServices.length} tests
            {activeDepartment !== 'All' && <> in <strong>{activeDepartment}</strong></>}
          </div>
        </div>
      </div>

      {/* Test Catalog */}
      <div className={styles.catalogWrap}>
        <div className={styles.catalogInner}>

          {/* Table Header */}
          <div className={styles.tableHead}>
            <div className={styles.colName}>Test Name</div>
            <div className={styles.colSpecimen}>Specimen</div>
            <div className={styles.colMethod}>Method</div>
            <div className={styles.colTat}>TAT</div>
            <div className={styles.colDept}>Department</div>
            <div className={styles.colExpand}></div>
          </div>

          {/* Test Rows */}
          {filteredTests.length > 0 ? (
            filteredTests.map((test) => {
              const isExpanded = expandedTest === test.testCode + '-' + test.srNo;
              return (
                <div key={test.testCode + '-' + test.srNo} className={styles.testRow}>
                  <button
                    className={`${styles.testRowMain} ${isExpanded ? styles.testRowActive : ''}`}
                    onClick={() => setExpandedTest(isExpanded ? null : test.testCode + '-' + test.srNo)}
                    aria-expanded={isExpanded}
                  >
                    <div className={styles.colName}>
                      <div className={styles.testName}>{test.testName}</div>
                      <div className={styles.testCode}>{test.testCode}</div>
                    </div>
                    <div className={styles.colSpecimen}>
                      <CapColorDot color={test.capColor} />
                      {test.sample}
                    </div>
                    <div className={styles.colMethod}>{test.method}</div>
                    <div className={styles.colTat}>{test.tat}</div>
                    <div className={styles.colDept}>
                      <span className={styles.badge}>{test.department}</span>
                    </div>
                    <div className={styles.colExpand}>
                      <ChevronIcon expanded={isExpanded} />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className={styles.detailPanel}>
                      <div className={styles.detailGrid}>
                        <div className={styles.detailGroup}>
                          <h4 className={styles.detailLabel}>Specimen Requirements</h4>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Sample Type</span>
                            <span className={styles.detailValue}>{test.sample || '—'}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Instructions</span>
                            <span className={styles.detailValue}>{test.sampleInstructions || '—'}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Tube Cap Color</span>
                            <span className={styles.detailValue}>
                              <CapColorDot color={test.capColor} /> {test.capColor || '—'}
                            </span>
                          </div>
                        </div>

                        <div className={styles.detailGroup}>
                          <h4 className={styles.detailLabel}>Testing Information</h4>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Methodology</span>
                            <span className={styles.detailValue}>{test.method || '—'}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Collection Schedule</span>
                            <span className={styles.detailValue}>{test.collectionSchedule || '—'}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Turnaround Time</span>
                            <span className={styles.detailValue}>{test.tat || '—'}</span>
                          </div>
                        </div>

                        <div className={styles.detailGroup}>
                          <h4 className={styles.detailLabel}>Clinical Information</h4>
                          <div className={styles.detailRow}>
                            <span className={styles.detailKey}>Clinical Use</span>
                            <span className={styles.detailValue}>{test.clinicalInfo || '—'}</span>
                          </div>
                          {test.transport && (
                            <div className={styles.detailRow}>
                              <span className={styles.detailKey}>Transport</span>
                              <span className={styles.detailValue}>{test.transport}</span>
                            </div>
                          )}
                        </div>

                        {test.intercom && (
                          <div className={styles.detailGroup}>
                            <h4 className={styles.detailLabel}>Contact</h4>
                            <div className={styles.detailRow}>
                              <span className={styles.detailKey}>Intercom</span>
                              <span className={styles.detailValue}>{test.intercom}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <SearchIcon />
              </div>
              <p className={styles.emptyTitle}>No tests found</p>
              <p className={styles.emptyText}>
                No results matching &ldquo;{searchQuery}&rdquo;
                {activeDepartment !== 'All' && <> in {activeDepartment}</>}.
                Try a different search term or department.
              </p>
              <button className={styles.emptyReset} onClick={() => { setSearchQuery(''); setActiveDepartment('All'); }}>
                Clear filters
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

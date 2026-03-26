"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { departments } from "@/data/departments";
import styles from "./SubNav.module.css";

interface SubNavLink {
  label: string;
  href: string;
  external?: boolean;
  subLinks?: SubNavLink[];
}

interface SubNavColumn {
  heading: string;
  links: SubNavLink[];
}

interface SubNavCta {
  label: string;
  href: string;
  desc?: string;
  external?: boolean;
  blinking?: boolean;
}

interface SubNavCategory {
  label: string;
  columns: SubNavColumn[];
  ctas?: SubNavCta[];
}

const categories: SubNavCategory[] = [
  {
    label: "Prevention & Outreach",
    columns: [
      {
        heading: "Cancer Prevention",
        links: [
          { label: "Cancer Risk Factors", href: "/coming-soon" },
          { label: "Healthy Lifestyle Choices", href: "/coming-soon" },
          { label: "HPV & Hepatitis B Vaccines", href: "/coming-soon" },
          { label: "Tobacco Cessation Clinic", href: "/coming-soon" },
          { label: "Nutrition & Cancer", href: "/coming-soon" },
          { label: "Community Out reach programme", href: "/coming-soon" },
        ],
      },
      {
        heading: "Screening Programmes",
        links: [
          { label: "Breast Cancer Screening", href: "/cancer/breast-cancer" },
          {
            label: "Cervical Cancer Screening",
            href: "/cancer/cervical-cancer",
          },
          { label: "Oral Cancer Screening", href: "/cancer/head-neck-cancer" },
          {
            label: "Colorectal Cancer Screening",
            href: "/cancer/colorectal-cancer",
          },
          { label: "Other Check-up?", href: "/#appointment" },
        ],
      },
      {
        heading: "Community Outreach",
        links: [
          { label: "Community Outreach", href: "/#appointment" },
          { label: "Awareness Programmes", href: "/coming-soon", },
          { label: "Rural Cancer screening", href: "/coming-soon", },
          { label: "School & College camps", href: "/coming-soon", },
        ],
      },
    ],
    ctas: [
      { label: "Book a Screening", href: "/#appointment" },
      {
        label: "Upcoming Camps",
        href: "/coming-soon",
        desc: "Free screening and awareness events in your community.",
      },
    ],
  },
  {
    label: "Patients & Families",
    columns: [
      {
        heading: "When you first visit",
        links: [
          { label: "Why Cancer Institute (WIA)", href: "/#about" },
          { label: "Planning Your Visit", href: "/#appointment" },
          { label: "New Patient Services", href: "/coming-soon" },
          { label: "Follow-up Patient Care", href: "/coming-soon" },
          { label: "Insurance & Billing", href: "/coming-soon" },
          { label: "International Patients", href: "/coming-soon" },
          { label: "Second Opinion", href: "/second-opinion" },
        ],
      },
      {
        heading: "Diagnosis & Treatment",
        links: [
          { label: "Cancer Types", href: "/#cancer-types" },
          { label: "A New Diagnosis", href: "/coming-soon" },
          { label: "Patient Support", href: "/departments/surgical-oncology", },
        ],
      },
      {
        heading: "Family & Caregiver Support",
        links: [
          { label: "Caregiver Resources", href: "/coming-soon" },
          { label: "Children & Teens", href: "/coming-soon" },
          { label: "Taking Care of Yourself", href: "/coming-soon" },
          { label: "Palliative Care", href: "/coming-soon" },
          { label: "Patient Support", href: "/coming-soon" },
        ],
      },
      {
        heading: "Life After Cancer",
        links: [
          { label: "Follow-up Care", href: "/coming-soon" },
          { label: "Managing Long-Term Effects", href: "/coming-soon" },
          { label: "Survivorship Programme", href: "/coming-soon" },
        ],
      },
    ],
    ctas: [
      { label: "Request an Appointment", href: "/#appointment" },
      {
        label: "Current Patients",
        href: "/coming-soon",
        desc: "Information and resources for current and returning patients.",
      },
    ],
  },
  {
    label: "Departments",
    columns: [
      {
        heading: "Clinical Departments",
        links: [
          "surgical-oncology",
          "medical-oncology",
          "radiation-oncology",
          "gynaecological-oncology",
          "medical-gastroenterology",
          "palliative-medicine",
          "preventive-oncology",
          "patient-support",
          "physiotherapy",
          "pain-palliative",
          "nuclear-medicine-and-theranostics",
        ]
          .map((slug): SubNavLink | null => {
            const dept = departments.find((d) => d.slug === slug);
            if (!dept) return null;
            return {
              label: dept.navLabel || dept.title,
              href: dept.isComingSoon
                ? "/coming-soon"
                : dept.externalHref || `/departments/${dept.slug}`,
            };
          })
          .filter((link): link is SubNavLink => link !== null),
      },
      {
        heading: "Diagnostic Services",
        links: [
          "diagnostics-hub",
          "directory-of-services",
          "blood-centre",
          "clinical-biochemistry",
          "microbiology",
          "cancer-biology",
          "molecular-oncology",
          "oncopathology",
          "radiology",
          "nuclear-medicine-molecular-diag",
        ]
          .map((slug): SubNavLink | null => {
            const dept = departments.find((d) => d.slug === slug);
            if (!dept) return null;
            return {
              label: dept.navLabel || dept.title,
              href: dept.isComingSoon
                ? "/coming-soon"
                : dept.externalHref || `/departments/${dept.slug}`,
              ...(dept.subLinks && { subLinks: dept.subLinks }),
            };
          })
          .filter((link): link is SubNavLink => link !== null),
      },
      {
        heading: "Support Services",
        links: [
          "anaesthesia-pain",
          "quality-control",
          "dietetics",
          "physiotherapy",
          "biomedical-engineering",
          "pharmacy",
        ]
          .map((slug): SubNavLink | null => {
            const dept = departments.find((d) => d.slug === slug);
            if (!dept) return null;
            return {
              label: dept.navLabel || dept.title,
              href: dept.isComingSoon
                ? "/coming-soon"
                : dept.externalHref || `/departments/${dept.slug}`,
            };
          })
          .filter((link): link is SubNavLink => link !== null),
      },
    ],
    ctas: [{ label: "Find a Doctor", href: "/#doctors" }],
  },
  {
    label: "Research",
    columns: [
      {
        heading: "Research",
        links: [
          {
            label: "Research Overview",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          {
            label: "Clinical Trials",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          {
            label: "Molecular Oncology",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          {
            label: "Publications",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
        ],
      },
      {
        heading: "Cancer Registry",
        links: [
          {
            label: "Chennai Cancer Registry",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          {
            label: "Population Data",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          {
            label: "International Collaborations",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
        ],
      },
    ],
    ctas: [
      {
        label: "Research Portal",
        href: "https://ci-wia-research-pages.vercel.app/research",
        external: true,
        desc: "Explore our publications, trials, and ongoing studies.",
      },
    ],
  },
  {
    label: "Academics",
    columns: [
      {
        heading: "Academic Programmes",
        links: [
          { label: "UG/PG", href: "/coming-soon" },
          { label: "Fellowships", href: "https://ci-wia-research-pages.vercel.app/research", external: true },
          { label: "Internships", href: "/coming-soon" },
        ],
      },
      {
        heading: "Continuing Education",
        links: [
          { label: "Workshops", href: "/coming-soon" },
          { label: "CME", href: "/coming-soon" },
        ],
      },
    ],
    ctas: [
      { label: "Admissions", href: "/coming-soon", blinking: true },
    ],
  },
  {
    label: "Donation",
    columns: [
      {
        heading: "Ways to Give",
        links: [
          { label: "Donate Online", href: "/#donate" },
          { label: "Sponsor a Patient", href: "/#donate" },
          { label: "Corporate Partnerships", href: "/#donate" },
          { label: "Legacy Giving", href: "/#donate" },
          { label: "Hospice Bed Sponsorship", href: "/#donate" },
        ],
      },
      {
        heading: "Donation Programmes",
        links: [
          { label: "Blood Donation", href: "/#donate" },
          { label: "Bone Marrow Donation (subject to confirmation)", href: "/blood-bank" },
          { label: "Patient Support Funds", href: "/coming-soon" },
          { label: "Treatment Sponsorship", href: "/coming-soon" },
          { label: "Equipment & Infrastructure Support", href: "/coming-soon" },
        ],
      },
      {
        heading: "Cancer Awareness & Prevention",
        links: [
          { label: "Free Screening Camps", href: "/#donate" },
          { label: "Awareness Campaigns", href: "/coming-soon" },
          { label: "Rural Outreach Programmes", href: "/coming-soon" },
          { label: "School & College Initiatives", href: "/coming-soon" },
        ],
      },
    ],
  },
];

export default function SubNav() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveIndex(null), 400);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      className={styles.root}
      aria-label="Section navigation"
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }}
    >
      <div className={styles.bar}>
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className={`${styles.item}${activeIndex === i ? ` ${styles.itemActive}` : ""}`}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={activeIndex === i}
              aria-haspopup="true"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <span>{cat.label}</span>
              <svg
                className={styles.chevron}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Mega dropdown panels */}
      {categories.map((cat, i) => (
        <div
          key={cat.label}
          className={`${styles.megaPanel}${activeIndex === i ? ` ${styles.megaPanelOpen}` : ""}`}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          role="region"
          aria-label={`${cat.label} submenu`}
        >
          <div className={styles.megaInner}>
            <div className={styles.megaColumns}>
              {cat.columns.map((col) => (
                <div key={col.heading} className={styles.megaCol}>
                  <h6 className={styles.megaColHeading}>{col.heading}</h6>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <div className={styles.megaLinkWrapper}>
                          {link.external ? (
                            <a href={link.href} className={styles.megaLink}>
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className={styles.megaLink}
                              onClick={() => setActiveIndex(null)}
                            >
                              {link.label}
                            </Link>
                          )}
                        </div>
                        {link.subLinks && link.subLinks.length > 0 && (
                          <ul className={styles.megaSubLinks}>
                            {link.subLinks.map((sub) => (
                              <li key={sub.label}>
                                {sub.external ? (
                                  <a href={sub.href} className={styles.megaSubLink}>
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    href={sub.href}
                                    className={styles.megaSubLink}
                                    onClick={() => setActiveIndex(null)}
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {cat.ctas && cat.ctas.length > 0 && (
              <div className={styles.megaSidebar}>
                {cat.ctas.map((cta) => (
                  <div key={cta.label} className={styles.megaCta}>
                    {cta.external ? (
                      <a href={cta.href} className={styles.megaCtaLink}>
                        {cta.label}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={cta.href}
                        className={`${styles.megaCtaLink}${cta.blinking ? ` ${styles.blinker}` : ""}`}
                        onClick={() => setActiveIndex(null)}
                      >
                        {cta.label}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                    {cta.desc && (
                      <p className={styles.megaCtaDesc}>{cta.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Backdrop */}
      {activeIndex !== null && (
        <div
          className={styles.backdrop}
          onClick={() => setActiveIndex(null)}
          onMouseEnter={() => setActiveIndex(null)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./SubNav.module.css";

interface SubNavColumn {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

interface SubNavCta {
  label: string;
  href: string;
  desc?: string;
  external?: boolean;
}

interface SubNavCategory {
  label: string;
  columns: SubNavColumn[];
  ctas?: SubNavCta[];
}

const categories: SubNavCategory[] = [
  {
    label: "Patients & Family",
    columns: [
      {
        heading: "When you first visit",
        links: [
          { label: "Why Cancer Institute (WIA)", href: "/#about" },
          { label: "Planning Your Visit", href: "/#appointment" },
          { label: "New Patient Services", href: "" },
          { label: "Follow-up Patient Care", href: "" },
          { label: "Insurance & Billing", href: "" },
          { label: "International Patients", href: "/#" },
          { label: "Second Opinion", href: "/#appointment" },
        ],
      },
      {
        heading: "Diagnosis & Treatment",
        links: [
          { label: "Cancer Types", href: "/#cancer-types" },
          { label: "A New Diagnosis", href: "/#education" },
          { label: "Patient Support", href: "/departments/surgical-oncology", },
        ],
      },
      {
        heading: "Family & Caregiver Support",
        links: [
          { label: "Caregiver Resources", href: "/#education" },
          { label: "Children & Teens", href: "/#education" },
          { label: "Taking Care of Yourself", href: "/#education" },
          { label: "Palliative Care", href: "/#education" },
          { label: "Patient Support", href: "/#faq" },
        ],
      },
      {
        heading: "Life After Cancer",
        links: [
          { label: "Follow-up Care", href: "/#education" },
          { label: "Managing Long-Term Effects", href: "/#education" },
          { label: "Survivorship Programme", href: "/#education" },
        ],
      },
    ],
    ctas: [
      { label: "Request an Appointment", href: "/#appointment" },
      {
        label: "Current Patients",
        href: "/#faq",
        desc: "Information and resources for current and returning patients.",
      },
    ],
  },
  {
    label: "Prevention & Outreach",
    columns: [
      {
        heading: "Cancer Prevention",
        links: [
          { label: "Cancer Risk Factors", href: "/#education" },
          { label: "Healthy Lifestyle Choices", href: "/#education" },
          { label: "HPV & Hepatitis B Vaccines", href: "/#education" },
          { label: "Tobacco Cessation Clinic", href: "/#education" },
          { label: "Nutrition & Cancer", href: "/#education" },
          { label: "Community Out reach programme", href: "/#education" },
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
          { label: "Awareness Programmes", href: "/#events", },
          { label: "Rural Cancer screening", href: "/#events", },
          { label: "School & College camps", href: "/#events", },
        ],
      },
    ],
    ctas: [
      { label: "Book a Screening", href: "/#appointment" },
      {
        label: "Upcoming Camps",
        href: "/#events",
        desc: "Free screening and awareness events in your community.",
      },
    ],
  },
  {
    label: "Departments & Services",
    columns: [
      {
        heading: "Clinical Departments",
        links: [
          {
            label: "Surgical Oncology",
            href: "/departments/surgical-oncology",
          },
          { label: "Medical Oncology", href: "/departments/medical-oncology" },
          {
            label: "Radiation Oncology",
            href: "/departments/radiation-oncology",
          },
          {
            label: "Gynaecological Oncology",
            href: "/departments/gynaecological-oncology",
          },
          {
            label: "Medical Gastroenterology",
            href: "",
          },
          {
            label: "Palliative Medicine",
            href: "",
          },
          {
            label: "Preventive Oncology",
            href: "",
          },
        ],
      },
      {
        heading: "Diagnostic Services",
        links: [
          {
            label: "Clinical Biochemistry",
            href: "",
          },
          {
            label: "Microbiology",
            href: "",
          },
          {
            label: "Cytogenetics",
            href: "",
          },
          {
            label: "Cancer Biology & Molecular Diagnostics",
            href: "",
          },
          {
            label: "Molecular Oncology",
            href: "",
          },
          {
            label: "Onco-Pathology",
            href: "",
          },
          {
            label: "Radio Diagnosis and Imaging",
            href: "",
          },
          {
            label: "Nuclear Medicine",
            href: "",
          },
        ],
      },
      {
        heading: "Support Services",
        links: [
          { label: "Anaesthesia & Pain Management", href: "" },
          { label: "Blood Centre", href: "/#education" },
          { label: "Dietetics", href: "/#education" },
          { label: "Physiotherapy", href: "/#education" },
          { label: "Psycho-Oncology", href: "/#education" },
          { label: "Bio medical engineering", href: "/#education" },
          { label: "Pharmacy", href: "/#education" },
        ],
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
        ],
      },
      {
        heading: "ACADEMICS",
        links: [
          {
            label: "Fellowship Programmes",
            href: "https://ci-wia-research-pages.vercel.app/research",
            external: true,
          },
          { label: "Conferences & CME", href: "/#events" },
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
          { label: "Patient Support Funds", href: "/#events" },
          { label: "Treatment Sponsorship", href: "/#events" },
          { label: "Equipment & Infrastructure Support", href: "/#events" },
        ],
      },
      {
        heading: "Cancer Awareness & Prevention",
        links: [
          { label: "Free Screening Camps", href: "/#donate" },
          { label: "Awareness Campaigns", href: "/#events" },
          { label: "Rural Outreach Programmes", href: "/#events" },
          { label: "School & College Initiatives", href: "/#events" },
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
                        className={styles.megaCtaLink}
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

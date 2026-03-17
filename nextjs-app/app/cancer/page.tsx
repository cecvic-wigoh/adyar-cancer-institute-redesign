import Link from "next/link";
import Image from "next/image";
import { cancerCards } from "../page";

export const metadata = {
  title: "All Cancer Conditions | Cancer Institute (WIA)",
  description:
    "Explore all cancer types treated at Cancer Institute (WIA), Chennai — from breast and lung cancer to rare and complex diagnoses.",
};

export default function CancerConditionsPage() {
  return (
    <main id="main">
      <section className="cancer-types section" aria-labelledby="cancer-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Conditions We Treat</span>
            <h2 id="cancer-heading">All Cancer Conditions</h2>
            <p>
              We provide expert, compassionate care for all types of cancer —
              with specialists dedicated to every diagnosis.
            </p>
          </div>
          <div className="cancer-grid">
            {cancerCards.map((card) => (
              <Link
                href={`/cancer/${card.slug}`}
                className="cancer-card"
                key={card.slug}
                aria-label={`Learn about ${card.title} treatment`}
              >
                <div className="cancer-icon" aria-hidden="true">
                  <Image
                    src={`/cancer-icons/${card.slug}.png`}
                    alt=""
                    width={52}
                    height={52}
                  />
                </div>
                <div className="cancer-info">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
                <svg
                  className="cancer-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

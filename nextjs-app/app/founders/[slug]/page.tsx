import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { founders, getAllFounderSlugs, getFounderBySlug } from '@/data/founders';
import LifeImageSlideshow from '@/components/LifeImageSlideshow';
import type { Metadata } from 'next';
import styles from './founder.module.css';

export async function generateStaticParams() {
  return getAllFounderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const founder = getFounderBySlug(slug);
  if (!founder) return {};
  return {
    title: `${founder.name} | Cancer Institute (WIA)`,
    description: founder.metaDescription,
  };
}

export default async function FounderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const founder = getFounderBySlug(slug);
  if (!founder) notFound();

  const otherFounders = founders.filter((f) => f.slug !== slug);

  return (
    <main id="main">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={founder.portrait}
            alt={founder.name}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>{founder.role}</p>
          <h1 className={styles.heroName}>{founder.name}</h1>
          <p className={styles.heroTitle}>{founder.title}</p>
          <p className={styles.heroMeta}>{founder.years}</p>
          <blockquote className={styles.heroQuote}>{founder.heroQuote}</blockquote>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span>Founders</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span>{founder.name}</span>
        </div>
      </div>

      {/* Origin */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>{founder.originLabel}</p>
          <h2 className={styles.sectionTitle}>{founder.originTitle}</h2>
          <div className={styles.twoCol}>
            <div>
              {founder.originParagraphs.map((p, i) => (
                <p key={i} className={styles.bodyText}>{p}</p>
              ))}
            </div>
            <div>
              <blockquote className={styles.pullQuote}>
                <p className={styles.pullQuoteText}>{founder.pullQuote.text}</p>
                {founder.pullQuote.attribution && (
                  <cite className={styles.pullQuoteCite}>{founder.pullQuote.attribution}</cite>
                )}
              </blockquote>
              <p className={styles.aside}>{founder.originAside}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className={styles.darkBand}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>{founder.milestonesLabel}</p>
          <h2 className={styles.sectionTitle}>{founder.milestonesTitle}</h2>
          <div className={founder.lifeImages?.length ? styles.timelineWithImages : undefined}>
            <div className={styles.timeline}>
              {founder.timeline.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <p className={styles.timelineBody}>{item.description}</p>
                </div>
              ))}
            </div>
            {founder.lifeImages && founder.lifeImages.length > 0 && (
              <LifeImageSlideshow images={founder.lifeImages} />
            )}
          </div>
        </div>
      </section>

      {/* Institute contribution */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>{founder.instituteLabel}</p>
          <h2 className={styles.sectionTitle}>{founder.instituteTitle}</h2>
          <div className={styles.twoCol}>
            <div>
              {founder.instituteParagraphs.map((p, i) => (
                <p key={i} className={styles.bodyText}>{p}</p>
              ))}
            </div>
            <div className={styles.statsGrid}>
              {founder.instituteStats.map((stat, i) => (
                <div key={i} className={styles.statBlock}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Large quote */}
      <section className={styles.largeQuoteSection}>
        <div className={styles.largeQuoteInner}>
          <p className={styles.largeQuoteText}>{founder.largeQuote.text}</p>
          {founder.largeQuote.attribution && (
            <div className={styles.largeQuoteSource}>{founder.largeQuote.attribution}</div>
          )}
        </div>
      </section>

      {/* Personal */}
      <section className={styles.darkBand}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>{founder.personalLabel}</p>
          <h2 className={styles.sectionTitle}>{founder.personalTitle}</h2>
          <div className={founder.personalImage ? styles.personalWithImage : undefined}>
            <div className={styles.personalText}>
              {founder.personalParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {founder.personalImage && (
              <div className={styles.personalImageWrap}>
                <Image
                  src={founder.personalImage}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>{founder.honorsLabel}</p>
          <h2 className={styles.sectionTitle}>{founder.honorsTitle}</h2>
          <div className={styles.honorsGrid}>
            {founder.honors.map((honor, i) => (
              <div key={i} className={styles.honorCard}>
                <h3 className={styles.honorTitle}>{honor.title}</h3>
                <p className={styles.honorDesc}>{honor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={styles.closingSection}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>{founder.closingTitle}</h2>
          {founder.closingParagraphs.map((p, i) => (
            <p key={i} className={styles.closingBody}>{p}</p>
          ))}
          <div className={styles.closingDivider} />
          <p className={styles.closingQuoteText}>{founder.closingQuote}</p>
          <div className={styles.badge}>
            <span className={styles.badgeName}>Cancer Institute (WIA)</span>
            <span className={styles.badgeSub}>Adyar, Chennai &middot; Est. 1954</span>
          </div>
        </div>
      </section>

      {/* Other founders */}
      <section className={styles.otherFounders}>
        <div className={styles.container}>
          <h2 className={styles.otherFoundersTitle}>Meet Our Other Founders</h2>
          <div className={styles.otherFoundersGrid}>
            {otherFounders.map((f) => (
              <Link key={f.slug} href={`/founders/${f.slug}`} className={styles.otherFounderCard}>
                <div className={styles.otherFounderAvatar}>
                  <Image
                    src={f.portrait}
                    alt={f.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="72px"
                  />
                </div>
                <span className={styles.otherFounderName}>{f.name}</span>
                <span className={styles.otherFounderRole}>{f.role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

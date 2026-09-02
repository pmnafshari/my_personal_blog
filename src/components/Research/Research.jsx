import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { researchInterests, publications } from '../../data/research';
import { profile } from '../../data/profile';
import { Section } from '../UI/Section';
import styles from './Research.module.css';

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Research interests"
      lead="Where I want to keep working: models that read physical measurements, and evaluation honest enough to trust the answer."
    >
      <ul className={styles.interests}>
        {researchInterests.map((area) => (
          <li key={area.title} className={styles.interest} data-reveal="">
            <h3 className={styles.interestTitle}>{area.title}</h3>
            <p className={styles.interestText}>{area.description}</p>
          </li>
        ))}
      </ul>

      <div className={styles.pubs} data-reveal="">
        <div className={styles.pubsHead}>
          <h3 className={styles.pubsTitle}>Publications</h3>
          <a
            className={styles.scholar}
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GraduationCap size={15} aria-hidden="true" />
            Google Scholar
            <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
          </a>
        </div>

        <ol className={styles.pubList}>
          {publications.map((pub) => (
            <li key={pub.link}>
              <article className={styles.pub}>
                <p className={styles.pubMeta}>
                  <span className={styles.pubYear}>{pub.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pub.publisher}</span>
                </p>

                <h4 className={styles.pubTitle}>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                    <ArrowUpRight size={15} className={styles.arrow} aria-hidden="true" />
                  </a>
                </h4>

                <p className={styles.pubSummary}>{pub.summary}</p>
                <p className={styles.pubAuthors}>
                  {pub.authors} — <span className={styles.venue}>{pub.venue}</span>
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

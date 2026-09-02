import { about } from '../../data/profile';
import { Section } from '../UI/Section';
import styles from './About.module.css';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering AI for problems that resist easy answers"
      aside={
        <div className={styles.body}>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      }
    >
      <div className={styles.grid}>
        <ul className={styles.highlights} data-reveal="" aria-label="Focus areas">
          {about.highlights.map((h) => (
            <li key={h} className={styles.highlight}>
              <span className={styles.bullet} aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <dl className={styles.stats} data-reveal="">
          {about.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

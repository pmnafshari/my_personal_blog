import { education, experience, languages } from '../../data/experience';
import { Section } from '../UI/Section';
import styles from './Background.module.css';

function Entry({ title, subtitle, meta, detail, current }) {
  return (
    <li className={styles.entry} data-reveal="">
      <span className={`${styles.marker} ${current ? styles.markerCurrent : ''}`} aria-hidden="true" />
      <div className={styles.entryBody}>
        <div className={styles.entryHead}>
          <h4 className={styles.entryTitle}>{title}</h4>
          {meta && <span className={styles.entryMeta}>{meta}</span>}
        </div>
        {subtitle && <p className={styles.entrySubtitle}>{subtitle}</p>}
        {detail && <p className={styles.entryDetail}>{detail}</p>}
      </div>
    </li>
  );
}

export function Background() {
  return (
    <Section
      id="background"
      eyebrow="Background"
      title="Education & experience"
      lead="The short version. My CV has the rest."
    >
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Education</h3>
          <ul className={styles.timeline}>
            {education.map((item) => (
              <Entry
                key={item.degree}
                title={item.degree}
                subtitle={[item.institution, item.location].filter(Boolean).join(' · ')}
                meta={item.period}
                detail={item.focus ? `${item.focus}. ${item.detail}` : item.detail}
                current={item.current}
              />
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Experience</h3>
          <ul className={styles.timeline}>
            {experience.map((item) => (
              <Entry
                key={item.role}
                title={item.role}
                subtitle={[item.company, item.location].filter(Boolean).join(' · ')}
                meta={item.period}
                detail={item.detail}
              />
            ))}
          </ul>

          <h3 className={`${styles.columnTitle} ${styles.langTitle}`}>Languages</h3>
          <dl className={styles.languages} data-reveal="">
            {languages.map((lang) => (
              <div key={lang.name} className={styles.language}>
                <dt>{lang.name}</dt>
                <dd>{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

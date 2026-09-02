import styles from './Section.module.css';

/**
 * One page section: eyebrow label, heading, optional lead paragraph.
 * `aside` renders opposite the heading on desktop (used by About).
 */
export function Section({ id, eyebrow, title, lead, aside, children, className = '' }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${className}`}>
      <div className="container">
        <div className={styles.header} data-reveal="">
          <div className={styles.headingCol}>
            {eyebrow && (
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowMark} aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
          </div>
          {(lead || aside) && <div className={styles.lead}>{aside ?? <p>{lead}</p>}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

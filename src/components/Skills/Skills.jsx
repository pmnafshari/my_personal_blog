import { skillGroups } from '../../data/skills';
import { Section } from '../UI/Section';
import { TagList } from '../UI/Tag';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      lead="The languages, frameworks, and infrastructure I reach for — grouped by what they are actually for."
    >
      <ul className={styles.grid}>
        {skillGroups.map((group) => (
          <li key={group.title} className={styles.card} data-reveal="">
            <h3 className={styles.title}>{group.title}</h3>
            <p className={styles.note}>{group.note}</p>
            <TagList items={group.skills} label={`${group.title} skills`} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

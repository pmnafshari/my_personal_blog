import { ArrowUpRight, Github } from 'lucide-react';
import { TagList } from '../UI/Tag';
import { ProjectImage } from './ProjectImage';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }) {
  const { title, category, description, technologies, github, demo, demoLabel } = project;
  const headingId = `project-${project.id}`;

  return (
    <article className={styles.card} aria-labelledby={headingId} data-reveal="">
      <ProjectImage project={project} className={styles.media} />

      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <h3 id={headingId} className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>{description}</p>

        <TagList items={technologies} label={`${title} technologies`} />

        {(github || demo) && (
          <div className={styles.links}>
            {github && (
              <a
                className={styles.link}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
              >
                <Github size={15} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
              </a>
            )}
            {demo && (
              <a
                className={styles.link}
                href={demo}
                {...(demo.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={`${demoLabel || 'Live demo'} — ${title}`}
              >
                {demoLabel || 'Live Demo'}
                <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

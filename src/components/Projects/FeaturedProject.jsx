import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '../UI/Button';
import { TagList } from '../UI/Tag';
import { ProjectImage } from './ProjectImage';
import styles from './FeaturedProject.module.css';

export function FeaturedProject({ project }) {
  const { title, tagline, period, description, problem, approach, results, technologies } = project;

  return (
    <article className={styles.card} aria-labelledby="featured-heading" data-reveal="">
      <ProjectImage project={project} priority className={styles.media} />

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.badge}>Featured project</span>
          {tagline && <span className={styles.tagline}>{tagline}</span>}
          <span className={styles.period}>{period}</span>
        </div>

        <h3 id="featured-heading" className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>{description}</p>

        <dl className={styles.notes}>
          <div>
            <dt>Problem</dt>
            <dd>{problem}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{approach}</dd>
          </div>
          <div>
            <dt>Results</dt>
            <dd>{results}</dd>
          </div>
        </dl>

        <TagList items={technologies} tone="accent" label={`${title} technologies`} />

        <div className={styles.actions}>
          {project.demo && (
            <Button href={project.demo} icon={ArrowUpRight}>
              {project.demoLabel || 'View project'}
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant="secondary" icon={Github} iconRight={false}>
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

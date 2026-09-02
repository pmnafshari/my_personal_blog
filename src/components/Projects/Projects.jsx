import { ArrowRight } from 'lucide-react';
import { featuredProject, homeProjects, projects } from '../../data/projects';
import { Section } from '../UI/Section';
import { Button } from '../UI/Button';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Selected projects"
      lead="A selection of AI, software engineering, and research work — from thesis experiments to systems that run every day."
    >
      <FeaturedProject project={featuredProject} />

      <ul className={styles.grid}>
        {homeProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <div className={styles.more} data-reveal="">
        <p className={styles.moreText}>
          {projects.length} projects in total, including data engineering, retrieval, and
          computer&nbsp;vision work.
        </p>
        <Button to="/projects" variant="secondary" icon={ArrowRight}>
          View all projects
        </Button>
      </div>
    </Section>
  );
}

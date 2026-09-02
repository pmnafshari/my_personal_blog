import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import { ProjectImage } from '../components/Projects/ProjectImage';
import { TagList } from '../components/UI/Tag';
import { useReveal } from '../hooks/useReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  useDocumentMeta({
    title: 'Projects — Peyman Afshari',
    description:
      'AI, computer vision, data engineering, and software projects by Peyman Afshari — from deep learning research on medical imaging to production data pipelines.',
    path: '/projects',
  });

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  useReveal([filter]);

  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            All work
          </p>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.lead}>
            Every project, with the problem it started from and what came out of it. {projects.length}{' '}
            in total, across AI systems, computer vision, data engineering, and software.
          </p>
        </header>

        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                className={`${styles.filter} ${isActive ? styles.filterActive : ''}`}
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className={styles.count} role="status">
          Showing {visible.length} of {projects.length} projects
        </p>

        <ol className={styles.list}>
          {visible.map((project) => (
            <li key={project.id}>
              <article className={styles.entry} data-reveal="">
                <ProjectImage project={project} className={styles.media} />

                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    {project.period && <span className={styles.period}>{project.period}</span>}
                  </div>

                  <h2 className={styles.entryTitle}>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>

                  {(project.problem || project.approach || project.results) && (
                    <dl className={styles.notes}>
                      {project.problem && (
                        <div>
                          <dt>Problem</dt>
                          <dd>{project.problem}</dd>
                        </div>
                      )}
                      {project.approach && (
                        <div>
                          <dt>Approach</dt>
                          <dd>{project.approach}</dd>
                        </div>
                      )}
                      {project.results && (
                        <div>
                          <dt>Results</dt>
                          <dd>{project.results}</dd>
                        </div>
                      )}
                    </dl>
                  )}

                  <TagList
                    items={project.technologies}
                    label={`${project.title} technologies`}
                  />

                  {(project.github || project.demo) && (
                    <div className={styles.links}>
                      {project.github && (
                        <a
                          className={styles.link}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <Github size={15} aria-hidden="true" />
                          GitHub
                          <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          className={styles.link}
                          href={project.demo}
                          {...(project.demo.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          aria-label={`${project.demoLabel || 'Live demo'} — ${project.title}`}
                        >
                          {project.demoLabel || 'Live Demo'}
                          <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

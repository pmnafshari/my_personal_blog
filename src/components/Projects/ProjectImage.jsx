import styles from './ProjectImage.module.css';

/**
 * `figure` images are matplotlib output on a white ground. Mounting them on a
 * light plate keeps the data honest (no inverting the colormap) and reads as a
 * research figure rather than a dark-mode bug.
 */
export function ProjectImage({ project, priority = false, className = '' }) {
  return (
    <div className={`${styles.frame} ${project.figure ? styles.plate : ''} ${className}`}>
      <img
        className={styles.img}
        src={project.image}
        alt={project.imageAlt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width="1600"
        height="900"
      />
    </div>
  );
}

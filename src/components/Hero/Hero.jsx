import { ArrowRight, Download, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../UI/Button';
import { SocialLinks } from '../UI/SocialLinks';
import { NeuralGraph } from '../UI/NeuralGraph';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.aura} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability}
          </p>

          <p className={styles.eyebrow}>{profile.role}</p>

          <h1 id="hero-heading" className={styles.heading}>
            {profile.headline.map((line, i) => (
              <span key={line} className={styles.headingLine} style={{ '--i': i }}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.lead}>{profile.intro}</p>

          <div className={styles.actions}>
            <Button href="#projects" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            {profile.cv && (
              <Button href={profile.cv} variant="ghost" icon={Download} iconRight={false} download>
                Download CV
              </Button>
            )}
          </div>

          <div className={styles.meta}>
            <p className={styles.location}>
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </p>
            <SocialLinks />
          </div>
        </div>

        <div className={styles.visual}>
          <NeuralGraph />
        </div>
      </div>
    </section>
  );
}

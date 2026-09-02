import { Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../UI/Button';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className="container">
        <div className={styles.panel} data-reveal="">
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <p className={styles.eyebrow}>Contact</p>

            <h2 id="contact-heading" className={styles.title}>
              Let&rsquo;s build something intelligent.
            </h2>

            <p className={styles.lead}>
              Interested in AI research, a collaboration, or a role where the modelling matters?
              I read everything that lands in my inbox.
            </p>

            <div className={styles.actions}>
              <Button href={`mailto:${profile.email}`} icon={Mail} iconRight={false}>
                Email me
              </Button>
              <Button href={profile.linkedin} variant="secondary" icon={Linkedin} iconRight={false}>
                LinkedIn
              </Button>
            </div>

            <dl className={styles.details}>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                  <a href={`mailto:${profile.emailAlt}`}>{profile.emailAlt}</a>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

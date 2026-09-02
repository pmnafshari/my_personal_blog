import { profile } from '../../data/profile';
import { SocialLinks } from '../UI/SocialLinks';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p className={styles.built}>Built with React &amp; Vite · Designed with purpose</p>
        </div>

        <SocialLinks size={17} />
      </div>
    </footer>
  );
}

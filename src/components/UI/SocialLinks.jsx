import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { profile } from '../../data/profile';
import styles from './SocialLinks.module.css';

const links = [
  { key: 'github', href: profile.github, label: 'GitHub', Icon: Github },
  { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { key: 'scholar', href: profile.scholar, label: 'Google Scholar', Icon: GraduationCap },
  { key: 'email', href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
];

export function SocialLinks({ size = 19, className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {links.map(({ key, href, label, Icon }) => {
        const external = href.startsWith('http');
        return (
          <li key={key}>
            <a
              className={styles.link}
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={size} aria-hidden="true" />
              <span className={styles.tooltip} role="tooltip" aria-hidden="true">
                {label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

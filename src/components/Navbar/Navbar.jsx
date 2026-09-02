import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useScrolled } from '../../hooks/useScrolled';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const NAV_IDS = ['about', 'skills', 'projects', 'research', 'background', 'contact'];
const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const scrolled = useScrolled();
  const active = useScrollSpy(NAV_IDS);
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and wire Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const linkFor = (id) => (isHome ? `#${id}` : `/#${id}`);

  const renderLink = (item, onClick) => {
    const isActive = isHome && active === item.id;
    const props = {
      className: `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`,
      onClick,
      ...(isActive ? { 'aria-current': 'true' } : {}),
    };

    return isHome ? (
      <a href={linkFor(item.id)} {...props}>
        {item.label}
      </a>
    ) : (
      <Link to={linkFor(item.id)} {...props}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${profile.name} — home`}>
          <span className={styles.mark} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{profile.name}</span>
            <span className={styles.brandRole}>AI &amp; Computer Engineer</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <span key={item.id}>{renderLink(item)}</span>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.ghLink}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <span key={item.id} className={styles.mobileItem}>
              {renderLink(item, () => setOpen(false))}
            </span>
          ))}
          <a
            className={styles.mobileGh}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Github size={17} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

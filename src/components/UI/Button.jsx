import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Renders as <a>, <Link>, or <button> depending on the props given.
 * `variant`: primary | secondary | ghost
 */
export function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight = true,
  children,
  className = '',
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  const inner = (
    <>
      {Icon && !iconRight && <Icon className={styles.icon} size={17} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && <Icon className={styles.iconRight} size={17} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  const Tag = as || 'button';
  return (
    <Tag className={cls} {...rest}>
      {inner}
    </Tag>
  );
}

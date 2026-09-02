import styles from './Tag.module.css';

export function Tag({ children, tone = 'default' }) {
  return <li className={`${styles.tag} ${styles[tone]}`}>{children}</li>;
}

export function TagList({ items, tone, label }) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </ul>
  );
}

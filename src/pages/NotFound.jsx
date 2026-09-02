import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import styles from './NotFound.module.css';

export function NotFound() {
  useDocumentMeta({
    title: 'Page not found — Peyman Afshari',
    description: 'The page you were looking for does not exist.',
    path: '/',
  });

  return (
    <div className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page doesn&rsquo;t exist.</h1>
        <p className={styles.lead}>
          The link may be out of date. Everything else is one click away.
        </p>
        <Button to="/" icon={ArrowLeft} iconRight={false}>
          Back to home
        </Button>
      </div>
    </div>
  );
}

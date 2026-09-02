import { useEffect } from 'react';

const REDUCED = '(prefers-reduced-motion: reduce)';

/**
 * Reveals every [data-reveal] element once as it enters the viewport.
 * One observer for the whole page rather than one per component.
 * Under prefers-reduced-motion the elements are marked shown immediately.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal=""]');
    if (!nodes.length) return;

    if (window.matchMedia(REDUCED).matches || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.setAttribute('data-reveal', 'shown'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-reveal', 'shown');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

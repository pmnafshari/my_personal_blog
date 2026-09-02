import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently occupying the reading position.
 * Uses scroll position rather than IntersectionObserver so that short
 * sections at the end of the page can still become active.
 */
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState('');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.scrollY + offset;
      // Empty until the first section reaches the reading line, so no nav item
      // is highlighted while the hero still fills the screen.
      let current = '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }

      // Pin the last section once the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}

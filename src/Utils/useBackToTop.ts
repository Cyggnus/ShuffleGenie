import { useCallback, useEffect, useState } from 'react';

export function showBackToTopButton(): boolean {
  const [buttonBackToTop, setButtonBackToTop] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const { scrollY: scrollPosition } = window;

    if (scrollPosition > 900) {
      setButtonBackToTop(true);
    } else {
      setButtonBackToTop(false);
    }
  }, [buttonBackToTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [buttonBackToTop]);

  return buttonBackToTop;
}

export function backToTopAction(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

import { useScroll, useTransform } from 'framer-motion';

export function useHeaderScroll() {
  const { scrollY } = useScroll();
  
  const logoFilter = useTransform(
    scrollY,
    [0, 100],
    ['invert(1)', 'invert(0)']
  );

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(16, 24, 39, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  return { logoFilter, headerBackground, headerShadow };
}
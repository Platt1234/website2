import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useInViewAnimation(threshold = 0.2) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}
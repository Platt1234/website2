import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeaderCTA() {
  const { scrollY } = useScroll();
  const buttonBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.1)', 'rgb(16, 24, 39)']
  );
  
  const buttonHoverBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.2)', 'rgb(12, 18, 25)']
  );

  return (
    <motion.div
      className="hidden md:block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button 
        className="text-white px-6 py-2 rounded-md transition-shadow shadow-sm hover:shadow-md backdrop-blur-sm"
        style={{ 
          backgroundColor: buttonBackground,
        }}
        whileHover={{ 
          backgroundColor: buttonHoverBackground 
        }}
      >
        Schedule Consultation
      </motion.button>
    </motion.div>
  );
}
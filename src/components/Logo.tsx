import React from 'react';
import { motion } from 'framer-motion';
import { useHeaderScroll } from '../hooks/useHeaderScroll';

export function Logo() {
  const { logoFilter } = useHeaderScroll();

  return (
    <motion.a
      href="#"
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[180px] sm:w-[250px] h-[54px] sm:h-[75px]">
        <motion.img
          src="https://imgur.com/vdwqtPJ.png"
          alt="Platteneye Capital Logo"
          className="w-full h-full object-contain"
          style={{ 
            filter: logoFilter,
            willChange: 'filter'
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.a>
  );
}
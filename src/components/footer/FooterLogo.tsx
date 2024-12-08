import React from 'react';
import { motion } from 'framer-motion';

export function FooterLogo() {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[250px] h-[75px]">
        <img
          src="https://imgur.com/vdwqtPJ.png"
          alt="Platteneye Capital Logo"
          className="w-full h-full object-contain"
          style={{ 
            filter: 'invert(1) brightness(100%)',
          }}
        />
      </div>
    </motion.div>
  );
}
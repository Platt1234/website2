import React from 'react';
import { motion } from 'framer-motion';
import { HeroButtons } from './HeroButtons';

export function HeroContent() {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full">
      <div className="flex flex-col justify-center h-full pt-20">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white max-w-xl pl-0 sm:pl-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming Business Through Strategic M&A
        </motion.h1>
        
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-300 max-w-lg pl-0 sm:pl-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Platteneye Capital specializes in mergers and acquisitions advisory, helping businesses 
          navigate complex transactions and achieve their strategic goals through data-driven 
          insights and expert guidance.
        </motion.p>

        <HeroButtons />
      </div>
    </div>
  );
}
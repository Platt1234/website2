import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = ['HOME', 'SERVICES', 'ABOUT', 'CONTACT'];

export const HeaderNav = memo(function HeaderNav() {
  const { scrollY } = useScroll();
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 255, 255)', 'rgb(55, 65, 81)']
  );

  return (
    <nav className="hidden md:flex space-x-12">
      {navItems.map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm tracking-widest hover:text-primary-600 transition-colors relative group"
          style={{ color: textColor }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"
            initial={false}
            whileHover={{ width: '100%' }}
          />
        </motion.a>
      ))}
    </nav>
  );
});
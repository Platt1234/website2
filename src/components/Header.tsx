import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { HeaderNav } from './header/HeaderNav';
import { HeaderCTA } from './header/HeaderCTA';
import { MobileMenu } from './header/MobileMenu';
import { HeaderBackground } from './header/HeaderBackground';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed w-full z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <motion.header
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderBackground />
        <div className="relative px-3 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Logo />
            <HeaderNav />
            <div className="flex items-center space-x-4">
              <HeaderCTA />
              <MobileMenu 
                isOpen={isMenuOpen} 
                onToggle={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </div>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
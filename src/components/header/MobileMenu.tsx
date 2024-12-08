import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const { scrollY } = useScroll();
  const iconColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 255, 255)', 'rgb(16, 24, 39)']
  );

  const navItems = ['HOME', 'SERVICES', 'ABOUT', 'CONTACT'];

  return (
    <>
      <motion.button 
        onClick={onToggle}
        className="md:hidden p-2 -mr-2"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{ color: iconColor }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg md:hidden mx-2 sm:mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm tracking-widest"
                  whileHover={{ x: 10 }}
                  onClick={onToggle}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-3 bg-primary-600 text-white px-6 py-2.5 rounded-lg text-sm tracking-widest"
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE CONSULTATION
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
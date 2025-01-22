import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-serif font-semibold text-amber-700">
                Vastu Purushaye
              </span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            <nav className="flex-1 px-4 py-8">
              <motion.div
                className="space-y-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {}
                }}
              >
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/solutions', label: 'Solutions' },
                  // { href: '/blogs', label: 'Blogs' },
                  { href: '/contact', label: 'Contact' }
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <a
                      href={link.href}
                      className="block text-xl text-gray-800 hover:text-amber-600 transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
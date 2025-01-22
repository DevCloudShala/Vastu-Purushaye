import React, { useState, useEffect } from 'react';
import { Menu, Home, MessageCircle } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MobileMenu from './navigation/MobileMenu';
import SearchBar from './navigation/SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const whatsappNumber = "919520457941";
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  const handleSend = () => {
  
      // Open WhatsApp with the entered message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${"Hello, I would like to get in touch with you."}`,
        "_blank"
      );

  };
  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: 0,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed w-full top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Home className="h-6 w-6 text-amber-700" />
              <span className="text-xl font-serif font-semibold text-amber-700">
              <motion.a
                  href={"/"}>
                  Vastu Purushaye
                  </motion.a>
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/solutions', label: 'Solutions' },
                // { href: '/blog', label: 'Blogs' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // onClick={() => setIsSearchOpen(true)}
                onClick={handleSend}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <MessageCircle className="h-5 w-5 text-gray-600" />
              </motion.button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;
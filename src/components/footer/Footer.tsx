import React from 'react';
import { Home } from 'lucide-react';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-serif font-semibold text-amber-500">
                Vastu Purushaye
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transform your living spaces with the ancient wisdom of Vastu Shastra. 
              Create harmony, prosperity, and positive energy in your surroundings.
            </p>
            <SocialLinks />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            <FooterLinks />
            {/* <Newsletter /> */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vastu Purushaye. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {/* <a href="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-amber-400 transition-colors">
                Sitemap
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
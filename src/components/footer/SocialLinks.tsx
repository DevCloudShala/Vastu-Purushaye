import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-amber-400 transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
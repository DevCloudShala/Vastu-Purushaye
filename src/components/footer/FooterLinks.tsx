import React from 'react';

type LinkSection = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const linkSections: LinkSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Home Consultation', href: '/' },
      { label: 'Office Planning', href: '/office-vastu' },
      { label: 'Plot Analysis', href: '/contact' },
      { label: 'Remedial Solutions', href: '/energy-balance' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Vastu Tips', href: '/tips' },
      { label: 'commercial vastu', href: '/commercial-vastu' },
      { label: 'FAQs', href: '/faqs' },
      // { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {linkSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
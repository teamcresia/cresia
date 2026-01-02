import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter text-white font-serif">
            CRESIA<span className="text-neutral-600">.</span>
          </span>
          <p className="text-neutral-600 text-xs mt-1">
            © 2024 Cresia Systems. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/cresia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/cresia-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-neutral-500 hover:text-white transition-colors text-sm"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

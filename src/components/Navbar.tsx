import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Active section detection
      const sections = ['home', 'about', 'resume', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#resume', id: 'resume' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`} aria-label="Main navigation">
      <div className={`mx-auto px-6 transition-all duration-300 ${scrolled ? 'container' : 'container'}`}>
        <div className={`
          flex justify-between items-center rounded-2xl px-6 py-3 transition-all duration-300
          ${scrolled
            ? 'bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/20'
            : 'bg-transparent'}
        `}>
          <a
            href="#"
            aria-label="QuocHao - Go to homepage"
            className="text-2xl font-bold font-sans tracking-tight text-white group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
          >
            Quoc<span className="text-rose-500 group-hover:text-rose-400 transition-colors duration-300">Hao</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={`Navigate to ${link.name}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group overflow-hidden rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900
                  ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#contact"
              aria-label="Hire me - Navigate to contact section"
              className="ml-4 px-6 py-2.5 bg-rose-600 text-white text-sm font-semibold rounded-full hover:bg-rose-500 transition-all shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={`Navigate to ${link.name}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  className={`text-lg font-medium p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500
                     ${activeSection === link.id ? 'text-rose-500 bg-white/5' : 'text-gray-300 hover:text-rose-500 hover:bg-white/5'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

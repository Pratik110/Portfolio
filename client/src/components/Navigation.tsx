import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ onLogoClick }: { onLogoClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#score-hub', label: 'Challenges' },
    { href: '#architecture-flow', label: 'Architecture' },
    { href: '#data-bot', label: 'Data Bot' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 neon-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 
              className="text-xl font-bold neon-title cursor-pointer tracking-wide"
              onClick={() => {
                onLogoClick?.();
                scrollToSection('#hero');
              }}
              data-testid="nav-logo"
            >
              <span className="text-slate-100">Pratik</span> <span className="text-blue-200">Patra</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in ${
                    activeSection === item.href.substring(1)
                      ? 'text-slate-100 bg-slate-700/50 border border-blue-200/40'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-700/40 hover:border hover:border-slate-400/40'
                  }`}
                  data-testid={`nav-link-${item.href.substring(1)}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-slate-100"
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f141c]/95 border-b border-slate-400/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-full text-base font-medium w-full text-left transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-slate-100 bg-slate-700/50 border border-blue-200/40'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-700/40'
                }`}
                data-testid={`mobile-nav-link-${item.href.substring(1)}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

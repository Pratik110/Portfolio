import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Portfolio = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen text-slate-900">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-transparent border-t border-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600" data-testid="footer-text">
              © {currentYear} Pratik Patra. Built for clean data, reliable pipelines, and scalable systems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

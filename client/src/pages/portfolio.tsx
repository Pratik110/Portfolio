import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400" data-testid="footer-text">
              © 2025 Pratik Patra. Crafted with passion for data engineering excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

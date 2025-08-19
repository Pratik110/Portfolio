import React from 'react';
import { Briefcase, Mail, ChevronDown } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

const Hero = () => {
  const { personalInfo } = resumeData;

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
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-name">
            <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-secondary-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 animate-slide-up" data-testid="hero-title">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-description">
            Passionate about transforming complex data challenges into scalable solutions. Specialized in AWS cloud architectures, 
            ETL pipelines, and modernizing legacy systems with 5+ years of enterprise experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => scrollToSection('#experience')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              data-testid="button-view-work"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 text-gray-400" data-testid="hero-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

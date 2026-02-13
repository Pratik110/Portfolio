import React from 'react';
import { Briefcase, Mail, ChevronDown } from 'lucide-react';
import { SiDatabricks, SiApachekafka, SiSnowflake } from 'react-icons/si';
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center space-stars">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.10),transparent_25%)]"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 neon-text" data-testid="hero-name">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8 animate-slide-up" data-testid="hero-title">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-description">
            Data Engineer specializing in AWS and Big Data, with expertise in Spark, Snowflake, and Python-based ETL automation. Experienced in cloud migrations, cost optimization, and CI/CD integration for production-ready data platforms.
          </p>
          <div className="flex items-center justify-center gap-5 mb-12 text-2xl text-slate-500">
            <SiDatabricks className="animate-float" />
            <SiApachekafka className="animate-float [animation-delay:300ms]" />
            <SiSnowflake className="animate-float [animation-delay:600ms]" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => scrollToSection('#experience')}
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-700 text-slate-50 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-view-work"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 border border-slate-400 text-slate-700 hover:bg-slate-200 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 text-slate-500" data-testid="hero-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

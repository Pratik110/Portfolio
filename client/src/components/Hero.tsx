import React from 'react';
import { Briefcase, Mail, ChevronDown, Download } from 'lucide-react';
import { resumeData } from '@/data/resumeData';
import resumePdf from '@assets/Resume_Pratik_Patra.pdf';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100" data-testid="hero-name">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8 animate-slide-up tracking-wide" data-testid="hero-title">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-description">
            Data Engineer specializing in AWS and Big Data, with expertise in Spark, Snowflake, and Python-based ETL automation. Experienced in cloud migrations, cost optimization, and CI/CD integration for production-ready data platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => scrollToSection('#experience')}
              className="inline-flex items-center px-8 py-4 bg-slate-200 hover:bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-view-work"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-200 hover:bg-slate-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
            <a
              href={resumePdf}
              download="Pratik_Patra_Resume.pdf"
              className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-200 hover:bg-slate-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 text-slate-400" data-testid="hero-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center neon-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_18%_72%,rgba(217,70,239,0.18),transparent_30%)]"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 w-full text-center">
        <div className="animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-title leading-[0.95]" data-testid="hero-name">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-cyan-100/90 mb-8 animate-slide-up tracking-wide" data-testid="hero-title">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl neon-subtitle mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-description">
              Data Engineer specializing in AWS and Big Data, with expertise in Spark, Snowflake, and Python-based ETL automation. Experienced in cloud migrations, cost optimization, and CI/CD integration for production-ready data platforms.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="neon-card rounded-2xl p-6 text-left">
                <p className="text-sm text-cyan-100/70 mb-2">Focus</p>
                <p className="text-cyan-50 text-lg">Cloud data pipelines, platform migration, and production-scale ETL orchestration.</p>
              </div>
              <div className="neon-card rounded-2xl p-6 text-left">
                <p className="text-sm text-cyan-100/70 mb-3">Quick Snapshot</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="neon-panel rounded-lg p-3">
                    <p className="text-cyan-100/70">Experience</p>
                    <p className="text-cyan-50 font-semibold">6+ Years</p>
                  </div>
                  <div className="neon-panel rounded-lg p-3">
                    <p className="text-cyan-100/70">Domains</p>
                    <p className="text-cyan-50 font-semibold">Healthcare, Finance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button
                onClick={() => scrollToSection('#experience')}
                className="inline-flex items-center px-8 py-4 neon-button-primary rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-view-work"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-8 py-4 neon-button-secondary rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-contact"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
              <a
                href={resumePdf}
                download="Pratik_Patra_Resume.pdf"
                className="inline-flex items-center px-8 py-4 neon-button-secondary rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-download-resume"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 neon-icon" data-testid="hero-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

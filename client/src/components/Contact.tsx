import React, { useEffect, useRef } from 'react';
import { Phone, Send } from 'lucide-react';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { resumeData } from '@/data/resumeData';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { personalInfo } = resumeData;

  return (
    <section id="contact" className="py-20 neon-section" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 neon-title animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="contact-title"
          >
            Let's Connect
          </h2>
          <p 
            className="text-xl neon-subtitle max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="contact-subtitle"
          >
            Ready to discuss your next data engineering project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div 
            className="animate-on-scroll neon-card rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-phone"
          >
            <Phone className="w-8 h-8 neon-icon mb-4 mx-auto animate-glow" />
            <h3 className="text-lg font-bold text-cyan-50 mb-2">Phone</h3>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="neon-link transition-colors duration-300"
              data-testid="phone-link"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div 
            className="animate-on-scroll neon-card rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-email"
          >
            <SiGmail className="w-8 h-8 neon-icon mb-4 mx-auto animate-glow" />
            <h3 className="text-lg font-bold text-cyan-50 mb-2">Email</h3>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="neon-link transition-colors duration-300"
              data-testid="email-link"
            >
              {personalInfo.email}
            </a>
          </div>

          <div 
            className="animate-on-scroll neon-card rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-linkedin"
          >
            <SiLinkedin className="w-8 h-8 neon-icon mb-4 mx-auto animate-glow" />
            <h3 className="text-lg font-bold text-cyan-50 mb-2">LinkedIn</h3>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-link transition-colors duration-300"
              data-testid="linkedin-link"
            >
              Connect with me
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-8 py-4 neon-button-primary rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-send-email"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Email
          </a>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 neon-button-secondary rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-github"
          >
            <SiGithub className="w-5 h-5 mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

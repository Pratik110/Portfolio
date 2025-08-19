import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="contact-title"
          >
            Let's Connect
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="contact-subtitle"
          >
            Ready to discuss your next data engineering project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div 
            className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 shadow-xl border border-slate-600 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-phone"
          >
            <Phone className="w-8 h-8 text-primary-500 mb-4 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              data-testid="phone-link"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div 
            className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 shadow-xl border border-slate-600 hover:border-secondary-500 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-email"
          >
            <Mail className="w-8 h-8 text-secondary-500 mb-4 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-300 hover:text-secondary-400 transition-colors duration-300"
              data-testid="email-link"
            >
              {personalInfo.email}
            </a>
          </div>

          <div 
            className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 shadow-xl border border-slate-600 hover:border-accent-purple transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
            }}
            data-testid="contact-linkedin"
          >
            <Linkedin className="w-8 h-8 text-accent-purple mb-4 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="linkedin-link"
            >
              Connect with me
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            data-testid="button-send-email"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Email
          </a>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-github"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

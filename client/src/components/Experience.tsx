import React, { useEffect, useRef } from 'react';
import {
  Users, Cloud, ServerCog, Database, Rocket, BarChart,
  Lightbulb, Shield, Code, Presentation,
  ArrowUpDown, Lock, Handshake, Plus, Table,
  Gauge, CheckCircle, UserCog, NetworkIcon, Heart,
  FileHeart, Zap, Building2
} from 'lucide-react';
import { SiApachekafka } from 'react-icons/si';
import { resumeData } from '@/data/resumeData';

const Experience = () => {
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

  const getProjectIcon = (projectId: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'capital-markets': <BarChart className="w-5 h-5 mr-2" />,
      'healthcare-migration': <Heart className="w-5 h-5 mr-2" />,
      'claims-settlement': <FileHeart className="w-5 h-5 mr-2" />,
      'hcm-solutions': <UserCog className="w-5 h-5 mr-2" />,
      'energy-solutions': <Zap className="w-5 h-5 mr-2" />
    };
    return iconMap[projectId] || <Code className="w-5 h-5 mr-2" />;
  };

  const getAchievementIcon = (achievement: string, index: number) => {
    const icons = [
      Users, Cloud, ServerCog, Database, Rocket, BarChart, 
      Lightbulb, Shield, Code, Presentation,
      ArrowUpDown, Lock, Handshake, Plus, Table,
      Gauge, CheckCircle, UserCog, NetworkIcon
    ];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
  };

  const getCompanyLogo = (companyId: string) => {
    const logoMap: { [key: string]: React.ReactNode } = {
      'zs': <Building2 className="w-4 h-4" />,
      'hashedin': <Building2 className="w-4 h-4" />,
      'adp': <Building2 className="w-4 h-4" />,
      'infosys': <Building2 className="w-4 h-4" />
    };
    return logoMap[companyId] || <Building2 className="w-4 h-4" />;
  };

  return (
    <section id="experience" className="py-20 bg-slate-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-100 animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="experience-title"
          >
            Professional Experience
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="experience-subtitle"
          >
            Hands-on delivery across healthcare, capital markets, HCM, and energy with a focus on scalable, production-grade data systems.
          </p>
        </div>

        <div className="space-y-16">
          {resumeData.experience.map((exp) => (
            <div 
              key={exp.id} 
              className="animate-on-scroll neon-card rounded-xl p-8 bg-slate-900/70"
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)', 
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
              }}
              data-testid={`experience-${exp.id}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2 flex items-center gap-2" data-testid={`position-${exp.id}`}>
                    <span className="text-slate-400 animate-glow">{getCompanyLogo(exp.id)}</span>
                    {exp.position}
                  </h3>
                  <p className="text-xl text-slate-200 font-semibold" data-testid={`company-${exp.id}`}>
                    {exp.company}
                  </p>
                  <p className="text-slate-400" data-testid={`duration-${exp.id}`}>
                    {exp.duration}
                  </p>
                </div>
                {exp.current && (
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-semibold border border-slate-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Current Role
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6" data-testid={`project-${project.id}`}>
                    <h4 className="text-lg font-bold text-slate-100 mb-2 flex items-center">
                      {getProjectIcon(project.id)}
                      Project {projectIndex + 1}: {project.title}
                    </h4>
                    <p className="text-slate-300 mb-4 font-medium flex items-center gap-2" data-testid={`project-info-${project.id}`}>
                      {project.id.includes('zs') && <SiApachekafka className="text-slate-400" />}
                      Industry: {project.industry} | Role: {project.role}
                    </p>
                    <ul className="space-y-3 text-slate-300">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start" data-testid={`achievement-${project.id}-${achievementIndex}`}>
                          <span className="text-slate-400">
                            {getAchievementIcon(achievement, achievementIndex)}
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

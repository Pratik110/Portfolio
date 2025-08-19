import React, { useEffect, useRef } from 'react';
import { 
  Users, Cloud, ServerCog, Database, Rocket, BarChart, 
  Lightbulb, Shield, Code, Presentation, 
  ArrowUpDown, Lock, Handshake, Plus, Table, 
  Gauge, CheckCircle, UserCog, NetworkIcon, Heart, 
  FileHeart, Zap
} from 'lucide-react';
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

  const getCompanyColor = (companyId: string) => {
    const colorMap: { [key: string]: string } = {
      'hashedin': 'from-primary-500 to-primary-600',
      'adp': 'from-secondary-500 to-secondary-600',
      'infosys': 'from-accent-purple to-accent-orange'
    };
    return colorMap[companyId] || 'from-slate-700 to-slate-600';
  };

  return (
    <section id="experience" className="py-20 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="experience-title"
          >
            Professional Experience
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="experience-subtitle"
          >
            5+ years of experience in data engineering, cloud architecture, and software development across diverse industries
          </p>
        </div>

        <div className="space-y-16">
          {resumeData.experience.map((exp, expIndex) => (
            <div 
              key={exp.id} 
              className={`animate-on-scroll bg-gradient-to-r ${getCompanyColor(exp.id)} rounded-xl p-8 shadow-2xl border border-slate-600`}
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)', 
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
              }}
              data-testid={`experience-${exp.id}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2" data-testid={`position-${exp.id}`}>
                    {exp.position}
                  </h3>
                  <p className="text-xl text-primary-400 font-semibold" data-testid={`company-${exp.id}`}>
                    {exp.company}
                  </p>
                  <p className="text-gray-400" data-testid={`duration-${exp.id}`}>
                    {exp.duration}
                  </p>
                </div>
                {exp.current && (
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-4 py-2 bg-secondary-500 text-white rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Current Role
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={project.id} className="bg-slate-800 rounded-lg p-6" data-testid={`project-${project.id}`}>
                    <h4 className="text-lg font-bold text-accent-orange mb-2 flex items-center">
                      {getProjectIcon(project.id)}
                      Project {projectIndex + 1}: {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 font-medium" data-testid={`project-info-${project.id}`}>
                      Industry: {project.industry} | Role: {project.role}
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start" data-testid={`achievement-${project.id}-${achievementIndex}`}>
                          <span className={`${expIndex === 0 ? 'text-primary-500' : expIndex === 1 ? 'text-secondary-500' : 'text-accent-purple'}`}>
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

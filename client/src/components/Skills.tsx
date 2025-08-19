import React, { useEffect, useRef } from 'react';
import { 
  Code, Database, Cloud, Settings, Plug, Users,
  Server, Snowflake, ServerCog, ArrowUpDown, BarChart3,
  Calculator, ClipboardList, UserCheck, Handshake,
  Scale, MessageSquare, GitBranch, GitMerge, 
  Container, Target
} from 'lucide-react';
import { resumeData } from '@/data/resumeData';

const Skills = () => {
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
              }, index * 150);
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

  const getSkillCategoryIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'code': <Code className="text-3xl mr-4" />,
      'database': <Database className="text-3xl mr-4" />,
      'cloud': <Cloud className="text-3xl mr-4" />,
      'tools': <Settings className="text-3xl mr-4" />,
      'plug': <Plug className="text-3xl mr-4" />,
      'users': <Users className="text-3xl mr-4" />
    };
    return iconMap[iconName] || <Code className="text-3xl mr-4" />;
  };

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'python': <Code className="mr-3" />,
      'database': <Database className="mr-3" />,
      'project-diagram': <Target className="mr-3" />,
      'server': <Server className="mr-3" />,
      'snowflake': <Snowflake className="mr-3" />,
      'cogs': <ServerCog className="mr-3" />,
      'aws': <Cloud className="mr-3" />,
      'google': <Cloud className="mr-3" />,
      'git-alt': <GitBranch className="mr-3" />,
      'bitbucket': <GitMerge className="mr-3" />,
      'docker': <Container className="mr-3" />,
      'exchange-alt': <ArrowUpDown className="mr-3" />,
      'chart-line': <BarChart3 className="mr-3" />,
      'calculator': <Calculator className="mr-3" />,
      'tasks': <ClipboardList className="mr-3" />,
      'clipboard-list': <ClipboardList className="mr-3" />,
      'user-tie': <UserCheck className="mr-3" />,
      'handshake': <Handshake className="mr-3" />,
      'balance-scale': <Scale className="mr-3" />,
      'comments': <MessageSquare className="mr-3" />
    };
    return iconMap[iconName] || <Code className="mr-3" />;
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'primary-500': 'text-primary-500',
      'secondary-500': 'text-secondary-500',
      'accent-orange': 'text-accent-orange',
      'accent-purple': 'text-accent-purple'
    };
    return colorMap[color] || 'text-primary-500';
  };

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="skills-title"
          >
            Technical Skills
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="skills-subtitle"
          >
            Comprehensive expertise across modern data engineering, cloud platforms, and development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillCategory, index) => (
            <div 
              key={skillCategory.id}
              className={`animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 shadow-xl border border-slate-600 hover:border-${skillCategory.color.replace('-500', '-400')} transition-all duration-300 transform hover:-translate-y-1`}
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)', 
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
              }}
              data-testid={`skill-category-${skillCategory.id}`}
            >
              <div className="flex items-center mb-4">
                <span className={getColorClass(skillCategory.color)}>
                  {getSkillCategoryIcon(skillCategory.icon)}
                </span>
                <h3 className="text-xl font-bold text-white" data-testid={`skill-title-${skillCategory.id}`}>
                  {skillCategory.title}
                </h3>
              </div>
              <div className="space-y-3">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center" data-testid={`skill-item-${skillCategory.id}-${skillIndex}`}>
                    <span className={`${getColorClass(skillCategory.color).replace('text-', 'text-').replace('-500', '-400')}`}>
                      {getSkillIcon(skill.icon)}
                    </span>
                    <span className="text-gray-300">{skill.name}</span>
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

export default Skills;

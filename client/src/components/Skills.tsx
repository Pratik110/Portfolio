import React, { useEffect, useRef } from 'react';
import { 
  Code, Database, Cloud, Settings, Plug, Users,
  Server, ServerCog, ArrowUpDown, BarChart3,
  Calculator, ClipboardList, UserCheck, Handshake,
  Scale, MessageSquare, GitBranch, GitMerge,
  Target, Shield, Lock, Terminal
} from 'lucide-react';
import {
  SiPython, SiApachekafka, SiApachespark, SiSnowflake, SiAmazonwebservices,
  SiPostgresql, SiDocker, SiGithubactions, SiJenkins, SiDatabricks, SiApacheairflow
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';
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
      'users': <Users className="text-3xl mr-4" />,
      'shield': <Shield className="text-3xl mr-4" />,
      'settings': <Settings className="text-3xl mr-4" />
    };
    return iconMap[iconName] || <Code className="text-3xl mr-4" />;
  };

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'python': <SiPython className="mr-3" />,
      'spark': <SiApachespark className="mr-3" />,
      'pipeline': <SiDatabricks className="mr-3" />,
      'database': <Database className="mr-3" />,
      'project-diagram': <Target className="mr-3" />,
      'server': <Server className="mr-3" />,
      'snowflake': <SiSnowflake className="mr-3" />,
      'hadoop': <Database className="mr-3" />,
      'cogs': <ServerCog className="mr-3" />,
      'aws': <SiAmazonwebservices className="mr-3" />,
      'azure': <TbBrandAzure className="mr-3" />,
      'airflow': <SiApacheairflow className="mr-3" />,
      'google': <Cloud className="mr-3" />,
      'git-alt': <GitBranch className="mr-3" />,
      'bitbucket': <GitMerge className="mr-3" />,
      'docker': <SiDocker className="mr-3" />,
      'exchange-alt': <ArrowUpDown className="mr-3" />,
      'chart-line': <BarChart3 className="mr-3" />,
      'calculator': <Calculator className="mr-3" />,
      'tasks': <ClipboardList className="mr-3" />,
      'clipboard-list': <ClipboardList className="mr-3" />,
      'user-tie': <UserCheck className="mr-3" />,
      'handshake': <Handshake className="mr-3" />,
      'balance-scale': <Scale className="mr-3" />,
      'comments': <MessageSquare className="mr-3" />,
      'settings': <SiJenkins className="mr-3" />,
      'shield': <Shield className="mr-3" />,
      'lock': <Lock className="mr-3" />,
      'terminal': <Terminal className="mr-3" />,
      'github': <SiGithubactions className="mr-3" />
    };
    return iconMap[iconName] || <Code className="mr-3" />;
  };

  const marqueeLogos: Array<{ name: string; icon: React.ReactNode }> = [
    { name: 'AWS', icon: <SiAmazonwebservices /> },
    { name: 'Azure', icon: <TbBrandAzure /> },
    { name: 'Databricks', icon: <SiDatabricks /> },
    { name: 'Spark', icon: <SiApachespark /> },
    { name: 'Kafka', icon: <SiApachekafka /> },
    { name: 'Snowflake', icon: <SiSnowflake /> },
    { name: 'Airflow', icon: <SiApacheairflow /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'GitHub Actions', icon: <SiGithubactions /> },
  ];

  const marqueeItems = [...marqueeLogos, ...marqueeLogos];

  return (
    <section id="skills" className="py-20 bg-slate-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-100 animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="skills-title"
          >
            Technical Skills
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="skills-subtitle"
          >
            Comprehensive expertise across modern data engineering, cloud platforms, and development technologies
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm">
          <div className="logo-marquee-track">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="logo-marquee-item"
                data-testid={`skills-logo-${item.name.toLowerCase().replace(/\\s+/g, '-')}-${index}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillCategory) => (
            <div 
              key={skillCategory.id}
              className="animate-on-scroll neon-card bg-slate-900/70 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)', 
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
              }}
              data-testid={`skill-category-${skillCategory.id}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-slate-400 animate-glow">
                  {getSkillCategoryIcon(skillCategory.icon)}
                </span>
                <h3 className="text-xl font-bold text-slate-100" data-testid={`skill-title-${skillCategory.id}`}>
                  {skillCategory.title}
                </h3>
              </div>
              <div className="space-y-3">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center" data-testid={`skill-item-${skillCategory.id}-${skillIndex}`}>
                    <span className="text-slate-400">
                      {getSkillIcon(skill.icon)}
                    </span>
                    <span className="text-slate-300">{skill.name}</span>
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

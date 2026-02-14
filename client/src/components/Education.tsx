import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Medal } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

const Education = () => {
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

  const getScoreIcon = (educationId: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'btech': <GraduationCap className="w-4 h-4 mr-2" />,
      'plus-two': <Award className="w-4 h-4 mr-2" />,
      'tenth': <Medal className="w-4 h-4 mr-2" />
    };
    return iconMap[educationId] || <GraduationCap className="w-4 h-4 mr-2" />;
  };

  return (
    <section id="education" className="py-20 neon-section" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 neon-title animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="education-title"
          >
            Education
          </h2>
          <p 
            className="text-xl neon-subtitle max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            data-testid="education-subtitle"
          >
            Strong academic foundation in engineering with consistent performance across all levels
          </p>
        </div>

        <div className="space-y-8">
          {resumeData.education.map((edu) => (
            <div 
              key={edu.id}
              className="animate-on-scroll neon-card rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 animate-float-slow"
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)', 
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
              }}
              data-testid={`education-${edu.id}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-rose-50 mb-2" data-testid={`degree-${edu.id}`}>
                    {edu.degree}
                  </h3>
                  {edu.stream && (
                    <p className="text-xl text-rose-100/90 font-semibold mb-2" data-testid={`stream-${edu.id}`}>
                      {edu.stream}
                    </p>
                  )}
                  <p className="text-lg text-rose-100/90 mb-2" data-testid={`institution-${edu.id}`}>
                    {edu.institution}
                  </p>
                  <p className="text-rose-100/70" data-testid={`board-${edu.id}`}>
                    {edu.board}
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <div className="inline-flex items-center px-4 py-2 neon-chip rounded-full text-lg font-bold mb-2">
                    {getScoreIcon(edu.id)}
                    <span data-testid={`score-${edu.id}`}>
                      {edu.score}{edu.scoreType === 'CGPA' ? ' CGPA' : '%'}
                    </span>
                  </div>
                  <p className="text-rose-100/70" data-testid={`year-${edu.id}`}>{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

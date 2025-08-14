
import React from 'react';
import { Camera, PenLine, Wrench, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Jr. Data Analyst (Intern/Contract)',
      organization: 'Studytap – Remote',
      period: 'Jul 2021 – Jun 2022',
      description: 'Built Python scripts to clean ~200K usage logs into SQL tables; created initial Tableau dashboards; reduced analysis turnaround time by 50% and enabled self-service analytics.',
      icon: Wrench,
      color: 'text-blue-400'
    },
    {
      title: 'Frontend & Data Analyst',
      organization: 'Studytap – Remote',
      period: 'Jul 2022 – Jun 2023',
      description: 'Automated insights for 500K+ product events; built Power BI/Tableau dashboards for activation, CAC, LTV; improved trial-to-subscription by 15% and reduced manual reporting by 40%.',
      icon: Users,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              Leadership & Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Beyond technical skills, I bring leadership experience and a collaborative spirit 
              to every project through my volunteer and organizational roles.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>

                <Card
                  className={`ml-12 md:ml-0 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <exp.icon className={`h-6 w-6 ${exp.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.organization}</p>
                        <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                        <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Technical Achievements */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Technical Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-effect rounded-lg p-6 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-foreground/80">Data Dashboards Created</p>
              </div>
              <div className="glass-effect rounded-lg p-6 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-foreground/80">Technical Projects</p>
              </div>
              <div className="glass-effect rounded-lg p-6 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-foreground/80">Data Analysis Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

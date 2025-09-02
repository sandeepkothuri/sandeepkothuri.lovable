
import React from 'react';
import { Camera, PenLine, Wrench, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Jr. Data Analyst (Intern/Contract)',
      organization: 'Studytap – Remote',
      period: 'Jul 2021 – Jun 2022',
      context: 'Studytap needed foundational analytics to evaluate student learning behavior and user acquisition across its growing edtech platform.',
      responsibilities: 'Tasked with setting up basic tracking, cleaning raw data, and producing recurring insights to support product and content teams.',
      achievements: [
        'Built Python scripts to clean and aggregate ~200K product usage logs into structured SQL tables for querying and visualization.',
        'Created initial Tableau dashboards for user funnel performance and content engagement across early adopters.',
        'Reduced analysis turnaround time by 50% and established a self-service analytics culture that empowered business teams with data.'
      ],
      icon: Wrench,
      color: 'text-blue-400'
    },
    {
      title: 'Frontend & Data Analyst',
      organization: 'Studytap – Remote',
      period: 'Jul 2022 – Jun 2023',
      context: 'Studytap was scaling rapidly and needed robust GTM insights to optimize onboarding, trial conversion, and customer retention.',
      responsibilities: 'Tasked with automating insights delivery and building reliable pipelines to analyze 500K+ raw product events.',
      achievements: [
        'Designed dynamic dashboards in Power BI and Tableau to track activation, CAC, LTV, and regional growth metrics.',
        'Used SQL and Python to run behavioral cohort analyses and identify key drop-off points in the user journey.',
        'Increased trial-to-subscription rate by 15%, reduced manual reporting by 40%, and enabled GTM teams to make data-informed campaign decisions.'
      ],
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
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <exp.icon className={`h-5 w-5 ${exp.color}`} />
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.organization}</p>
                      <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                      
                      <div className="space-y-3">
                        <p className="text-foreground/70 text-sm italic leading-relaxed">
                          {exp.context}
                        </p>
                        
                        <p className="text-foreground/80 leading-relaxed">
                          {exp.responsibilities}
                        </p>
                        
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-foreground/80 text-sm leading-relaxed flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
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

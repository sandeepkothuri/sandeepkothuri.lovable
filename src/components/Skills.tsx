
import React from 'react';
import { Code, Database, Cloud, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Tools',
      color: 'text-blue-400',
      skills: ['Python', 'SQL', 'Spark (Beginner)', 'R (Familiar)', 'Snowflake', 'dbt (Familiar)', 'MongoDB', 'JIRA', 'Excel', 'Salesforce']
    },
    {
      icon: Database,
      title: 'Data & Visualization',
      color: 'text-green-400',
      skills: ['Tableau', 'Power BI', 'Amazon QuickSight', 'MySQL']
    },
    {
      icon: Cloud,
      title: 'Cloud & Platforms',
      color: 'text-purple-400',
      skills: ['AWS (S3, Athena, QuickSight)', 'Azure (Data Fundamentals)', 'Snowflake']
    }
  ];

  const certifications = [
    'Accenture North America – Forage Virtual Internship',
    'Excel Essential Training (LinkedIn Learning)',
    'AI Design Thinking (IBM)',
    'Data Analysis with Microsoft Excel (Microsoft)',
    'Generative AI Fundamentals (Microsoft)',
    'AWS Cloud Practitioner Essentials (AWS)',
    'Python (HackerRank)',
    'Google Data Analytics Professional Certificate (Coursera)',
    'IBM Data Engineer Professional Certificate (Coursera)',
    'Azure Data Fundamentals (Microsoft)'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-primary/20 mb-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={cert}
                  className="px-4 py-2 bg-secondary text-foreground border-primary/20 hover:border-primary/40 transition-all duration-200 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

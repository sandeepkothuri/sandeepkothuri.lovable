
import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground/60 text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              Education & Background
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Passionate about Data & Design
              </h3>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Detail-oriented Data Analyst with 2 years of experience leveraging SQL, Python, and AWS to design scalable data solutions and enable self-service analytics.
                </p>
                <p>
                  Proven ability to build end-to-end dashboards, ensure data quality, and extract insights from complex datasets using Tableau, Power BI, and Amazon QuickSight.
                </p>
                <p>
                  Master's candidate in Information Systems (CSULB, May 2025), specializing in data visualization, cloud platforms, and business intelligence.
                </p>
              </div>

              {/* Key Skills Highlight */}
              <div className="mt-8 p-6 bg-card/30 rounded-lg border border-border/30">
                <h4 className="font-semibold mb-3">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Self-service Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Data Pipelines (SQL/Python/dbt)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cloud Platforms (AWS/Azure/Snowflake)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>GTM Funnels & Retention</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-slide-in-right space-y-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                
                <Card className="ml-12 bg-card/50 border-border/30 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-xl font-semibold">MS in Information Systems</h4>
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-primary font-medium mb-2">California State University, Long Beach</p>
                        <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>May 2025</span>
                          </div>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            GPA: 3.6
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm">
                          Coursework: Database Systems, Software System Design & Implementation, Data Structures & Algorithms, Big Data Analytics, Visual Analytics.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="absolute left-4 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>

              <div className="relative">
                <Card className="ml-12 bg-card/50 border-border/30 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h4>
                        <p className="text-primary font-medium mb-2">SRM University, India</p>
                        <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>May 2023</span>
                          </div>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            GPA: 3.4
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm">
                          Foundation in software development, data structures, and computer science fundamentals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="absolute left-4 top-4 w-4 h-4 bg-primary/60 rounded-full border-4 border-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

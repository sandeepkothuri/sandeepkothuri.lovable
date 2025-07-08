
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Passionate about Data & Design
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm Sandeep Kothuri, a graduate in Information Systems from California State University, Long Beach. 
                I'm passionate about uncovering meaningful insights from data and building intuitive, data-driven digital tools.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                My strengths lie in SQL, Python, Tableau, and UI/UX, with a keen eye for design and storytelling. 
                I believe that great data analysis isn't just about numbers—it's about creating narratives that drive action.
              </p>
              <div className="flex items-center space-x-4 text-primary">
                <MapPin className="h-5 w-5" />
                <span className="text-foreground/80">Long Beach, CA</span>
              </div>
            </div>

            {/* Education Section */}
            <div className="animate-slide-in-right space-y-6">
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">MS in Information Systems</h4>
                      <p className="text-foreground/80 mb-2">California State University, Long Beach</p>
                      <div className="flex items-center space-x-4 text-sm text-foreground/60">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Graduated May 2025</span>
                        </div>
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded-full">
                          GPA: 3.6
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h4>
                      <p className="text-foreground/80 mb-2">SRM University AP</p>
                      <div className="flex items-center space-x-4 text-sm text-foreground/60">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Graduated September 2023</span>
                        </div>
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded-full">
                          GPA: 3.16
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

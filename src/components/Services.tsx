
import React from 'react';
import { BarChart3, Monitor, Palette, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Reporting',
      description: 'Transform raw data into actionable insights with comprehensive analysis, statistical modeling, and custom reporting solutions.',
      features: ['Statistical Analysis', 'Data Cleaning & Preparation', 'Trend Analysis', 'Custom Reports'],
      color: 'text-blue-400'
    },
    {
      icon: Monitor,
      title: 'Dashboard Development',
      description: 'Create interactive, real-time dashboards using Tableau and Power BI to visualize your data and track key metrics.',
      features: ['Tableau Dashboards', 'Power BI Reports', 'Interactive Visualizations', 'KPI Tracking'],
      color: 'text-green-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Portfolio Website Support',
      description: 'Build professional portfolio websites that showcase your work and help you stand out in the digital landscape.',
      features: ['Responsive Design', 'Modern Development', 'SEO Optimization', 'Performance Tuning'],
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              Services I Offer
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Combining technical expertise with creative design to deliver comprehensive solutions
              that drive business growth and user satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-effect rounded-2xl p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your data and design visions to life. 
                From concept to completion, I'm here to support your success.
              </p>
              <Button 
                size="lg" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

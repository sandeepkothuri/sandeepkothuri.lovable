
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      title: 'Digital App Usage & CO₂ Emissions Pipeline',
      description: 'Simulated 100K+ app usage records; calculated per-session CO₂ emissions; built dashboards for sustainability KPIs.',
      longDescription: 'Simulated 100K+ app usage records and calculated per-session CO₂ emissions using open benchmarks and Python-based processing. Developed Power BI dashboards to visualize usage intensity and sustainability KPIs by region, device, and category. Documented data lineage and metric definitions to improve transparency and align with stakeholder sustainability goals.',
      tools: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel'],
      image: '/placeholder-project1.jpg',
      category: 'Data Analysis'
    },
    {
      title: 'OTT User Data Platform with AWS',
      description: 'Analyzed millions of OTT logs via Athena; QuickSight dashboards for DAU, retention, and content trends.',
      longDescription: 'Queried and analyzed millions of OTT session logs via Athena to uncover behavior patterns; found 65% of users preferred weekends, with action/drama genres driving peak engagement. Built QuickSight dashboards to track DAU, retention, and content trends, reducing manual reporting by 30% and enabling self-serve insights. Defined metadata tags and business logic for content types and session metrics, standardizing analytics across teams.',
      tools: ['AWS S3', 'AWS Athena', 'Amazon QuickSight', 'SQL'],
      image: '/placeholder-project2.jpg',
      category: 'Data Analysis'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Data Analysis'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'border-primary/20 text-foreground hover:border-primary/40'
                  } transition-all duration-200`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              {project.longDescription}
                            </p>
                            <div>
                              <h4 className="font-semibold mb-2">
                                {project.category === 'Research' ? 'Research Areas:' : 'Technologies Used:'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                  <Badge key={tool} variant="secondary">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {project.category !== 'Research' && (
                        <Button size="sm" variant="outline">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="text-primary border-primary/40 flex-shrink-0 whitespace-nowrap">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {tool}
                        </Badge>
                      ))}
                      {project.tools.length > 3 && (
                        <Badge variant="secondary" className="bg-muted">
                          +{project.tools.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

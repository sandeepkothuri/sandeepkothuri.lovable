
import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                SK
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-poppins">
            <span className="gradient-text">Sandeep Kothuri</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-8 font-inter">
            Data Analyst | Dashboard Developer | UI/UX Enthusiast
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into meaningful insights and crafting 
            intuitive digital experiences that drive business decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg font-medium bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
              onClick={() => scrollToAbout()}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:ksandy.c16@gmail.com"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-200 transform hover:scale-110"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-200 transform hover:scale-110"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-200 transform hover:scale-110"
          >
            <ChevronDown className="h-8 w-8 text-primary mx-auto" />
            <p className="text-sm text-foreground/60 mt-2">Scroll to explore</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Main Content */}
          <div className="text-left animate-fade-up">
            {/* Professional Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">SK</span>
                </div>
                <span className="text-foreground/60 text-sm font-medium">PORTFOLIO</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
                <span className="text-foreground">Sandeep</span><br />
                <span className="gradient-text">Kothuri</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 mb-2 font-medium">
                Data Analyst | Dashboard Developer
              </p>
              <div className="flex items-center space-x-2 text-foreground/60 mb-8">
                <MapPin className="h-4 w-4" />
                <span>Based in Long Beach, CA</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-12 max-w-lg">
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Transform data into insights and design user-centered experiences. 
                Passionate about creating meaningful digital solutions that drive business decisions.
              </p>
              <div className="text-sm text-foreground/50">
                <p className="mb-1">ksandy.c16@gmail.com</p>
                <p>Available for opportunities</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 transition-all duration-200"
                onClick={() => scrollToAbout()}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 border-foreground/20 hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:ksandy.c16@gmail.com"
                className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile & Stats */}
          <div className="animate-slide-in-right">
            {/* Profile Image */}
            <div className="relative mb-12">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="w-72 h-72 rounded-full bg-muted flex items-center justify-center text-8xl font-bold text-primary">
                  SK
                </div>
                {/* Floating elements inspired by the original */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-foreground/60">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">3.6</div>
                <div className="text-sm text-foreground/60">GPA Master's</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-foreground/60">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-200"
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

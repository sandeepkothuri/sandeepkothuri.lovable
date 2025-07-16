
import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Enhanced Content */}
          <div className="text-left animate-fade-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            {/* Professional Header */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-lg">SK</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse">
                    <Sparkles className="w-3 h-3 text-primary-foreground absolute top-0.5 left-0.5" />
                  </div>
                </div>
                <div>
                  <span className="text-foreground/60 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-3 w-3 text-foreground/40" />
                    <span className="text-xs text-foreground/40">Long Beach, CA</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 font-poppins leading-tight">
                <span className="text-foreground">Sandeep</span><br />
                <span className="gradient-text">Kothuri</span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  Data Analyst
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                  Dashboard Developer
                </Badge>
              </div>
            </div>

            {/* Enhanced Bio */}
            <div className="mb-12 max-w-xl">
              <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
                Transform data into <span className="text-primary font-semibold">insights</span> and design 
                <span className="text-primary font-semibold"> user-centered experiences</span>. 
                Passionate about creating meaningful digital solutions that drive business decisions.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">ksandy.c16@gmail.com</p>
                  <p className="text-xs text-foreground/60">Let's connect and collaborate</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                onClick={() => scrollToAbout()}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 border-2 border-foreground/20 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Mail, href: "mailto:ksandy.c16@gmail.com", label: "Email" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-3 rounded-xl border border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Profile & Stats */}
          <div className="animate-slide-in-right">
            {/* Enhanced Profile Image */}
            <div className="relative mb-16">
              <div className="relative w-96 h-96 mx-auto">
                {/* Main profile container */}
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-border/30 shadow-2xl">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                    <img 
                      src="https://i.postimg.cc/C1qQvV8S/temp-Image-OBr7oa.avif"
                      alt="Sandeep Kothuri"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl animate-float backdrop-blur-sm border border-primary/20"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl animate-float backdrop-blur-sm border border-secondary/20" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/3 left-8 w-8 h-8 bg-gradient-to-br from-accent/40 to-accent/20 rounded-lg animate-float" style={{ animationDelay: '4s' }}></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {[
                { number: "5+", label: "Years Experience", icon: "🎯" },
                { number: "50+", label: "Projects Completed", icon: "🚀" },
                { number: "3.6", label: "GPA Master's", icon: "🎓" },
                { number: "100%", label: "Satisfaction Rate", icon: "⭐" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 animate-bounce-slow hover:animate-none transition-all duration-300"
          >
            <span className="text-xs text-foreground/60 font-medium uppercase tracking-wider">Scroll</span>
            <div className="p-2 rounded-full border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
              <ChevronDown className="h-5 w-5 text-primary" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

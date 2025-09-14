import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF8F0]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Hi, I'm Tawab Ibnul Eashan </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">A Software Engineer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions with clean, efficient code. 
              Specializing in modern web technologies and full-stack development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="professional" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/ebirdeater"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/tawab-ibnul-eashann-4b6a77335"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
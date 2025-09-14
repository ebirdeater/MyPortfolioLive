import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'PennyPilot',
      description: 'A comprehensive expense tracker mobile application built with React Native. Features include expense categorization, budget tracking, financial analytics, and intuitive user interface for managing personal finances.',
      image: project1Image,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: 'https://github.com/ebirdeater/PennyPilot',
      featured: true
    },
    {
      title: 'CodePort',
      description: 'An innovative Online IDE SaaS platform that allows developers to write, compile, and execute code in multiple programming languages directly in the browser with real-time collaboration features.',
      image: project2Image,
      technologies: ['React', 'Node.js', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/ebirdeater/CodePort',
      featured: true
    },
    {
      title: 'MovieBird',
      description: 'An online movie search and recommendation platform that helps users discover new movies based on their preferences. Features advanced search filters and personalized movie suggestions.',
      image: project3Image,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: 'https://github.com/ebirdeater/MovieBird',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A showcase of my recent work and the technologies I'm passionate about.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:scale-105 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>


                {/* Project Links */}
                <div className="flex justify-center pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/ebirdeater" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
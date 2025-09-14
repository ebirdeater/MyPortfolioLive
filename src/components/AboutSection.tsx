import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating modern, responsive web applications with cutting-edge technologies.'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Designing robust server-side architectures and database solutions.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Building applications with mobile-first approach for optimal user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Dedicated to crafting exceptional digital experiences through innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                With expertise in the MERN stack and React Native, I specialize in creating
                full-stack web applications and mobile solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I combine strong software engineering principles with effective project management
                skills to deliver scalable solutions. Proficient in cloud technologies like AWS
                and containerization with Docker, I focus on creating efficient, maintainable
                applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'React Native', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border border-border/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
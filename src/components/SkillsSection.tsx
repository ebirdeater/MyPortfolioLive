import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 95 },
        { name: 'MongoDB', level: 88 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'Project Management', level: 88 },
        { name: 'Software Engineering', level: 92 },
      ]
    }
  ];

  const tools = [
    'Postman',
    'GitHub',
    'Authentication',
    'MongoDB Atlas',
    'AWS Services',
    'Docker',
    'Database Management',
    'CI/CD',
    'Agile Methodologies',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-foreground font-medium py-1">
                    {skill.name}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="p-8 bg-gradient-card shadow-card border border-border/50">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-muted/50 hover:bg-primary/10 text-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
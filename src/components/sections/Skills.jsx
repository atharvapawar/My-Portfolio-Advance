import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '< >',
      description: 'Modern frontend technologies and frameworks',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Tailwind', icon: '💨' },
        { name: 'Bootstrap', icon: '🎯' }
      ]
    },
    {
      title: 'Backend',
      icon: '[ ]',
      description: 'Server-side development and APIs',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'Django', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      description: 'Cloud infrastructure and deployment',
      technologies: [
        { name: 'AWS', icon: '☁️' },
        { name: 'EC2', icon: '🖥️' },
        { name: 'S3', icon: '📦' },
        { name: 'Lambda', icon: '⚡' },
        { name: 'Docker', icon: '🐳' },
        { name: 'CI/CD', icon: '🔄' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies to build robust, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-primary-50 hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript', 'GraphQL', 'Redis', 'JWT', 'OAuth', 'REST APIs',
              'Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Agile'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure provisioning using Terraform & Ansible with complete CI/CD pipeline and Infrastructure as Code best practices.',
      image: '/src/assets/img/website-img-1.jpg',
      category: 'Full Stack',
      technologies: ['Terraform', 'Ansible', 'AWS', 'GitHub Actions'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/cloud-infrastructure',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Real-time chat application with private rooms, message persistence, and instant messaging using Socket.io and MongoDB.',
      image: '/src/assets/img/website-img-2.webp',
      category: 'Full Stack',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/chat-app',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN marketplace with user authentication, Stripe payment integration, S3 image hosting, and SEO optimizations.',
      image: '/src/assets/img/website-img-3.jpg',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      featured: true
    }
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-large transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-200 text-primary-600 rounded-lg hover:border-primary-300 hover:text-primary-700 transition-colors duration-300 text-sm font-medium"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-200 text-primary-600 rounded-lg hover:border-primary-300 hover:text-primary-700 transition-colors duration-300 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 
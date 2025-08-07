import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import project1 from '../../assets/img/website-img-1.jpg';
import project2 from '../../assets/img/website-img-2.webp';
import project3 from '../../assets/img/website-img-3.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Set up intersection observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure provisioning using Terraform & Ansible with complete CI/CD pipeline and Infrastructure as Code best practices.',
      image: project1,
      category: 'Full Stack',
      technologies: ['Terraform', 'Ansible', 'AWS', 'GitHub Actions'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/atharvapawar',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Real-time chat application with private rooms, message persistence, and instant messaging using Socket.io and MongoDB.',
      image: project2,
      category: 'Full Stack',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/atharvapawar',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN marketplace with user authentication, Stripe payment integration, S3 image hosting, and SEO optimizations.',
      image: project3,
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/atharvapawar',
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      id="projects" 
      className="section-padding bg-white dark:bg-gray-900"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >Featured Projects</motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and expertise
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-large transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              {/* Project Image */}
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  wrapperClassName="w-full h-48"
                />
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Project Content */}
              <motion.div 
                className="p-6"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                  variants={itemVariants}
                >{project.title}</motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                  variants={itemVariants}
                >{project.description}</motion.p>
                
                {/* Technology Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, backgroundColor: "#d1fae5" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-3"
                  variants={containerVariants}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary-700)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: "var(--color-primary-500)", color: "var(--color-primary-600)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/atharvapawar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "var(--color-primary-700)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </motion.svg>
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
  
  const techItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };
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
    <motion.section 
      id="skills" 
      className="section-padding bg-gray-50 dark:bg-gray-800"
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
          >Skills & Technologies</motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I work with modern technologies to build robust, scalable applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
            >
              {/* Category Header */}
              <motion.div className="text-center mb-8">
                <motion.div 
                  className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{category.icon}</span>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                  variants={itemVariants}
                >{category.title}</motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  variants={itemVariants}
                >{category.description}</motion.p>
              </motion.div>

              {/* Technology Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:shadow-soft transition-all duration-300 group"
                    variants={techItemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "var(--color-primary-50)",
                      boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="text-2xl mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: Math.random() * 2 + 1 
                      }}
                    >{tech.icon}</motion.div>
                    <motion.div 
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-16 text-center"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            variants={itemVariants}
          >Additional Skills</motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.6, staggerChildren: 0.05 }}
          >
            {[
              'TypeScript', 'GraphQL', 'Redis', 'JWT', 'OAuth', 'REST APIs',
              'Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Agile'
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                variants={techItemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "var(--color-primary-300)", 
                  color: "var(--color-primary-600)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
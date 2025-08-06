import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
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
  
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const timelineItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.section 
      id="experience" 
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
          >Experience</motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My professional journey and the companies I've worked with
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={timelineVariants}
        >
          {/* Experience Timeline */}
          <motion.div 
            className="relative"
            variants={timelineVariants}
          >
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
            ></motion.div>
            
            {/* Experience Entry */}
            <motion.div 
              className="relative pl-16 pb-12"
              variants={timelineItemVariants}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-6 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              ></motion.div>
              
              {/* Experience Content */}
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
                  variants={itemVariants}
                >
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                      variants={itemVariants}
                    >Web Developer Intern</motion.h3>
                    <motion.p 
                      className="text-primary-600 dark:text-primary-400 font-semibold text-lg"
                      variants={itemVariants}
                    >EasyGoLife</motion.p>
                  </div>
                  <motion.div 
                    className="flex items-center space-x-4 mt-4 sm:mt-0"
                    variants={itemVariants}
                  >
                    <span className="text-gray-600 dark:text-gray-300">October 2024 - December 2024</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">3 months</span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  variants={itemVariants}
                >
                  <motion.h4 
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >Key Responsibilities & Achievements:</motion.h4>
                  <motion.ul 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <motion.span 
                        className="text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                      >Built responsive UI features using modern React patterns and component libraries</motion.span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <motion.span 
                        className="text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                      >Implemented performance optimizations resulting in 40% faster page load times</motion.span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <motion.span 
                        className="text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                      >Developed automated testing suites improving code reliability and reducing bugs by 60%</motion.span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <motion.span 
                        className="text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                      >Collaborated with design and backend teams to deliver pixel-perfect user interfaces</motion.span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#e0f2fe", 
                transition: { duration: 0.2 } 
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-primary-600 dark:text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </motion.svg>
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white mb-2"
              variants={itemVariants}
            >15+ Projects</motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >Successfully delivered projects across various domains</motion.p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#e0f2fe", 
                transition: { duration: 0.2 } 
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-primary-600 dark:text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </motion.svg>
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white mb-2"
              variants={itemVariants}
            >Performance Focus</motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >Optimized applications for speed and user experience</motion.p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#e0f2fe", 
                transition: { duration: 0.2 } 
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-primary-600 dark:text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  rotate: [0, 0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </motion.svg>
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white mb-2"
              variants={itemVariants}
            >Team Collaboration</motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >Worked effectively with cross-functional teams</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
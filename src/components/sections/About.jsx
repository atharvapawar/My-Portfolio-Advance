import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import aboutImage from '../../assets/img/about-me.jpg';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.3 + (i * 0.1),
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
                I'm a passionate Full-Stack Web Developer based in{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  Vikhroli, Mumbai
                </a>
                . I graduated with a BCA from{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  Pune Vidyapeeth
                </a>{' '}
                in 2022 and have been building modern web applications ever since.
              </motion.p>
              <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
                My expertise lies in creating scalable, user-friendly applications using cutting-edge technologies. I specialize in{' '}
                <span className="text-primary-600 dark:text-primary-400 font-medium">React ecosystem</span>,{' '}
                <span className="text-primary-600 dark:text-primary-400 font-medium">Node.js backend development</span>, and{' '}
                <span className="text-primary-600 dark:text-primary-400 font-medium">AWS cloud infrastructure</span>.
              </motion.p>
            </motion.div>

            {/* Statistics */}
            <motion.div className="grid grid-cols-3 gap-6" variants={itemVariants}>
              <motion.div 
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-medium transition-all duration-300"
                variants={statsVariants}
                custom={0}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  15+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-medium transition-all duration-300"
                variants={statsVariants}
                custom={1}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  2+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-medium transition-all duration-300"
                variants={statsVariants}
                custom={2}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LazyLoadImage
                src={aboutImage}
                alt="Atharv Pawar - Full-Stack Web Developer"
                effect="blur"
                className="w-full h-96 object-cover rounded-2xl shadow-large"
                wrapperClassName="w-full h-96"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-full h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl -z-10 opacity-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
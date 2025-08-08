import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
  
  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const contactInfoVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <motion.section 
      id="contact" 
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
          >Get In Touch</motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss your project and bring your ideas to life
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            variants={formItemVariants}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >Send me a message</motion.h3>
            <motion.form
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={formItemVariants}>
                <motion.label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  variants={itemVariants}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  variants={formItemVariants}
                  whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariants}>
                <motion.label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  variants={itemVariants}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  variants={formItemVariants}
                  whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariants}>
                <motion.label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  variants={itemVariants}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                  variants={formItemVariants}
                  whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full btn-primary text-lg py-4 shadow-lg hover:shadow-xl"
                variants={formItemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: [1, 0.8, 1],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  Send Message
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={contactInfoVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >Let's connect</motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                variants={itemVariants}
              >
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </motion.p>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#e0f2fe", 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-primary-600 dark:text-primary-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.h4 
                    className="font-semibold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >Email</motion.h4>
                  <motion.a 
                    href="mailto:atharvapawar34s@gmail.com"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, color: "#4f46e5" }}
                  >
                    atharvapawar34s@gmail.com
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#e0f2fe", 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-primary-600 dark:text-primary-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.h4 
                    className="font-semibold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >Location</motion.h4>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300"
                    variants={itemVariants}
                  >Vikhroli, Mumbai, India</motion.p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#e0f2fe", 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-primary-600 dark:text-primary-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      rotate: [0, 0, 180, 180, 0],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.h4 
                    className="font-semibold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >Availability</motion.h4>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300"
                    variants={itemVariants}
                  >Available for new opportunities</motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="mt-8"
              variants={contactInfoVariants}
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >Follow me</motion.h4>
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.a 
                  href="https://github.com/atharvapawar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "#e0f2fe",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </motion.svg>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/atharvapawar34s" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "#e0f2fe",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </motion.svg>
                </motion.a>
                <motion.a 
                  href="mailto:atharvapawar34s@gmail.com" 
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "#e0f2fe",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Certificates = () => {
  // Set up intersection observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const certificateVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const certificates = [
    {
      title: "Master in Full Stack Web Development with AWS",
      issuer: "ITVedant",
      date: "September 2024",
      description:
        "Comprehensive course covering modern web development technologies, including React, Node.js, and MongoDB.",
      icon: "🌐",
      file: "/certificates/Master in Full Stack Web Development with AWS.jpg",
    },
    {
      title: "Advanced Web Designing Certificate",
      issuer: "ITVedant",
      date: "September 2024",
      description:
        "In-depth training in JavaScript concepts such as closures, prototypes, asynchronous programming, and ES6+ features.",
      icon: "⚡",
      file: "/certificates/Advanced Web Designing Certificate.jpg",
    },
    {
      title: "AWS Cloud Practitioner Certificate",
      issuer: "ITVedant",
      date: "July 2025",
      description:
        "Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      icon: "☁️",
      file: "/certificates/AWS Cloud Practitioner Certificate.jpg",
    },
    {
      title: "Angular Certificate",
      issuer: "ITVedant",
      date: "September 2024",
      description:
        "Comprehensive training in Angular framework for building dynamic, responsive web applications.",
      icon: "🎨",
      file: "/certificates/Angular Certificate.jpg",
    },
  ];

  return (
    <motion.section
      id="certificates"
      className="section-padding bg-white dark:bg-gray-900"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Certificates
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Professional certifications and courses I've completed
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={certificateVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full flex items-center justify-center text-2xl"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                  }}
                >
                  {certificate.icon}
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                    variants={itemVariants}
                  >
                    {certificate.title}
                  </motion.h3>
                  <motion.div
                    className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
                    variants={itemVariants}
                  >
                    <span className="font-medium mr-2">
                      {certificate.issuer}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 mx-2">
                      •
                    </span>
                    <span>{certificate.date}</span>
                  </motion.div>
                  <motion.p
                    className="text-gray-600 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    {certificate.description}
                  </motion.p>
                  <motion.div className="mt-4" variants={itemVariants}>
                    <motion.a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certificates;

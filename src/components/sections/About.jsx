import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full-Stack Web Developer based in{' '}
                <a href="#" className="text-primary-600 underline hover:text-primary-700 transition-colors">
                  Vikhroli, Mumbai
                </a>
                . I graduated with a BCA from{' '}
                <a href="#" className="text-primary-600 underline hover:text-primary-700 transition-colors">
                  Pune Vidyapeeth
                </a>{' '}
                in 2022 and have been building modern web applications ever since.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My expertise lies in creating scalable, user-friendly applications using cutting-edge technologies. I specialize in{' '}
                <span className="text-primary-600 font-medium">React ecosystem</span>,{' '}
                <span className="text-primary-600 font-medium">Node.js backend development</span>, and{' '}
                <span className="text-primary-600 font-medium">AWS cloud infrastructure</span>.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/src/assets/img/about-me.jpg"
                alt="Atharv Pawar - Full-Stack Web Developer"
                className="w-full h-96 object-cover rounded-2xl shadow-large"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
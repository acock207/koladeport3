'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mx-auto w-full max-w-[350px] md:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10 rounded-lg"></div>
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              {/* Placeholder for profile image - replace with actual image later */}
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                KS
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-2 md:px-0"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Kolade Shittu</h3>
            <h4 className="text-lg md:text-xl text-purple-400 mb-4 md:mb-6">Fullstack Developer</h4>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              I am a passionate fullstack developer with expertise in building modern, responsive, and user-friendly web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/kolade-shittu-609813355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              View LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
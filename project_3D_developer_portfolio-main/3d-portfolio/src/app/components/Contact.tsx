'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 min-h-screen bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Interested in working together? Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 rounded-xl p-6 md:p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  I&apos;m currently open to freelance opportunities, full-time positions, and collaborative projects. 
                  If you have a project that needs my expertise, don&apos;t hesitate to reach out.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">Email</p>
                      <p className="text-white text-sm md:text-base break-all">aw.shittu@yahoo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/kolade-shittu-609813355" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors text-sm md:text-base break-all"
                      >
                        linkedin.com/in/kolade-shittu-609813355
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Connect With Me</h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  The fastest way to reach me is through LinkedIn or email. I typically respond within 24-48 hours.
                </p>
                
                <a 
                  href="https://www.linkedin.com/in/kolade-shittu-609813355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-center hover:opacity-90 transition-opacity text-sm md:text-base"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      icon: 'globe.svg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking features.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      icon: 'window.svg'
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'A custom CMS solution for content creators with markdown support, media management, and SEO optimization tools.',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      icon: 'file.svg'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 mb-4 text-sm md:text-base mt-4">
            Here's a selection of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-4 md:p-6 border-b border-slate-700">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Image 
                    src={`/${project.icon}`} 
                    alt={project.title} 
                    width={24} 
                    height={24} 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{project.description}</p>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-xs md:text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-slate-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  // Skills categorized by type
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design', 'UI/UX']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'MongoDB', 'SQL']
    },
    {
      title: 'Tools & Methods',
      skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'Testing', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            I&apos;ve developed expertise in various technologies across the full stack development spectrum.
            Here&apos;s a breakdown of my technical skills:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/80 dark:bg-slate-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + categoryIndex * 0.2 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm md:text-base">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 md:h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 md:h-2 rounded-full" 
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
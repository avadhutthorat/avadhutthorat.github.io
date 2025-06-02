'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Text Generator',
    description:
      'A modern React application that generates custom placeholder text for your projects. Built with React 18 and styled with a futuristic UI design.',
    image: '/TextGenerator.png',
    github: 'https://github.com/avadhutthorat/text-generator',
    demo: 'https://avadhutthorat.github.io/text-generator/',
    tags: ['React', 'Baconipsum API'],
  },
  {
    title: 'Lyrics World',
    description:
      'A simple and elegant web application that allows users to search for any song and instantly fetch its lyrics.',
    image: '/lyricsWorld.png',
    github: 'https://github.com/avadhutthorat/lyricsworld',
    demo: 'https://lyricsavadhut.firebaseapp.com/',
    tags: ['React', 'musixmatch API', 'HTML', 'CSS'],
  },
];

const sandboxProjects = [
  {
    title: 'Image Carousel',
    description: 'A simple image carousel built with React and TypeScript.',
    codesandbox: 'https://vxg8ms.csb.app/',
    tags: ['React'],
  },
  // Add more CodeSandbox projects here
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='projects' className='py-20 bg-gray-100 dark:bg-gray-800'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Featured Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Here are some of my recent projects and experiments
          </p>
        </motion.div>

        {/* GitHub Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden'
            >
              <div className='relative h-48'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CodeSandbox Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            CodeSandbox Experiments
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Check out my interactive code experiments and demos
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sandboxProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={project.codesandbox}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    View on CodeSandbox
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

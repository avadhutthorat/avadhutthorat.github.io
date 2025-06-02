'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Software Development Engineer II',
    company: 'Fabric Inc',
    period: '2021 - present',
    description: [
      'Led frontend development of a Product Information Management (PIM) and Order Management System (OMS) with AI-powered features using React.js and Next.js',
      'Implemented AI-based product categorization and smart inventory management in PIM using machine learning models',
      'Developed intelligent order routing and demand forecasting capabilities in OMS using predictive analytics',
      'Built reusable component library and design system to ensure consistency across the platform',
      'Optimized application performance through code splitting, lazy loading, and efficient state management',
      'Created RESTful APIs using Node.js and Express.js for product management and order processing',
      'Developed API endpoints for inventory tracking, order status updates, and user authentication',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Globant India',
    period: '2020 - 2021',
    description: [
      'Worked on a project for a client in the financial sector, where I was responsible for the frontend development of the application.',
      'Developed and maintained a comprehensive UI component library using React and TypeScript',
      'Created reusable components following design system guidelines and accessibility standards',
      'Developed a proof-of-concept user authentication system using Node.js and Express.js',
      'Implemented secure user registration and login flows with password hashing using bcrypt',
      'Created JWT-based authentication middleware for protected API routes',
      'Built RESTful API endpoints for user management including signup, login, and password reset',
    ],
  },
  {
    title: 'Frontend Web Developer',
    company: 'Optymyze',
    period: '2019 - 2020',
    description: [
      'Developed and maintained multiple client-facing applications',
      'Implemented CI/CD pipelines using GitHub Actions',
      'Collaborated with UX team to improve user experience',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Atos India',
    period: '2017 - 2019',
    description: [
      'Built responsive web applications using React and Redux',
      'Implemented modern UI/UX designs using Sass and CSS-in-JS',
      'Worked directly with clients to gather requirements',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='experience' className='py-20'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Work Experience
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            My professional journey and achievements
          </p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='mb-12 relative pl-8 border-l-2 border-blue-500'
            >
              <div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2' />
              <div className='mb-2'>
                <h3 className='text-xl font-bold'>{experience.title}</h3>
                <p className='text-blue-600 dark:text-blue-400'>
                  {experience.company}
                </p>
                <p className='text-gray-500 dark:text-gray-400 text-sm'>
                  {experience.period}
                </p>
              </div>
              <ul className='list-disc list-inside text-gray-600 dark:text-gray-300'>
                {experience.description.map((item, i) => (
                  <li key={i} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

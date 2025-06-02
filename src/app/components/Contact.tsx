'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='contact' className='py-20 bg-gray-100 dark:bg-gray-800'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Have a question or want to work together?
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-200 mb-8 font-medium'>
            avadhutthorat40@gmail.com
          </p>
          <a
            href='mailto:avadhutthorat40@gmail.com'
            className='inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200'
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}

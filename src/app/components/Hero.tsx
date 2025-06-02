'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center'
    >
      <div className='container mx-auto px-6 pt-24 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center lg:text-left'
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
              Hi, I'm{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Avadhut Thorat
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
              Frontend-First Full Stack Developer | JavaScript, React & Node.js
              | System Design Enthusiast
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <a
                href='#projects'
                className='px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors'
              >
                View Projects
              </a>
              <a
                href='#contact'
                className='px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors'
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='relative w-full max-w-lg mx-auto aspect-square'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse' />
            <Image
              src='/profile-placeholder.jpg'
              alt='Profile'
              width={500}
              height={500}
              className='relative rounded-full shadow-2xl'
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

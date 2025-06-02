'use client';

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='#home' className='-m-1.5 p-1.5 text-xl font-bold'>
            Avadhut Thorat
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            )}
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 hover:text-gray-600 dark:hover:text-gray-300'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

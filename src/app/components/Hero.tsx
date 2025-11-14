"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen mt-20 sm:mt-0"
    >
      <div className="container px-6 pt-24 pb-12 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1
              id="hero-heading"
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
                Avadhut Thorat
              </span>
            </h1>
            <p className="mb-8 text-lg font-semibold leading-relaxed text-transparent md:text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              Senior Frontend Engineer specializing in React, TypeScript, and
              scalable UI architecture — building fast, accessible, and
              future-ready web applications.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-blue-600 transition-colors border-2 border-blue-600 rounded-full dark:text-blue-400 hover:bg-blue-600 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-lg mx-auto aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="relative rounded-full shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

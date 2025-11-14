"use client";

import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
  {
    name: "Resume",
    href: "/avadhut-resume.pdf",
    type: "resume",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* AI gradient glow background */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent dark:from-blue-500/25 dark:via-purple-500/15 dark:to-transparent"
        aria-hidden="true"
      />

      {/* The previous gradient line is removed */}

      <nav
        className="relative mt-3 mx-4 md:mx-6 lg:mx-8 flex w-auto items-center justify-between rounded-full
             border border-white/40 bg-white/70 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.35)]
             backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="#home"
            className="-m-1.5 p-1.5 text-lg md:text-xl font-bold tracking-tight"
            aria-label="Go to top / Home"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text">
              Avadhut Thorat
            </span>
          </Link>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5
                       bg-white/60 backdrop-blur-md shadow-md dark:bg-slate-800/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => {
            const isResume = item.type === "resume";

            if (isResume) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full 
                             bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm 
                             hover:shadow-md hover:scale-[1.03] transition-all"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold leading-6 text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-50"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="px-4 mt-2 lg:hidden">
          <div className="p-2 space-y-1 border shadow-xl rounded-2xl border-white/30 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
            {navigation.map((item) => {
              const isResume = item.type === "resume";

              if (isResume) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-white shadow-sm rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-800 rounded-xl dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-slate-800/80"
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

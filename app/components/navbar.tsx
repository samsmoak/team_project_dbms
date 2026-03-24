'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { useTheme } from "./ThemeProvider";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
        isDark ? 'bg-accent' : 'bg-gray-300'
      } ${className ?? ''}`}
      aria-label="Toggle dark mode"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project1", label: "Extended Proposal" },
    { href: "/progress-report", label: "Progress Report" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900/95 dark:backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-slate-700 z-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Projects
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-primary pb-0.5 font-semibold"
                    : "text-black dark:text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-black dark:text-slate-300 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

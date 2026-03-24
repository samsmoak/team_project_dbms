'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center justify-between px-4 py-3.5 rounded-2xl">
      <span className="text-lg font-medium text-black dark:text-slate-300">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
          isDark ? 'bg-accent' : 'bg-gray-300'
        }`}
        aria-label="Toggle dark mode"
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project1", label: "Extended Proposal" },
    { href: "/progress-report", label: "Progress Report" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-60 w-80 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Team Projects</div>
            <button
              onClick={onClose}
              className="text-black dark:text-slate-400 hover:text-primary transition-colors p-2 -mr-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block px-4 py-3.5 text-lg font-medium rounded-2xl transition-all ${
                  isActive(link.href)
                    ? "bg-primary/5 dark:bg-primary/10 text-primary font-semibold"
                    : "text-black dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-gray-200 dark:border-slate-700 mt-4">
              <ThemeToggle />
            </div>
          </nav>

          <div className="p-6 border-t border-gray-200 dark:border-slate-700 text-center text-sm text-black dark:text-slate-500">
            Academic Team Projects Showcase
          </div>
        </div>
      </div>
    </>
  );
}

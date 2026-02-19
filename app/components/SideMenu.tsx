'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Backdrop - only on mobile/tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Side Menu - only on mobile/tablet */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-5 border-b flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Team Projects</div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-primary transition-colors p-2 -mr-2"
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
            <Link
              href="/"
              onClick={onClose}
              className={`block px-4 py-3.5 text-lg font-medium rounded-2xl transition-all ${
                isActive("/")
                  ? "bg-primary/5 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/project1"
              onClick={onClose}
              className={`block px-4 py-3.5 text-lg font-medium rounded-2xl transition-all ${
                isActive("/project1")
                  ? "bg-primary/5 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Project 1
            </Link>
            <Link
              href="/project2"
              onClick={onClose}
              className={`block px-4 py-3.5 text-lg font-medium rounded-2xl transition-all ${
                isActive("/project2")
                  ? "bg-primary/5 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Project 2
            </Link>
          </nav>

          <div className="p-6 border-t text-center text-sm text-gray-400">
            Academic Team Projects Showcase
          </div>
        </div>
      </div>
    </>
  );
}
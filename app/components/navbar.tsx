'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Team Projects
          </Link>

          {/* Desktop Navigation - hidden on mobile/tablet */}
          <div className="hidden lg:flex gap-8 text-sm font-medium">
            <Link
              href="/"
              className={`hover:text-primary transition-colors ${
                isActive("/") ? "text-primary border-b-2 border-primary pb-0.5 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/project1"
              className={`hover:text-primary transition-colors ${
                isActive("/project1") ? "text-primary border-b-2 border-primary pb-0.5 font-semibold" : ""
              }`}
            >
              Project 1
            </Link>
            <Link
              href="/project2"
              className={`hover:text-primary transition-colors ${
                isActive("/project2") ? "text-primary border-b-2 border-primary pb-0.5 font-semibold" : ""
              }`}
            >
              Project 2
            </Link>
          </div>

          {/* Hamburger - only on mobile & tablet */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
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
      </nav>

      {/* Side Menu - only on mobile & tablet */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
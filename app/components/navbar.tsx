// app/components/Navbar.tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Team Projects
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link
            href="/"
            className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary border-b-2 border-primary pb-0.5 font-semibold' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/project1"
            className={`hover:text-primary transition-colors ${isActive('/project1') ? 'text-primary border-b-2 border-primary pb-0.5 font-semibold' : ''}`}
          >
            Project 1
          </Link>
          <Link
            href="/project2"
            className={`hover:text-primary transition-colors ${isActive('/project2') ? 'text-primary border-b-2 border-primary pb-0.5 font-semibold' : ''}`}
          >
            Project 2
          </Link>
        </div>
      </div>
    </nav>
  );
}
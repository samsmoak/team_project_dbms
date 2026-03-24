'use client';

import { useState, useEffect, useCallback } from 'react';

type Props = {
  sections: { id: string; title: string }[];
};

export default function TableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  const updateActiveSection = useCallback(() => {
    const triggerLine = 120;
    let current = sections[0]?.id || '';

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= triggerLine) {
        current = id;
      }
    }
    setActiveId(current);
  }, [sections]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateActiveSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-card dark:shadow-none p-6 lg:sticky lg:top-24 transition-colors duration-300">
      <h3 className="font-semibold text-lg mb-5 text-primary border-b border-gray-100 dark:border-slate-700 pb-3">
        Table of Contents
      </h3>
      <ul className="space-y-1 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`relative block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-gray-50 dark:hover:bg-slate-800 ${
                activeId === section.id
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-primary font-semibold'
                  : 'text-black dark:text-slate-400 hover:text-black dark:hover:text-slate-200'
              }`}
            >
              {/* Animated left indicator */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-primary transition-all duration-300 ease-out ${
                  activeId === section.id ? 'h-6 opacity-100' : 'h-0 opacity-0'
                }`}
              />
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

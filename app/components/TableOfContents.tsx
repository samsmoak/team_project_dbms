// app/components/TableOfContents.tsx
'use client';

import { useState, useEffect } from 'react';

type Props = {
  sections: { id: string; title: string }[];
};

export default function TableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-100px 0px -30% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

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
    <div className="bg-white border border-gray-100 rounded-xl shadow-card p-6 lg:sticky lg:top-24">
      <h3 className="font-semibold text-lg mb-5 text-primary border-b pb-3">Table of Contents</h3>
      <ul className="space-y-1 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all hover:bg-gray-50 ${
                activeId === section.id
                  ? 'bg-blue-50 text-primary font-semibold border-l-4 border-primary pl-3'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
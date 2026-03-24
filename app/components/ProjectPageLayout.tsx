'use client';

import Image from 'next/image';
import Link from 'next/link';
import TableOfContents from './TableOfContents';
import RichContentRenderer from './RichContentRenderer';
import AnimateOnScroll from './AnimateOnScroll';
import type { RichSection } from '../data/types';

type Props = {
  title: string;
  subtitle: string;
  date: string;
  downloadHref: string;
  downloadLabel: string;
  sections: RichSection[];
  teamMembers: { name: string; image: string }[];
};

export default function ProjectPageLayout({
  title,
  subtitle,
  date,
  downloadHref,
  downloadLabel,
  sections,
  teamMembers,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* TOC Sidebar */}
        <div className="lg:col-span-3">
          <TableOfContents sections={sections} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <div className="relative bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl shadow-card dark:shadow-none p-10 overflow-hidden transition-colors duration-300">
            {/* Gradient left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-violet-500" />

            <AnimateOnScroll>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-black dark:text-slate-100 mb-2">
                {title}
              </h1>
              <p className="text-sm text-black dark:text-slate-400 mb-2">{subtitle}</p>
              <p className="text-sm text-black dark:text-slate-400 mb-8">{date}</p>

              <div className="flex flex-col items-end mb-10">
                <h2 className="text-sm font-semibold text-black dark:text-slate-300">Download</h2>
                <Link
                  href={downloadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-red-600"
                  >
                    <path d="M7 3C5.9 3 5 3.9 5 5v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-5-5H7zm5 13.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-1.5c1.4 0 2.5-1.1 2.5-2.5S13.4 10 12 10s-2.5 1.1-2.5 2.5S10.6 15 12 15zm1-8V4.5L16.5 9H13z" />
                  </svg>
                  {downloadLabel}
                </Link>
              </div>
            </AnimateOnScroll>

            {sections.map((section, index) => (
              <AnimateOnScroll key={section.id} delay={Math.min(index * 30, 150)}>
                <section
                  id={section.id}
                  className="mb-16 scroll-mt-24"
                >
                  <h2 className="text-2xl font-semibold mb-5 text-black dark:text-slate-100">
                    {section.title}
                  </h2>
                  <RichContentRenderer blocks={section.content} />
                </section>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Team Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl shadow-card dark:shadow-none p-8 lg:sticky lg:top-24 transition-colors duration-300">
            <h3 className="font-semibold text-lg mb-6 w-full text-center text-black dark:text-slate-100">
              Members
            </h3>
            <div className="flex flex-col gap-4">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors duration-200 group"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white dark:ring-slate-700 transition-transform duration-200 group-hover:scale-105 shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black dark:text-slate-400 group-hover:text-indigo-500 transition-colors duration-200 text-center leading-snug">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
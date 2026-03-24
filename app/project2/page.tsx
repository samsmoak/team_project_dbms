// app/project2/page.tsx
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "../components/TableOfContents";
import { project2Sections } from "../data/project2Sections";

export default function Project2() {
  const teamMembers = [
   { name: "Samuel Enam Zih", image: "/images/sam.png" },
    { name: "Christopher Drake Williams", image: "/images/Chris.png" },
    { name: "Arjun Sivakumar", image: "/images/Arjun.png" },
    { name: "Ki Hong Park", image: "/images/park.png" },
    { name: "Shiyi Liu", image: "/images/liu.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <TableOfContents sections={project2Sections} />
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl shadow-card dark:shadow-none p-10 transition-colors duration-300">
            <h1 className="text-4xl font-bold leading-tight text-black dark:text-slate-100 mb-2">
              Project 2: Strategic Pivots and Yield Dynamics – Evidence from the GENIUS Act Transition
            </h1>
            <p className="text-black dark:text-slate-400 mb-10">Posted: February 4, 2026 • 47 pages</p>

            {project2Sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-5 text-black dark:text-slate-100">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-black dark:text-slate-300">
                  {section.content}
                </p>
              </section>
            ))}

            <div className="border-t border-gray-200 dark:border-slate-700 pt-10">
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-slate-100">Download Project Proposal</h2>
              <Link
                href="/proposals/Proposal_(Leader-LName)_(Member1-LName)_(Member2-LName)_(Member3-LName)_(Member4-LName).pdf"
                download
                className="inline-flex items-center bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

          <div className="lg:col-span-3">
                       <div className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl shadow-card dark:shadow-none p-8 lg:sticky lg:top-24 transition-colors duration-300">
                 <h3 className="font-semibold text-lg mb-6 w-full text-center text-black dark:text-slate-100">Team Members</h3>
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
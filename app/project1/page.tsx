// app/project1/page.tsx
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "../components/TableOfContents";
import { project1Sections } from "../data/project1Sections";

export default function Project1() {
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
        {/* TOC Sidebar */}
        <div className="lg:col-span-3">
          <TableOfContents sections={project1Sections} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <div className="bg-white border border-gray-100 rounded-xl shadow-card p-10">
                      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-2">
            CrisisEcho: LLM-Powered Hyperlocal Emergency Detection from Social Media
          </h1>
          <p className="text-muted mb-10">Posted: February 21, 2026 • CS5614 Database Management Systems</p>
        <div className="flex flex-col items-end ">
        <h2 className="text-sm font-semibold ">Download </h2>
        <Link
          href="/proposals/DBMS_PROJECT_PROPOSAL_C.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path d="M7 3C5.9 3 5 3.9 5 5v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-5-5H7zm5 13.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-1.5c1.4 0 2.5-1.1 2.5-2.5S13.4 10 12 10s-2.5 1.1-2.5 2.5S10.6 15 12 15zm1-8V4.5L16.5 9H13z"/>
          </svg>
          CrisisEcho_Proposal.pdf
        </Link>
      </div>

            {project1Sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-5 text-gray-900">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {section.content}
                </p>
              </section>
            ))}

                
          </div>
        </div>

        {/* Team Sidebar */}
        <div className="lg:col-span-3">
                <div className="bg-white border border-gray-100 rounded-xl shadow-card p-8 lg:sticky lg:top-24">
          <h3 className="font-semibold text-lg mb-6 w-full text-center">Team Members</h3>
          <div className="flex flex-col gap-4">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-200 group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white transition-transform duration-200 group-hover:scale-105 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-indigo-500 transition-colors duration-200 text-center leading-snug">
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
// app/project1/page.tsx
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "../components/TableOfContents";
import { project1Sections } from "../data/project1Sections";

export default function Project1() {
  const teamMembers = [
    { name: "Samuel Enam Zih", image: "/images/sam.png" },
    { name: "Member 2", image: "https://via.placeholder.com/150?text=Member+2" },
    { name: "Member 3", image: "https://via.placeholder.com/150?text=Member+3" },
    { name: "Member 4", image: "https://via.placeholder.com/150?text=Member+4" },
    { name: "Member 5", image: "https://via.placeholder.com/150?text=Member+5" },
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
              Project 1: Domicile vs. Protocol – Empirically Disentangling Regulatory Risk Premiums in the Post-GENIUS Act Era
            </h1>
            <p className="text-muted mb-10">Posted: February 4, 2026 • 52 pages</p>

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

            <div className="border-t pt-10">
              <h2 className="text-2xl font-semibold mb-4">Download Project Proposal</h2>
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

        {/* Team Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-100 rounded-xl shadow-card p-8 lg:sticky lg:top-24">
            <h3 className="font-semibold text-lg mb-6">Team Members</h3>
            <div className="space-y-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={52}
                    height={52}
                    className="rounded-full border border-white shadow"
                  />
                  <p className="font-medium text-gray-900">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
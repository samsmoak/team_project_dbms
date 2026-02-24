// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const teamMembers = [
    { name: "Samuel Enam Zih", image: "/images/sam.png" },
    { name: "Christopher Drake Williams", image: "/images/Chris.png" },
    { name: "Arjun Sivakumar", image: "/images/Arjun.png" },
    { name: "Ki Hong Park", image: "/images/park.png" },
    { name: "Shiyi Liu", image: "/images/liu.png" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-card rounded-xl shadow-card p-12 text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Team Projects Showcase</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Current Project: A real-time crisis awareness platform that ingests multi-source social media streams and applies a RAG-powered LLM agent chain to detect, cluster, and summarize local emergencies before official channels respond. Built on MongoDB Atlas with native geospatial indexing, Pinecone vector search, and a Go API backend, CrisisEcho delivers severity-scored alerts to a React map interface via WebSocket — putting hyperlocal crisis awareness directly in the hands of everyday people.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          {/* <Link href="/project1" className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Project 1
          </Link>
          <Link href="/project2" className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Project 2
          </Link> */}
           <Link
          href="/proposals/DBMS_PROJECT_PROPOSAL_Y.pdf"
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
      </div>

     <div className="bg-white border border-gray-100 rounded-xl shadow-card p-10">
  <h2 className="text-3xl font-semibold text-center mb-10">Our Team</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {teamMembers.map((member, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-200 group"
      >
        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-white shrink-0 transition-transform duration-200 group-hover:scale-105">
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
  );
}
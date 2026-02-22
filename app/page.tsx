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
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link href="/project1" className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Project 1
          </Link>
          <Link href="/project2" className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Project 2
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
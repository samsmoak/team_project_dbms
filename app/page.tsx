// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Profile image above the showcase */}
      <div className="flex justify-center mb-8">
        <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
          <Image
            src="/images/sam.png"
            alt="Samuel Enam Zih"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-card p-12 text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects Showcase</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Current Project: A real-time crisis awareness platform that ingests multi-source social media streams and applies a RAG-powered LLM agent chain to detect, cluster, and summarize local emergencies before official channels respond. Built on MongoDB Atlas with native geospatial indexing, Pinecone vector search, and a Go API backend, CrisisEcho delivers severity-scored alerts to a React map interface via WebSocket — putting hyperlocal crisis awareness directly in the hands of everyday people.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <Link
            href="/proposals/DBMS_PROJECT_PROPOSAL_ZIH.pdf"
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

    
    </div>
  );
}
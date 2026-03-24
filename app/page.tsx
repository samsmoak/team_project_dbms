// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const documents = [
  {
    href: "/proposals/DBMS_PROJECT_PROPOSAL_ZIH.pdf",
    title: "CrisisEcho Proposal",
    subtitle: "Initial project proposal & scope definition",
    badge: "PROPOSAL",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    href: "/proposals/CRISISECHO_EXTENDED_PROPOSAL.pdf",
    title: "Extended Proposal",
    subtitle: "Detailed architecture & implementation plan",
    badge: "EXTENDED",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    href: "/proposals/CRISISECHO_PROGRESS_REPORT.pdf",
    title: "Progress Report",
    subtitle: "Current development status & milestones",
    badge: "REPORT",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
];

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M7 3C5.9 3 5 3.9 5 5v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-5-5H7zm5 13.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-1.5c1.4 0 2.5-1.1 2.5-2.5S13.4 10 12 10s-2.5 1.1-2.5 2.5S10.6 15 12 15zm1-8V4.5L16.5 9H13z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Hero Card */}
      <div className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-card dark:shadow-none border border-gray-200 dark:border-slate-700 overflow-hidden mb-10 transition-colors duration-300">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

        <div className="px-10 pt-10 pb-12 text-center">

          {/* Profile avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-lg">
              <Image
                src="/images/sam.png"
                alt="Samuel Enam Zih"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-black dark:text-slate-100 mb-2 tracking-tight">
            Projects Showcase
          </h1>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-6">
            Samuel Enam Zih
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700" />
            <span className="text-gray-400 dark:text-slate-600 text-sm">&#10022;</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700" />
          </div>

          {/* Current project label */}
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Current Project
          </p>

          {/* Project name */}
          <h2 className="text-2xl font-bold text-black dark:text-slate-200 mb-4">CrisisEcho</h2>

          {/* Description */}
          <p className="text-base text-black dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A real-time crisis awareness platform that ingests multi-source social media
            streams and applies a RAG-powered LLM agent chain to detect, cluster, and
            summarize local emergencies before official channels respond. Built on{" "}
            <span className="font-medium text-black dark:text-slate-300">MongoDB Atlas</span> with native
            geospatial indexing,{" "}
            <span className="font-medium text-black dark:text-slate-300">Pinecone</span> vector search,
            and a <span className="font-medium text-black dark:text-slate-300">Go API</span> backend &mdash;
            delivering severity-scored alerts to a React map interface via WebSocket.
          </p>

          {/* Tech pill tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["MongoDB Atlas", "Pinecone", "Go", "React", "WebSocket", "LLM / RAG"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-black dark:text-slate-400"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-5 rounded-full bg-primary" />
          <h3 className="text-sm font-semibold tracking-widest uppercase text-black dark:text-slate-400">
            Project Documents
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 bg-white dark:bg-slate-900/50 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5 dark:shadow-none"
            >
              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                  <PdfIcon className="w-5 h-5 text-red-500" />
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full ${doc.badgeColor}`}
                >
                  {doc.badge}
                </span>
              </div>

              {/* Title + subtitle */}
              <div className="flex-1">
                <p className="font-semibold text-black dark:text-slate-200 text-sm leading-snug group-hover:text-primary transition-colors">
                  {doc.title}
                </p>
                <p className="text-xs text-black dark:text-slate-400 mt-1 leading-snug">{doc.subtitle}</p>
              </div>

              {/* Download cue */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <DownloadIcon />
                Open PDF
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
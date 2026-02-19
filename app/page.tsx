// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const teamMembers = [
    { name: "Samuel Enam Zih", image: "/images/sam.png" },
    { name: "Member 2", image: "https://via.placeholder.com/150?text=Member+2" },
    { name: "Member 3", image: "https://via.placeholder.com/150?text=Member+3" },
    { name: "Member 4", image: "https://via.placeholder.com/150?text=Member+4" },
    { name: "Member 5", image: "https://via.placeholder.com/150?text=Member+5" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-card rounded-xl shadow-card p-12 text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Team Projects Showcase</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Academic collaboration in the post-GENIUS Act era. Professional research presented with clarity.
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={110}
                height={110}
                className="rounded-full border-4 border-white shadow-md mb-4"
              />
              <p className="font-medium text-gray-900">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
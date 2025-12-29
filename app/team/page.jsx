"use client";
import TeamCard from "../components/TeamCard";

const team = [
  { name: "Nikkee", role: "Founder & Creative Director", avatar: "/images/team/nikkee.jpg" },
  { name: "Sam", role: "Head of Photography", avatar: "/images/team/sam.jpg" },
  { name: "Maya", role: "Producer & Editor", avatar: "/images/team/maya.jpg" }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((t, i) => <TeamCard key={i} {...t} />)}
          </div>
        </div>
      </main>

    </div>
  );
}

import React from "react";

const achievements = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.99z" stroke="#FF0000" strokeWidth="2"/></svg>
    ),
    title: "Google Code-In Winner",
    date: "2023",
    blurb: "Global coding competition winner.",
    description: "Awarded for outstanding open source contributions and project leadership.",
    cert: "https://example.com/cert1.pdf"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#FF0000" strokeWidth="2"/><path d="M8 16l4-8 4 8" stroke="#FF0000" strokeWidth="2"/></svg>
    ),
    title: "React India Finalist",
    date: "2022",
    blurb: "Top 10 in national React hackathon.",
    description: "Built a scalable video platform in 48 hours.",
    cert: "https://example.com/cert2.pdf"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#FF0000" strokeWidth="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#FF0000" strokeWidth="2"/></svg>
    ),
    title: "Open Source Contributor",
    date: "2021",
    blurb: "100+ merged PRs on GitHub.",
    description: "Contributed to major OSS projects including React, Node.js, and Tailwind CSS.",
    cert: "https://example.com/cert3.pdf"
  }
];

export default function AchievementsPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#FF0000]">Achievements</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {achievements.map((a, i) => (
          <div key={i} className="break-inside-avoid bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="mb-2">{a.icon}</div>
            <h2 className="text-lg font-semibold text-[#282828] mb-1 text-center">{a.title}</h2>
            <div className="text-xs text-[#606060] mb-2">{a.date}</div>
            <div className="text-sm text-[#606060] mb-2 text-center">{a.blurb}</div>
            <button
              className="mt-2 px-4 py-1 bg-[#FF0000] text-white rounded-full text-xs hover:bg-[#d90000]"
              onClick={() => window.open(a.cert, "_blank")}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

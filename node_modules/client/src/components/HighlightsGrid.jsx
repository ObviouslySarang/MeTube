import React from "react";

const highlights = [
  {
    title: "YouTube Clone",
    desc: "A full-featured YouTube clone built with MERN stack, featuring video upload, streaming, and comments.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Node.js"],
    views: 1200,
  },
  {
    title: "Portfolio V2",
    desc: "My second-generation portfolio with advanced animations and a blog engine.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tags: ["Next.js", "Tailwind"],
    views: 980,
  },
  {
    title: "Realtime Chat App",
    desc: "A MERN chat app with WebSocket-powered real-time messaging and group chat features.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tags: ["Socket.io", "MongoDB"],
    views: 870,
  },
  {
    title: "Dev Blog Platform",
    desc: "A blogging platform for developers, supporting markdown, code highlighting, and comments.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tags: ["Express", "Markdown"],
    views: 650,
  },
];

export default function HighlightsGrid() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-[#282828]">Latest Highlights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <div key={i} className="bg-white rounded-xl shadow group overflow-hidden relative flex flex-col">
            <div className="relative">
              <img src={h.image} alt={h.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                <svg width="48" height="48" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-base font-semibold text-[#282828] mb-1 truncate">{h.title}</h4>
              <p className="text-sm text-[#606060] mb-2 line-clamp-2">{h.desc}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {h.tags.map(tag => (
                  <span key={tag} className="bg-[#FF0000]/10 text-[#FF0000] text-xs px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center text-xs text-[#606060] mt-auto">
                <svg width="16" height="16" fill="#FFD700" viewBox="0 0 24 24" className="mr-1"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span className="font-bold">{h.views.toLocaleString()} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

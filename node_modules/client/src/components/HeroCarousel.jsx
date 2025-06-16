import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "YouTube Clone",
    summary: "A full-featured YouTube clone built with MERN stack, featuring video upload, streaming, and comments.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    detailsUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Portfolio V2",
    summary: "My second-generation portfolio with advanced animations and a blog engine.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    detailsUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Realtime Chat App",
    summary: "A MERN chat app with WebSocket-powered real-time messaging and group chat features.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    detailsUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Dev Blog Platform",
    summary: "A blogging platform for developers, supporting markdown, code highlighting, and comments.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    detailsUrl: "#",
    liveUrl: "#",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="w-full bg-[#282828] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[340px] relative">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={projects[index].image}
            src={projects[index].image}
            alt={projects[index].title}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {/* Carousel Controls */}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF0000] text-white rounded-full p-2 shadow hover:scale-110 transition z-10">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF0000] text-white rounded-full p-2 shadow hover:scale-110 transition z-10">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {/* Right: Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-8 text-white">
        <h2 className="text-3xl font-bold mb-2 text-[#FF0000]">{projects[index].title}</h2>
        <p className="text-lg mb-6 text-[#e0e0e0]">{projects[index].summary}</p>
        <div className="flex space-x-4">
          <a href={projects[index].detailsUrl} className="bg-[#FF0000] hover:bg-[#d90000] text-white px-5 py-2 rounded-full font-semibold shadow transition">View Details</a>
          <a href={projects[index].liveUrl} className="border border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white px-5 py-2 rounded-full font-semibold shadow transition">Live Demo</a>
        </div>
        {/* Dots */}
        <div className="flex space-x-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#FF0000]' : 'bg-[#606060]'} transition`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

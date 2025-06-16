import React from "react";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#FF0000]">About Me</h1>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8">
        <img src="https://i.pravatar.cc/120?img=3" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-[#FF0000] mx-auto md:mx-0" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-[#282828]">Who I Am</h2>
          <p className="text-[#606060] mb-4">I'm a passionate full-stack developer with a love for building interactive, scalable web apps. My journey started with curiosity and grew into a career of continuous learning and open source contributions.</p>
          <h2 className="text-xl font-semibold mb-2 text-[#282828]">My Journey</h2>
          <p className="text-[#606060] mb-4">From hackathons to production apps, I thrive on solving real-world problems with code. I enjoy collaborating, mentoring, and sharing knowledge through blogs and talks.</p>
          <h2 className="text-xl font-semibold mb-2 text-[#282828]">What I’m Learning</h2>
          <p className="text-[#606060]">Currently exploring advanced React patterns, TypeScript, and cloud-native architectures to deliver even better user experiences.</p>
        </div>
      </div>
    </section>
  );
}

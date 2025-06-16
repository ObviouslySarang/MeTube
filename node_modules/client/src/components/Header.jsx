import React, { useState } from "react";
import Logo from "./Logo";

const anchors = ["Projects", "Achievements", "Blog", "Contact"];

export default function Header() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const filteredAnchors = anchors.filter(a => a.toLowerCase().includes(search.toLowerCase()));

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 sticky top-0 z-30">
      {/* Left: Logo */}
      <Logo />

      {/* Center: Search */}
      <div className="relative flex-1 max-w-xl mx-4 flex items-center">
        <input
          className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF0000] text-black bg-gray-50"
          placeholder="Search my dev journey…"
          value={search}
          onChange={e => { setSearch(e.target.value); setShowDropdown(true); }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          aria-label="Search"
        />
        {/* Voice Icon */}
        <button
          className="ml-2 p-2 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-110"
          aria-label="Voice Search"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <rect x="8" y="4" width="4" height="8" rx="2" fill="#606060" />
            <rect x="9" y="13" width="2" height="3" rx="1" fill="#606060" />
          </svg>
        </button>
        {/* Dropdown */}
        {showDropdown && search && (
          <ul className="absolute left-0 right-0 mt-2 bg-white border rounded shadow z-10">
            {filteredAnchors.length ? filteredAnchors.map(a => (
              <li key={a} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#282828]" onMouseDown={() => setSearch(a)}>{a}</li>
            )) : <li className="px-4 py-2 text-gray-400">No matches</li>}
          </ul>
        )}
      </div>

      {/* Right: Add New, Theme, Avatar */}
      <div className="flex items-center space-x-4">
        {/* Add New Dropdown */}
        <div className="relative">
          <button
            className="p-2 rounded-full bg-[#FF0000] hover:bg-[#d90000] text-white flex items-center justify-center"
            aria-label="Add New"
            onClick={() => setShowAddMenu(v => !v)}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect x="9" y="4" width="2" height="12" rx="1" fill="white" />
              <rect x="4" y="9" width="12" height="2" rx="1" fill="white" />
            </svg>
          </button>
          {showAddMenu && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-20 animate-fade-in">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">New Project</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">New Achievement</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">New Blog Post</li>
            </ul>
          )}
        </div>
        {/* Theme Toggle */}
        <button className="p-2 rounded-full hover:bg-gray-200" aria-label="Toggle Theme">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5" fill="#FFB300" />
            <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#FFB300" strokeWidth="1.5" />
          </svg>
        </button>
        {/* User Avatar */}
        <div className="relative">
          <button className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FF0000]" onClick={() => setShowProfile(v => !v)} aria-label="User Menu">
            <img src="https://i.pravatar.cc/40?img=3" alt="User avatar" className="w-full h-full object-cover" />
          </button>
          {showProfile && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-20 animate-fade-in">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

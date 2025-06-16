import React from "react";

const Logo = () => (
  <button aria-label="Home" className="flex items-center space-x-2 group">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#FF0000" />
      <polygon points="13,10 24,16 13,22" fill="#fff" />
    </svg>
    <span className="text-xl font-bold text-[#282828] group-hover:text-[#FF0000]">SD</span>
  </button>
);

export default Logo;

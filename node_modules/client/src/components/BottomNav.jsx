import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9" stroke="#282828" strokeWidth="2"/><path d="M9 21V9h6v12" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "/" },
  { label: "About Me", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#282828" strokeWidth="2"/><path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "/about" },
  { label: "Achievements", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.99z" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "/achievements" },
  { label: "Projects", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#282828" strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "#projects" },
  { label: "Blog", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#282828" strokeWidth="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "#blog" },
  { label: "Contact", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" stroke="#282828" strokeWidth="2"/><path d="M22 6l-10 7L2 6" stroke="#282828" strokeWidth="2"/></svg>
  ), href: "#contact" },
];

export default function BottomNav() {
  const location = useLocation();
  return (
    <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-30">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`flex flex-col items-center text-xs text-[#282828] hover:text-[#FF0000] group ${location.pathname === item.href ? 'font-bold text-[#FF0000]' : ''}`}
        >
          <span className="w-6 h-6 flex items-center justify-center mb-1">{item.icon}</span>
          <span className="truncate">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

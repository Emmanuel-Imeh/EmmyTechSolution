"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/training" },
    { name: "Services", href: "/services" },
    { name: "Register", href: "/register" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex justify-between items-center">

          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            EmmyTech
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 border-t border-zinc-800 pt-4">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

          </div>
        )}

      </div>

    </nav>
  );
}
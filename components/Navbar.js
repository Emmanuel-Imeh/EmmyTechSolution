import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Training", href: "/training" },
  { name: "Services", href: "/services" },
  { name: "Register", href: "/register" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400"
        >
          EmmyTech
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
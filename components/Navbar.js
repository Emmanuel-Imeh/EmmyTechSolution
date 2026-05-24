import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 border-b border-gray-700">

      <div className="flex gap-6">

        <Link href="/">Home</Link>

        <Link href="/training">Training</Link>

        <Link href="/services">Services</Link>

        <Link href="/contact">Contact</Link>

        <Link href="/register">Register</Link>

      </div>

    </nav>
  );
}
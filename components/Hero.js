import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">

      <div className="text-center max-w-4xl px-6">

        <p className="text-cyan-400 font-semibold mb-4">
          Welcome to EmmyTech Solution
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Learn Skills.
          <br />
          Build Solutions.
          <br />
          Grow Careers.
        </h1>

        <p className="mt-6 text-gray-400 text-base md:text-lg">
          We provide technology training and engineering
          solutions for students, professionals and businesses.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/register"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
          >
            Enroll Now
          </Link>

          <Link
            href="/services"
            className="border border-zinc-700 px-6 py-3 rounded-lg"
          >
            Explore Services
          </Link>

        </div>

      </div>

    </section>
  );
}
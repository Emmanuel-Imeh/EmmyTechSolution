import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="p-10 text-center">

        <h1 className="text-5xl font-bold text-blue-600">
          EmmyTech Solution
        </h1>

        <p className="mt-6 text-xl">
          Learn digital skills and build real tech solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="/training"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Start Learning
          </Link>

          <Link
            href="/services"
            className="border border-black px-6 py-3 rounded"
          >
            Our Services
          </Link>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="p-10 bg-gray-100">

        <h2 className="text-3xl font-bold">
          About EmmyTech
        </h2>

        <p className="mt-4 text-lg">
          EmmyTech Solution helps students and businesses
          gain digital skills and modern technology solutions.
        </p>

      </section>

    </main>
  );
}

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 text-center">

      <h2 className="text-4xl font-bold">
        Ready to Start Your Tech Journey?
      </h2>

      <p className="mt-4 text-gray-400">
        Join EmmyTech today and build practical digital skills.
      </p>

      <Link
        href="/register"
        className="inline-block mt-8 bg-cyan-500 px-8 py-4 rounded-lg font-medium"
      >
        Register Now
      </Link>

    </section>
  );
}
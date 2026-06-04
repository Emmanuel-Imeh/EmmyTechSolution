import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Computer Training
            </h3>

            <p className="mt-3 text-gray-400">
              Learn digital skills from beginner
              to professional level.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Cloud Engineering
            </h3>

            <p className="mt-3 text-gray-400">
              AWS, Docker, Kubernetes and
              Infrastructure as Code.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Business Solutions
            </h3>

            <p className="mt-3 text-gray-400">
              Modern technology services for
              growing businesses.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}
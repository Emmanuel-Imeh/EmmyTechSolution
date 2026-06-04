export default function TrainingSection() {
  return (
    <section className="bg-zinc-900 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Training Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Computer Basics
            </h3>

            <p className="mt-3 text-gray-400">
              Learn computer fundamentals,
              Microsoft Office and internet skills.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Cloud & DevOps
            </h3>

            <p className="mt-3 text-gray-400">
              AWS, Docker, Kubernetes and
              modern deployment practices.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
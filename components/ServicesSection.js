export default function ServicesSection() {
  const services = [
    {
      title: "Computer Training",
      description:
        "Learn essential digital skills from beginner to advanced level.",
    },
    {
      title: "Cloud Engineering",
      description:
        "AWS infrastructure, Docker, Kubernetes and DevOps solutions.",
    },
    {
      title: "Website Development",
      description:
        "Modern websites and web applications for businesses.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
          >
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
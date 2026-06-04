export default function WhyChooseUs() {
  const reasons = [
    "Practical Hands-On Training",
    "Industry Relevant Skills",
    "Affordable Learning Programs",
    "Real Project Experience",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center">
        Why Choose EmmyTech?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {reasons.map((reason) => (
          <div
            key={reason}
            className="bg-zinc-900 p-5 rounded-xl"
          >
            ✓ {reason}
          </div>
        ))}

      </div>

    </section>
  );
}
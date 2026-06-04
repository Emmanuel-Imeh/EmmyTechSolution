export default function Dashboard() {
  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bbg-zinc-900
p-6
rounded-xl
border
border-zinc-800
hover:border-cyan-400
hover:-translate-y-2
transition
duration-300">
          <h2 className="text-gray-400">
            Total Students
          </h2>

          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bbg-zinc-900
p-6
rounded-xl
border
border-zinc-800
hover:border-cyan-400
hover:-translate-y-2
transition
duration-300">
          <h2 className="text-gray-400">
            Courses
          </h2>

          <p className="text-4xl font-bold mt-2">
            2
          </p>
        </div>

        <div className="bbg-zinc-900
p-6
rounded-xl
border
border-zinc-800
hover:border-cyan-400
hover:-translate-y-2
transition
duration-300">
          <h2 className="text-gray-400">
            Registrations
          </h2>

          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

      </div>

    </main>
  );
}
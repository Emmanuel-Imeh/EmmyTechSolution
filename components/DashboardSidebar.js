import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="w-full md:w-64 bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        EmmyTech
      </h2>

      <nav className="flex flex-row md:flex-col gap-4 overflow-x-auto">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/students">
          Students
        </Link>

        <Link href="/dashboard/courses">
          Courses
        </Link>

        <Link href="/dashboard/settings">
          Settings
        </Link>

      </nav>

    </aside>
  );
}
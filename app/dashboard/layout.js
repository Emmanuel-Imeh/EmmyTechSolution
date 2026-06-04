import DashboardSidebar from "../../components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">

      <DashboardSidebar />

      <main className="flex-1 p-4 md:p-8">
        {children}
      </main>

    </div>
  );
}
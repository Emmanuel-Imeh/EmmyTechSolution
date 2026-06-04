export default function StudentsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Students
      </h1>

        <div className="bg-zinc-900 rounded-xl p-6">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Course</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>No students yet</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>

            </div>

      </div>
    </>
  );
}

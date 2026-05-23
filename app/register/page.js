export default function Register() {
  return (
    <main className="p-10 max-w-xl mx-auto">

      <h1 className="text-4xl font-bold">
        Student Registration
      </h1>

      <form className="mt-8 flex flex-col gap-4">

        {/* FULL NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded"
        />

        {/* PHONE */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded"
        />

        {/* COURSE */}
        <select className="border p-3 rounded">

          <option>
            Select Course
          </option>

          <option>
            Computer Basics
          </option>

          <option>
            Microsoft Office
          </option>

        </select>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded"
        >
          Register
        </button>

      </form>

    </main>
  );
}

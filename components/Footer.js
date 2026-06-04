export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">

        <p>
          © {new Date().getFullYear()} EmmyTech Solution.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}
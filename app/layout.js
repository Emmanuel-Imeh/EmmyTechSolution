import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "EmmyTech Solution",
  description: "Tech training and engineering services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}

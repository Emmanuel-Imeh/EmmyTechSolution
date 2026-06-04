import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "EmmyTech Solution",
  description: "Tech training and engineering services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-x-hidden">

        <Navbar />

        {children}

        <Footer />
        <WhatsAppButton />

      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "cs guy writes",
  description: "Syed Faysel Ahammad Rajo's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">
            Syed Faysel Writes
          </h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my articles & blogs. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>&copy; Syed Faysel Ahammad Rajo | 2024</h3>
        <br />
        <p>Design - Pixegami. I literally copied</p>
      </div>
    </footer>
  );

  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="gBPl8PRPQlE7TZUTQTRJ8O1nLvNc1lso7IqyNYWzrTY"
        />
      </head>
      <body>
        <Navbar />
        <div className="mx-auto  max-w-screen-xl px-6 min-h-[68vh]">
          {/* {header} */}
          {children}
        </div>
        {/* {footer} */}
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DotGothic16, Mada } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const mada = Mada({ subsets: ["latin"] });
const dotgothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Akshay Kadambatt | Creative Developer",
  description:
    "Portfolio of Akshay Kadambatt, a skilled Front-End Developer with a passion for Machine Learning and backend development. Check out my projects and get in touch!",
  keywords: [
    "Akshay Kadambatt",
    "Front-End Developer",
    "Machine Learning",
    "Backend Development",
    "Portfolio",
    "Projects",
    "React",
  ],
  authors: [{ name: "Akshay Kadambatt", url: "https://akshaykadambatt.com" }],
  creator: "Akshay Kadambatt",
  publisher: "Akshay Kadambatt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mada.className}>
        <Navigation />
        {children}
        <footer className="w-full py-16 bg-black text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className={`${dotgothic.className} text-4xl font-bold mb-4`}>
                akshay
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
              <div className="flex flex-col mb-8 md:mb-0 md:mr-16">
                <a href="#" className="mb-2 hover:underline">
                  Home
                </a>
                <a href="#" className="mb-2 hover:underline">
                  Works
                </a>
                <a href="#" className="mb-2 hover:underline">
                  About
                </a>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </div>
              <div className="flex flex-col mb-8 md:mb-0 md:mr-16">
                <a href="#" className="mb-2 hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="mb-2 hover:underline">
                  GitHub
                </a>
                <a href="#" className="mb-2 hover:underline">
                  Instagram
                </a>
              </div>
              <div className="flex flex-col">
                <a
                  href="mailto:akshayakn6@gmail.com"
                  className="mb-2 hover:underline"
                >
                  akshayakn6@gmail.com
                </a>
                <a href="tel:+16479287053" className="mb-2 hover:underline">
                  +1 (647) 928-7053
                </a>
                <a href="/Akshay-resume.pdf" download="Akshay-Resume.pdf" className="hover:underline">
                  Download my resume
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

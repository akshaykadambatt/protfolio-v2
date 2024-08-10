import type { Metadata } from "next";
import { Mada } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const mada = Mada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Kadambatt | Creative Developer",
  description: "Portfolio of Akshay Kadambatt, a skilled Front-End Developer with a passion for Machine Learning and backend development. Check out my projects and get in touch!",
  keywords: ["Akshay Kadambatt", "Front-End Developer", "Machine Learning", "Backend Development", "Portfolio", "Projects", "React"],
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
      </body>
    </html>
  );
}

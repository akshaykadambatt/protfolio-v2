"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DotGothic16 } from "next/font/google";
const dotgothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="box flex justify-between items-center p-4 pt-9 ">
        <Link href="/" className={dotgothic.className + " text-[42px]"}>
          akshay
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger"
        >
          <div className="hamburger-lines"></div>
        </button>
      </header>
      {isMenuOpen && (
        <nav>
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DotGothic16 } from "next/font/google";
import InViewWrapper from "./InViewWrapper";
const dotgothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="box flex justify-between items-center p-4 pt-9 sticky top-[0] z-[50]">
        <Link href="/" className={`${dotgothic.className} text-[42px] px-4 rounded-lg box-border transition-all ${scrolled && "opacity-0 logo-change bg-white/60 backdrop-blur-sm"}`}>
          akshay
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`hamburger ${isMenuOpen && "open"} z-40 backdrop-blur-sm bg-white/60 backdrop-blur-sm`}
        >
          <div className="hamburger-lines"></div>
        </button>
      </header>
      {isMenuOpen && (
        <nav className="fixed top-[20%] left-0 w-full h-full text-white z-50">
        <InViewWrapper>
          <div className={dotgothic.className + " text-[42px] decorative-text"}>akshay</div>
        </InViewWrapper>
          <ul className="flex flex-col items-center space-y-9 text-7xl">
        <InViewWrapper>
        <li className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link href="/">Start</Link>
            </li>
        </InViewWrapper>
        <InViewWrapper>
        <li className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link href="#works">Projects</Link>
            </li>
        </InViewWrapper>
        <InViewWrapper>
        <li className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link href="#experience">Experience</Link>
            </li>
        </InViewWrapper>
        <InViewWrapper>
        <li className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link href="/Akshay-resume.pdf" download="Akshay-Resume.pdf" target="_blank">My Resume</Link>
            </li>
        </InViewWrapper>
        </ul>
        </nav>
      )}
    </>
  );
}

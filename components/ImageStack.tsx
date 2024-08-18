"use client";

import Image from "next/image";
import React, { useState } from "react";
import "../app/globals.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import InViewWrapper from "./InViewWrapper";
import Link from "next/link";

const carousel: KeenSliderPlugin = (slider) => {
  let z = 600;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg) translateY(170px) `;
    slider.slides.forEach((element, idx) => {
      element.style.filter = `${
        Math.max(0, Math.min(5, 5 - Math.abs(z / 100))) * 100
      }px`;
    });
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      dragSpeed: 0.3,
      defaultAnimation: {
        duration: 100000,
      },
      slideChanged(slider) {
        setActiveSlide(slider.track.details.rel);
      },
    },
    [carousel]
  );
  const slides = [
    {
      img: "/image1.png",
      year: "2024",
      name: "Designer Portfolio",
      link: "https://deepalimidha.github.io/Portfolio",
    },
    {
      img: "/image2.png",
      year: "2021",
      name: "Experimental Image Gallery (File System API x Chrome Canary)",
      link: "https://kmo.vercel.app/",
    },
    {
      img: "/image3.png",
      year: "2020",
      name: "Portfolio v2",
      link: "https://akshaykn.vercel.app/",
    },
    {
      img: "/image4.png",
      year: "2016",
      name: "Portfolio v1",
      link: "http://desktop-xtrofficial.blogspot.com/",
    },
    {
      img: "/image5.png",
      year: "2022",
      name: "Second Brain",
      link: "https://ktab-manager.web.app/",
    },
    {
      img: "/image6.png",
      year: "2024",
      name: "Souptopia, Waterloo",
      link: "/",
    },
    {
      img: "/image7.png",
      year: "2024",
      name: "BuildIt, Waterloo",
      link: "/",
    },
    {
      img: "/image8.png",
      year: "Since 2022",
      name: "Personal Blog",
      link: "https://akshaykn.vercel.app/blog",
    },
    {
      img: "/image9.png",
      year: "2023",
      name: "ZapScale",
      link: "https://www.zapscale.com/",
    },
    {
      img: "/image10.png",
      year: "2018",
      name: "CompSci 2018",
      link: "https://hgaetech.web.app/",
    },
    {
      img: "/image11.png",
      year: "2023",
      name: "Hobbies",
      link: "https://hobbies1.vercel.app/dashboard",
    },
  ];

  return (
    <>
      <div className="p-4">
        <div className="slider mb-[350px] mt-[-150px] md:mb-[500px] md:mt-[-50px] md:ml-[-100px]">
          <div className="wrapper">
            <div className="scene">
              <div className="carousel keen-slider" ref={sliderRef}>
                {slides.map((slide, index) => (
                  <div key={index} className="carousel__cell number-slide1 ">
                    <InViewWrapper additionalClass="slider-image">
                      <Image
                        loading="eager"
                        src={slide.img}
                        alt={slide.name}
                        width={500}
                        height={400}
                        className="fade-up mt-[20px] "
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </InViewWrapper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pl-[7vw]">
        <SelectedImage
          year={slides[activeSlide].year}
          name={slides[activeSlide].name}
          img={slides[activeSlide].img}
          link={slides[activeSlide].link}
        />
      </div>
    </>
  );
}

interface ImageProps {
  year: string;
  name: string;
  img: string;
  link: string;
}
const SelectedImage: React.FC<ImageProps> = ({ year, name, img, link }) => {
  return (
    <div className="">
      <InViewWrapper>
        <p>{year}</p>
      </InViewWrapper>
      <InViewWrapper>
        <h3 className="text-3xl font-medium">{name}</h3>
      </InViewWrapper>
      <InViewWrapper>
        <Image
          src={img}
          alt={`${name} Preview`}
          width={400}
          height={400}
          className="mt-[20px] rounded-md overflow-hidden"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </InViewWrapper>
      <InViewWrapper>
        <Link href={link} target="_blank">
        <button className="py-2 px-4 rounded-lg mt-4">
          View Project{" "}
          <IoIosArrowRoundForward className="icon inline-block" size="30" />
        </button>
        </Link>
        
      </InViewWrapper>
    </div>
  );
};

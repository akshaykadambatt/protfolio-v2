"use client";

import Image from "next/image";
import React from "react"
import "../app/globals.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const carousel: KeenSliderPlugin = (slider) => {
  const z = 740
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg) translateY(330px) `;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      defaultAnimation:{
        easing: (t) => t / (2 - t),
      }
    },
    [carousel]
  )

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        <div className="carousel__cell number-slide1  "><Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="fade-up mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        /></div>
        
        </div>
      </div>
    </div>
  )
}

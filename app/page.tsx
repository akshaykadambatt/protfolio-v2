import Slider from "@/components/ImageStack";
import { DotGothic16, Mada, Azeret_Mono } from "next/font/google";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const dotgothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});
const mono = Azeret_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <section className="box mb-[100px] mt-[100px]">
        <div className="fade-up">
          <p className="text-[27px]">On the web since</p>
        </div>
        <div className="fade-up duration-[10000ms]">
          <div
            className={dotgothic.className + " text-[200px] leading-none mb-8"}
          >
            <div className="inline-block text-red-500">20</div>
            <div className=" inline-block change">
              <div className="block">6</div>
              <div className="block">7</div>
              <div className="block">8</div>
              <div className="block">9</div>
              <div className="block">0</div>
              <div className="block">1</div>
              <div className="block">7</div>
            </div>
            <div className=" inline-block change">
              <div className="block">1</div>
              <div className="block">2</div>
              <div className="block">3</div>
              <div className="block">4</div>
              <div className="block">5</div>
              <div className="block">6</div>
              <div className="block">7</div>
            </div>
          </div>
        </div>
        <div className="fade-up">
          <p className="text-[17px] max-w-prose">
            A lot has changed since then. Back when I was playing around, we had
            flat designs and cool gradients. I still remember thinking GSAP is
            the key to fulfillment. I wish I could go back and tell that boy to
            calm down.
          </p>
        </div>
        <div className="fade-up">
          <button className="btn bg-black text-white py-2 px-4 rounded-lg mt-4">
            Take a look at my evolution{" "}
            <IoIosArrowRoundForward className="icon inline-block" size="30" />
          </button>
        </div>
        <div className="fade-up">
          <div className={mono.className + " text-xs flex justify-end mt-[7%]"}>
            <p className="bg-yellow-100 px-3 mr-1 py-1 inline-block">
              Akshay Kadambatt
            </p>
            <p className="bg-gray-100 px-3 mr-2 py-1 inline-block">
              akshayakn6@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section className="w-full gradient-background text-white  block overflow-hidden">
        <div className="box p-[100px]">
          <div className="animated-section relative h-[40vh]">
            <div className="gradient-bg gradient-1"></div>
            <div className="gradient-bg gradient-2"></div>
            <div className="gradient-bg gradient-3"></div>
            <div className="gradient-bg gradient-4"></div>
          </div>
          <p className="text-[27px] mb-4">
            Always loved to build, still love to build.
          </p>
          <p className="text-[17px] max-w-prose">
            Hey there! I'm Akshay, a passionate UI/UX designer with a knack for
            creating clean, user-friendly interfaces. My journey started with a
            love for pixels and code, and now I spend my days crafting digital
            experiences that make life easier and a little more fun. Welcome to
            my corner of the web, let's create something amazing together!
          </p>
        </div>
      </section>
      <section className="w-full block py-[100px] box relative">
        <h2
          className={
            dotgothic.className + " text-[70px] leading-none mb-[100px]"
          }
        >
          Works
        </h2>
        <p>2024</p>
        <h3 className="text-3xl font-medium">Designer Portfolio</h3>
        <Image
          src="/image.png"
          alt="Designer Portfolio Preview"
          width={500}
          height={400}
          className="mt-[20px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <button className="  py-2 px-4 rounded-lg mt-4">
            View Project{" "}
            <IoIosArrowRoundForward className="icon inline-block" size="30" />
          </button>
        <div className="slider mb-[1000px]">
        <Slider/>
        </div>
      </section>
    </main>
  );
}

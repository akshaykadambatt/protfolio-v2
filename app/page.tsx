import Slider from "@/components/ImageStack";
import InViewWrapper from "@/components/InViewWrapper";
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
const experiences = [
  {
    year: "2023",
    title: "Software Engineer",
    company: "Software For Love (UW), Waterloo, ON",
    description:
      "I worked on building responsive web apps with React and Next.js, ensuring everything looked good on all devices. I also automated deployments and led a small team, which really sped things up and improved our workflow.",
    image: "/experience1.png",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Ecesis, IN",
    description:
      "I developed full-stack applications using the MERN stack, focusing on creating smooth and user-friendly interfaces. Collaborated closely with designers and optimized backend processes, which made our apps faster and more scalable.",
    image: "/experience2.png",
  },
  {
    year: "2020",
    title: "Associate Software Developer",
    company: "Spawoz, IN",
    description:
      "I helped develop web apps using Angular and Laravel, making sure they worked well across different devices. I also pitched in to resolve bugs and improve existing features, which cut down our open tickets significantly",
    image: "/experience3.png",
  },
  {
    year: "2016",
    title: "Bachelors in Computer Science & Engineering",
    company: "Kalam Technical University",
    description:
      "Graduated with a strong grasp of programming and computer science fundamentals. Built several projects, including full-stack web apps, and participated in hackathons to sharpen my coding skills.",
    image: "/experience4.png",
  },
];
export default function Home() {
  return (
    <main className="">
      <section className="box mb-[100px] mt-[100px]">
        <InViewWrapper>
        <div  className={`${dotgothic.className} arstreik absolute top-[0px] right-[-0px] opacity-50`}>
          DESIGN & DEVELOPMENT
          </div>
        </InViewWrapper>
        <InViewWrapper>
          <p className="text-[27px]">On the web since</p>
        </InViewWrapper>
        <InViewWrapper>
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
        </InViewWrapper>

        <InViewWrapper>
          <p className="text-[17px] max-w-prose">
            A lot has changed since then. Back when I was playing around, we had
            flat designs and cool gradients. I still remember thinking GSAP is
            the key to fulfillment. I wish I could go back and tell that boy to
            calm down.
          </p>
        </InViewWrapper>

        <InViewWrapper>
          <a href="#works">
            <button className="btn bg-black text-white py-2 px-4 rounded-lg mt-4">
            Take a look at my evolution{" "}
            <IoIosArrowRoundForward className="icon inline-block" size="30" />
          </button>
          </a>
          
        </InViewWrapper>

        <InViewWrapper>
          <div className={mono.className + " text-xs flex justify-end mt-[7%]"}>
            <p className="bg-yellow-100 px-3 mr-1 py-1 inline-block">
              Akshay Kadambatt
            </p>
            <p className="bg-gray-100 px-3 mr-2 py-1 inline-block">
              akshayakn6@gmail.com
            </p>
          </div>
        </InViewWrapper>
      </section>
      <section className="w-full gradient-background text-white  block overflow-hidden relative z-10">
        <div className="box p-[100px]">
          <div className="animated-section relative h-[40vh]">
            <div className="gradient-bg gradient-1"></div>
            <div className="gradient-bg gradient-2"></div>
            <div className="gradient-bg gradient-3"></div>
            <div className="gradient-bg gradient-4"></div>
          </div>
          <InViewWrapper>
            <p className={"text-[27px] mb-4"}>
              Always loved to build, still love to build.
            </p>
          </InViewWrapper>
          <InViewWrapper>
            <p className="text-[17px] max-w-prose">
              Hey there! I'm Akshay, a passionate UI/UX designer with a knack
              for creating clean, user-friendly interfaces. My journey started
              with a love for pixels and code, and now I spend my days crafting
              digital experiences that make life easier and a little more fun.
              Welcome to my corner of the web, let's create something amazing
              together!
            </p>
          </InViewWrapper>
        </div>
      </section>
      <section className="w-full block py-[100px] box relative" id="works">
        <InViewWrapper>
          <h2
            className={
              dotgothic.className + " text-[70px] leading-none mb-[10vh]"
            }
          >
            Works
          </h2>
        </InViewWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
          <Slider />
        </div>
      </section>
      <section className="w-full block py-[100px] box relative mb-[100px]" id="experience">
        <InViewWrapper>
          <h2
            className={`${dotgothic.className} text-[70px] leading-none mb-[10vh]`}
          >
            Experience
          </h2>
        </InViewWrapper>
        <div className="relative">
          {experiences.map((experience, index) => (
            <div
              className="grid grid-cols-[11%_1fr_35%] gap-4 experience-item mb-9"
              key={index}
            >
              <div>
                <InViewWrapper>
                  <h3
                    className={`${dotgothic.className} lines text-[50px] mb-2 font-bold`}
                  >
                    {experience.year}
                  </h3>
                </InViewWrapper>
              </div>
              <div>
                <InViewWrapper>
                  <h4 className="italic text-[27px]">{experience.title}</h4>
                  <p className="text-[27px] italic font-light mb-2">
                    {experience.company}
                  </p>
                  <p className="text-[17px] max-w-prose">
                    {experience.description}
                  </p>
                </InViewWrapper>
              </div>
              <InViewWrapper>
                  <Image
                    src={experience.image}
                    alt={`${experience.title} at ${experience.company}`}
                    width={350}
                    height={200}
                    className="rounded-sm experience-image"
                  />
              </InViewWrapper>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

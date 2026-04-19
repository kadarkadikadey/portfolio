"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5'; // Make sure to npm install react-icons
import SmoothScroll from "./components/SmoothScroll";
import mypic1 from "../public/my-pic.png";
import mypic2 from "../public/my-pic2.jpeg";
import mypic3 from "../public/my-pic3.jpg";




const myProjects = [
  {
    id: 1,
    title: "powpad",
    description: "Integrating Gemini AI and GROQ into a global hotkey for instant answers for Every text editer.",
    video: "/portfolio/powpad.mp4",
    color: "#00d4ff"
  },
  {
    id: 2,
    title: "meowpad",
    description: "Integrating Gemini AI into a global hotkey notepad for instant answers.",
    video: "/portfolio/meowpad.mp4",
    color: "#00d4ff"
  },
  {
    id: 3,
    title: "citizen-107",

    description: "Community emergency response platform connecting individuals with nearby volunteers and medical aid.",
    video: "/portfolio/CITIZEN-107.mp4", // Replace with your actual video path
    color: "#ff4b2b"
  },
  {
    id: 4,
    title: "catsoftshop",

    description: "A full-stack marketplace for software assets, scripts, and UI kits built with .NET and Flutter.",
    video: "/portfolio/catsoftshop.mp4", // Replace with your actual video path
    color: "#6a11cb"
  },
  {
    id: 5,
    title: "chatmeat",

    description: "Real-time messaging platform focused on seamless connectivity and modern UI/UX.",
    video: "/portfolio/chatmate.mp4", // Replace with your actual video path
    color: "#00f2fe"
  },
  {
    id: 6,
    title: "rodegard",

    description: "A specialized platform exploring the deep lore and character backgrounds of Elden Ring.",
    video: "/portfolio/RodeGard.mp4", // Replace with your actual video path
    color: "#f9d423"
  }
];

const ScribbleUnderline = () => (
  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 20" fill="none">
    <motion.path
      d="M5 15C50 5 150 5 295 15" // A slightly curved hand-drawn path
      stroke="#ec4899" // Pink-500
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </svg>
);

const HouseCheckIcon = () => (
  <div className="relative inline-block ml-4 w-12 h-12 align-middle">
    {/* The Pink House Outline */}
    <svg viewBox="0 0 50 50" className="absolute inset-0 w-full h-full">
      <motion.path
        d="M10 40 L10 20 L25 10 L40 20 L40 40 Z" // Simple house shape
        stroke="#fbcfe8" // Light Pink
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
      />
    </svg>
    {/* The Black Checkmark */}
    <svg viewBox="0 0 50 50" className="absolute inset-0 w-full h-full">
      <motion.path
        d="M15 25 L22 32 L38 15" // Checkmark path
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      />
    </svg>
  </div>
);

const ScribbleBubble = () => (
  // We change the viewBox to 500x200 to make it wider
  <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 200" preserveAspectRatio="none">
    <motion.path
      // This path is now wider (stretching from x=10 to x=490)
      d="M490,100 C490,160 380,190 250,190 C120,190 10,160 10,100 C10,40 120,10 250,10 C380,10 490,40 485,95"
      stroke="black"
      strokeWidth="3" // Made it slightly thicker for impact
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </svg>
);

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.0, ease: "easeOut" }}
        viewport={{ once: false }} // Animation only happens once
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {

  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % myProjects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + myProjects.length) % myProjects.length);

  // Array to keep the code clean
  const techStack = [
    { src: "/portfolio/C-Sharp.svg.png", alt: "C-sharp" },
    { src: "/portfolio/Microsoft_.NET.svg.png", alt: "Microsoft_.NET" },
    { src: "/portfolio/Google-flutter.svg.png", alt: "Google-flutter" },
    { src: "/portfolio/Nextjs.svg.png", alt: "Nextjs" },
    { src: "/portfolio/Python.svg.webp", alt: "Python" },
    { src: "/portfolio/Typescript.svg.png", alt: "Typescript" },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-black font-sans selection:bg-pink-300 overflow-x-hidden">

        <Reveal>
          <section className="relative flex flex-col md:flex-row min-h-screen w-full bg-white overflow-hidden">

            {/* LEFT SIDE: TEXT & LOGOS (60% width) */}
            <div className="w-full md:w-[60%] flex flex-col justify-between p-8 md:p-20 z-10">

              {/* LOGO - Fixed position to avoid overlapping text */}
              <div className="mb-12">
                <div className="inline-block border-[3px] border-black p-2 font-black text-xl md:text-2xl leading-none uppercase tracking-tighter">
                  KARTIKEY
                </div>
              </div>

              {/* MAIN HEADING - Bigger, tighter leading */}
              <div className="max-w-4xl">
                <Reveal>
                  <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter text-black">
                    Building <br />
                    <span className="relative inline-block">
                      Digital
                      <span className="absolute -top-6 -right-12 text-2xl md:text-4xl text-pink-500 italic lowercase font-normal rotate-12 drop-shadow-sm">
                        "crazy"
                      </span>
                    </span> <br />
                    Solutions
                  </h1>
                </Reveal>

                <Reveal>
                  <p className="mt-8 max-w-lg text-lg md:text-xl font-medium text-zinc-600 leading-tight">
                    I am Kartikey, a developer focused on integrating AI into practical apps.
                    Currently exploring the <span className="text-black font-bold">Asian tech market.</span>
                  </p>
                </Reveal>

                {/* SOCIALS */}
                <div className="flex gap-6 mt-8 text-3xl text-black">
                  <a href="https://github.com/kadarkadikadey" className="hover:text-pink-500 transition-transform hover:-translate-y-1"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/kartikey-parmar-593794404" className="hover:text-pink-500 transition-transform hover:-translate-y-1"><FaLinkedin /></a>
                  <a href="https://www.instagram.com/_kartikey_2509_?igsh=cDBhNmJjdXByZGdt" className="hover:text-pink-500 transition-transform hover:-translate-y-1"><FaInstagram /></a>
                </div>
              </div>

              {/* TECH STACK - Bottom Aligned */}
              <div className="mt-20 flex flex-wrap items-center gap-6 md:gap-10 opacity-30 hover:opacity-100 transition-opacity duration-700">
                {techStack.map((tech, i) => (
                  <div key={i} className="relative w-8 h-8 md:w-10 md:h-10 grayscale">
                    <Image src={tech.src} alt={tech.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE (40% width) */}
            <div className="w-full md:w-[40%] relative h-[60vh] md:h-screen bg-zinc-100 border-l-[1px] border-black/10">

              <Image
                src={mypic1}
                alt="Kartikey"
                fill
                className="object-cover object-top md:object-center"
                priority
              />
              {/* Subtle Pink Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent pointer-events-none" />

            </div>

          </section>
        </Reveal>
        {/* ROTATED SIDEBAR */}
        <div className="hidden md:block fixed left-6 bottom-24 -rotate-90 origin-left">
          <p className="uppercase font-black tracking-tighter text-xs border-b-2 border-black pb-1">
            Scroll to Explore ↓
          </p>
        </div>
        <Reveal>
          {/* --- ABOUT ME SECTION --- */}
          <section className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE: OVERLAPPING IMAGES */}
              <div className="relative h-[500px] md:h-[600px]">
                {/* Background Pink Shape 1 */}
                <div className="absolute top-10 left-10 w-64 h-80 bg-pink-500 rotate-3 z-0" />

                {/* Image 1 (Primary) */}
                <div className="absolute top-0 left-0 w-64 h-80 border-2 border-white z-10 overflow-hidden">
                  <Image
                    src={mypic3}
                    alt="Kartikey working"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Background Pink Shape 2 */}
                <div className="absolute bottom-10 right-10 w-64 h-80 bg-pink-300 -rotate-6 z-0" />

                {/* Image 2 (Secondary/Action Shot) */}
                <div className="absolute bottom-0 right-0 w-64 h-80 border-2 border-white z-10 overflow-hidden">
                  <Image
                    src={mypic2}
                    alt="Kartikey coding"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Floating Badge (Like the "Awesome guys!" bubble) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white text-black px-4 py-2 font-black uppercase text-sm -rotate-12 border-2 border-pink-500">
                  developer
                </div>
              </div>
              <Reveal>
                {/* RIGHT SIDE: CONTENT */}
                <div className="flex flex-col gap-6">
                  <p className="uppercase tracking-[0.3em] text-pink-500 font-bold">About Me</p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
                    I Like to bridge the gap between <span className="italic">logic</span> and <span className="text-pink-500">design.</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 text-gray-400">
                    <p>
                      I started my journey with NEXT.JS and quickly fell in love with the versatility of Flutter.
                      For me, coding isn't just about making things work—it's about making them "crazy" good.
                    </p>
                    <p>
                      Whether it's building a digital marketplace or AI tools,
                      I focus on clean architecture and high-end user experiences.
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <div className="bg-white py-10 px-10 md:px-20 border-b-2 border-black">
            {/* Small top label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 bg-black flex items-center justify-center">
                <div className="w-1 h-1 bg-pink-500 rounded-full" />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-gray-600">
                Our Featured Projects
              </p>
            </div>
            {/* Change flex-col to items-center to center children horizontally */}
            <div className="flex flex-col items-center gap-4 w-full">

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center">
                Projects fully crafted
                <span className="relative inline-block ml-4 text-pink-300 italic">
                  by meself <ScribbleUnderline />
                </span>
                <HouseCheckIcon />
              </h2>

              {/* Added justify-center to ensure the row itself is centered */}
              <div className="flex items-center justify-center gap-6 text-black mt-2 w-full">
                <button
                  onClick={prevProject}
                  className="text-3xl hover:text-pink-500 hover:scale-110 transition-all cursor-pointer outline-none"
                >
                  ←
                </button>

                <span className="font-mono text-xl font-bold min-w-[120px] text-center">
                  0{index + 1} / 0{myProjects.length}
                </span>

                <button
                  onClick={nextProject}
                  className="text-3xl hover:text-pink-500 hover:scale-110 transition-all cursor-pointer outline-none"
                >
                  →
                </button>
              </div>
            </div>


          </div>

        </Reveal>
        <Reveal>
          <section className="relative h-screen w-full bg-[#f0f0f0] overflow-hidden flex flex-col md:flex-row border-t-4 border-black">

            {/* LEFT WHITE PANEL: Project Details */}
            <div className="w-full md:w-1/3 bg-white h-full p-12 flex flex-col justify-center z-20 border-r-2 border-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={myProjects[index].id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="uppercase font-bold text-pink-500 mb-2">Project {index + 1}</p>
                  <h2 className="text-5xl font-black uppercase leading-none mb-6">
                    {myProjects[index].title}
                  </h2>
                  <p className="text-gray-600 mb-8 font-medium">
                    {myProjects[index].description}

                  </p>

                </motion.div>
              </AnimatePresence>


            </div>

            {/* RIGHT PANEL: Video/Media Player */}
            <div className="w-full md:w-2/3 h-full relative bg-black overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={myProjects[index].id}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* VIDEO ELEMENT */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    src={myProjects[index].video}
                  />

                </motion.div>
              </AnimatePresence>
            </div>

            {/* SIDEBAR TEXT (Rotated) */}
            <div className="hidden md:block absolute left-4 bottom-20 -rotate-90 origin-left z-30">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/20">
                Crafted by Kartikey — 2026
              </p>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <footer className="bg-white pt-32">


            {/* --- SECTION 1: RESUME CALL TO ACTION --- */}
            <div className="flex flex-col items-center justify-center pb-40 px-6 text-center">
              <p className="font-mono text-sm uppercase tracking-widest border-b border-black mb-12">
                Want to see my profile?
              </p>

              {/* Added w-full max-w-5xl and more padding */}
              <div className="relative w-full max-w-5xl px-12 py-24 flex items-center justify-center">

                <ScribbleBubble />

                <a
                  href="https://drive.google.com/drive/folders/1y1T6xsoUvYp7Frn83b13GRuxb00uqvhv?usp=drive_link"

                  className="group relative z-10 text-5xl md:text-8xl font-black uppercase tracking-tighter"
                >
                  Download <span className="text-pink-300 group-hover:text-pink-500 transition-colors">Resume.</span>
                  {/* This is the thick black underline under the text */}
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-black scale-x-100 group-hover:scale-x-110 transition-transform" />
                </a>
              </div>
            </div>
            {/* --- SECTION 2: BLACK FOOTER BAR --- */}
            <div className="bg-[#111] text-white py-8 px-6 md:px-20">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo Brand */}
                <div className="bg-pink-300 text-black px-3 py-1 font-black text-xs leading-none uppercase rotate-[-5deg]">
                  KARTIKEY
                </div>

                {/* Copyright & Credits */}
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-gray-400 text-center">
                  Copyright © 2026 Kartikey // Designed for the Asian Century by <span className="text-white border-b border-gray-600">Kartikey</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-lg">
                  <a href="https://github.com/kadarkadikadey" className="hover:text-pink-300 transition-colors"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/kartikey-parmar-593794404" className="hover:text-pink-300 transition-colors"><FaLinkedin /></a>
                  <a href="https://www.instagram.com/_kartikey_2509_?igsh=cDBhNmJjdXByZGdt" className="hover:text-pink-300 transition-colors"><FaInstagram /></a>

                </div>
              </div>
            </div>
          </footer>
        </Reveal>
      </main>
    </SmoothScroll>
  );
}

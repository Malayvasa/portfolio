import React from "react";
import malay from "../assets/images/homepage/malay.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Homepage() {
  const container = {
    hidden: { opacity: 0, y: -20, zIndex: 1 },
    show: {
      opacity: 1,
      y: 0,
      zIndex: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 5,
        duration: 1,
        delay: 4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="paper p-8 md:p-0 flex flex-col w-screen min-h-screen bg-slate-50 content-center place-content-center space-y-6 md:space-y-12"
      style={{ backgroundImage: `url()` }}
    >
      <div className="flex flex-col md:flex-row place-self-center mx-auto ">
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
            src={malay}
            alt="Malay"
            className="hover:animate-spectrum rotate-30 md:mr-8 mt-24 md:mt-0 w-64 mx-auto md:w-96 min-h-96 shadow-sm bg-yellow-400"
          />
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0,
            }}
            className="absolute transition-all hover:-rotate-45 top-8 md:top-4 md:-right-80  bg-cyan-50 shadow-lg p-2 text-6xl md:text-8xl w-max font-serif text-cyan-400"
          >
            I'm Malay.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute -right-4 -bottom-8 z-50 md:-right-32 bg-teal-50 shadow-lg p-2 px-4 text-4xl w-max font-serif text-teal-400"
          >
            Nice to meet you!
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col rotate-30 md:w-[30rem] space-y-4 place-self-center mt-4 md:mt-20 p-8 mx-auto shadow-md bg-yellow-200"
        >
          <motion.div
            variants={item}
            className="text-xl md:text-2xl text-slate-700 font-serif"
          >
            I’m a{" "}
            <span className="underline decoration  ">UI/UX Designer,</span>{" "}
            <span className="underline decoration  ">Front-End Developer</span>{" "}
            and <span className="underline decoration  ">Creative Coder</span>.
          </motion.div>
          <motion.div
            variants={item}
            className="text-xl md:text-2xl text-slate-700 font-serif"
          >
            I study Human Centered Design at Srishti Institute in Bangalore,
            India.
          </motion.div>
          <motion.div
            variants={item}
            className="text-xl md:text-2xl text-slate-700 font-serif"
          >
            Here's a collection of my best{" "}
            <span className="underline text-teal-600 decoration-teal-400 hover:text-teal-400 transition-colors">
              <Link to="/projects">projects.</Link>
            </span>
          </motion.div>
        </motion.div>
      </div>
      {/* 
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 7,
        }}
        className="flex py-2 md:py-8 md:w-screen justify-items-center place-content-center space-x-10"
      >
        <div
          className="select-none text-2xl text-slate-700 hover:text-amber-400 font-serif underline decoration-transparent hover:decoration-amber-400 transition"
          onClick={() => {
            window.location.href = "/KernelNFT";
          }}
        >
          Projects
        </div>
        <div
          className="select-none text-2xl text-slate-700 hover:text-amber-400 font-serif underline decoration-transparent hover:decoration-amber-400 transition"
          onClick={() => {
            window.location.href = "/About";
          }}
        >
          About
        </div>
      </motion.div> */}
    </div>
  );
}

export default Homepage;

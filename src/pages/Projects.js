import React from "react";
import { Link } from "react-router-dom";
import modfythumb from "../assets/images/projects/modfythumb.png";
import twotiredthumb from "../assets/images/projects/twotiredthumb.png";
import kernelthumb from "../assets/images/projects/kernelthumb.png";
import genidenthumb from "../assets/images/projects/genidenthumb.png";
import genrethumb from "../assets/images/projects/genrethumb.png";

function Projects() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex flex-col m-auto space-y-8">
        <div className="w-3/5 mx-auto">
          <div className="font-serif mx-auto px-4 w-full border-b-2 text-center border-teal-400 text-4xl w-max text-teal-400">
            UI/UX
          </div>
        </div>
        <div className="mx-auto flex flex-row space-x-8 pb-12">
          <div className=" font-serif text-2xl  pb-2 ">
            <Link to="/modfy">
              <img
                src={modfythumb}
                alt="modfythumb"
                className=" w-[386px] h-auto shadow-md"
              />
              <div className="ml-4 mt-2 text-slate-700">Modfy Internship</div>
            </Link>
          </div>
          <div className=" font-serif w-max text-2xl pb-2">
            <Link to="/twotired">
              <img
                src={twotiredthumb}
                alt="twotiredthumb"
                className=" w-[386px] h-auto shadow-lg"
              />
              <div className=" pt-2  text-slate-700">Two Tired</div>
            </Link>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <div className="font-serif mx-auto px-4 border-b-2 w-full text-center border-cyan-400 text-4xl text-cyan-400">
            Creative Coding
          </div>
        </div>
        <div className="mx-auto flex flex-row space-x-8 pb-12">
          <div className=" font-serif text-2xl pb-2">
            <Link to="/kernelnft">
              <img
                src={kernelthumb}
                alt="kernelthumb"
                className=" w-[386px] h-auto shadow-lg"
              />
              <div className="ml-4 mt-2 text-slate-700">Kernel NFT</div>
            </Link>
          </div>
          <div
            className=" font-serif text-2xl pb-2"
            onClick={() => {
              window.location.href =
                "https://www.behance.net/gallery/89701531/Generative-Identity-Abstract-Symbols-From-Names";
            }}
          >
            <img
              src={genidenthumb}
              alt="genidenthumb"
              className=" w-[386px] h-auto shadow-lg"
            />
            <div className="ml-4 mt-2 text-slate-700">Generative Identity</div>
          </div>
          <div
            className=" font-serif text-2xl pb-2"
            onClick={() => {
              window.location.href = "https://www.genregender.com";
            }}
          >
            <img
              src={genrethumb}
              alt="genidenthumb"
              className=" w-[386px] h-auto shadow-lg"
            />
            <div className="ml-4 mt-2 text-slate-700">Genre Gender</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

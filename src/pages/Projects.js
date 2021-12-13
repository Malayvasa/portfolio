import React from "react";
import { Link } from "react-router-dom";
import modfythumb from "../assets/images/projects/modfythumb.png";
import twotiredthumb from "../assets/images/projects/twotiredthumb.png";
import kernelthumb from "../assets/images/projects/kernelthumb.png";

function Projects() {
  return (
    <div className="my-24">
      <div className="flex flex-col mx-auto space-y-8">
        <div className="w-3/5 mx-auto">
          <div className="font-serif mx-auto px-4  text-4xl w-max text-teal-400">
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
          <div className="font-serif mx-auto px-4  text-4xl w-max text-cyan-400">
            Creative Coding
          </div>
        </div>
        <div className="mx-auto flex flex-row space-x-8">
          <div className=" font-serif text-2xl bg-teal-800 pb-2 shadow-lg">
            <Link to="/kernelnft">
              <img
                src={kernelthumb}
                alt="kernelthumb"
                className=" w-[386px] h-auto"
              />
              <div className="ml-4 mt-2 text-white">Kernel NFT</div>
            </Link>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <div className="font-serif mx-auto bg-teal-50 shadow-md text-4xl w-max text-teal-400">
            Web Development
          </div>
        </div>
        <div className="mx-auto flex flex-row space-x-8">
          <div className=" font-serif text-2xl bg-teal-800 pb-2 shadow-lg">
            <Link to="/modfy">
              <img
                src={modfythumb}
                alt="modfythumb"
                className=" w-[386px] h-auto"
              />
              <div className="ml-4 mt-2 text-white">Modfy Internship</div>
            </Link>
          </div>
          <div className=" font-serif text-2xl bg-teal-800 pb-2 shadow-xl">
            <Link to="/twotired">
              <img
                src={twotiredthumb}
                alt="twotiredthumb"
                className=" w-[386px] h-auto"
              />
              <div className="ml-4 mt-2 text-white">Two Tired</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

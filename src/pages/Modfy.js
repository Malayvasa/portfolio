import React from "react";
import { useLayoutEffect } from "react";
import logo from "../assets/images/modfy/logo.png";
import timeline from "../assets/images/modfy/timeline.png";

import otherelements from "../assets/images/modfy/otherelements.png";
import renderpage from "../assets/images/modfy/renderpage.png";
import renderpagelaptop from "../assets/images/modfy/renderpagelaptop.png";
import sharemodal from "../assets/images/modfy/sharemodal.png";
import filebrowser from "../assets/images/modfy/filebrowser.png";

function Modfy() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="w-screen md:text-2xl sm:text-xl">
        {/* Header */}
        <div className="bg-[#0F172A] w-screen pt-16">
          <img src={logo} alt="Kernel NFT" className="w-64 mt-20  mx-auto" />
          <div className=" top-0 w-1/2 filter pb-12 my-8 md:my-16 text-center text-white md:w-max mx-auto">
            UI Design Internship
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max  font-bold">Modfy</div>
          <div className="space-y-2">
            <p>
              Modfy is building the first in a suite of optimization and
              creative video editing tools designed entirely to work in-browser.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max  font-bold">Context</div>
          <div className="space-y-2">
            <p>
              Current in-browser video editors are often clunky and vastly cut
              down on the number of features, that traditional video editing
              tools such as Premiere Pro/FCPX offer. The current solutions also
              only really work for casual video-editors not professionals. How
              might we translate the sophistication of traditional tools to the
              browser?
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max  font-bold">Timeline</div>
          <div className="space-y-2">
            <p>I started with designing the timeline, </p>
          </div>
        </div>

        <img
          src={timeline}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16 shadow-md rounded-md"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto font-bold">
          File Browser
        </div>

        <img
          src={filebrowser}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto font-bold">
          Share Modal
        </div>

        <img
          src={sharemodal}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto font-bold">
          Other Elements
        </div>

        <img
          src={otherelements}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto font-bold">Editor</div>

        <img
          src={renderpagelaptop}
          alt="Two Tired Onboarding"
          className="w-4/6 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>
        <div className="text-left w-4/5 md:w-3/5 mx-auto font-bold">
          Render Page
        </div>

        <img
          src={renderpage}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#088060] bg-opacity-30"></div>
      </div>
    </div>
  );
}

export default Modfy;

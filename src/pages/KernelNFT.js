import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useState } from "react";

import logo from "../assets/images/kernel-nft/logo.png";
import gratitude from "../assets/images/kernel-nft/gratitude.png";
import code_screenshot from "../assets/images/kernel-nft/code_screenshot.png";
import generated_nfts from "../assets/images/kernel-nft/generated_nfts.png";
import KernelSketch from "../sketches/KernelSketch";

function KernelNFT() {
  const [fullName, setFullName] = useState("Malay Vasa");

  const handleChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div>
      <div className="w-screen md:text-2xl sm:text-xl">
        {/* Header */}
        <img
          src={logo}
          alt="Kernel NFT"
          className="w-24 mt-20 py-4 pt-8 mx-auto"
        />
        <div className=" top-0 pt-4 w-1/2 text-center md:w-max mx-auto">
          NFT Series consisting of customised{" "}
          <span className="italic font-serif">Generative Art</span>
        </div>
        {/* /Header */}

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#02E2AC]"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto font-serif">
            What is Kernel?
          </div>
          <div className="space-y-2">
            <p>Kernel is a brilliant community of Web3 folks.</p>
            <p>
              Kernel is eight weeks of conversation in a "block" of 250
              brilliant people intended to connect creativity with care. We aim
              to change the way we think of contributing and the kinds of
              projects to which we contribute. Kernel is about humility,
              honesty, gratitude, and intentional service.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#02E2AC]"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto  font-serif">
            Kernel Gratitude
          </div>
          <div className="space-y-2">
            <p>
              KERNEL Gratitude is a token of appreciation for each fellow in the
              network, as unique as their contribution. It's a living artifact
              of a fellow's presence in the community's virtual abode.
            </p>
          </div>
        </div>

        <img
          src={gratitude}
          alt="Kernel Gratitude"
          className="w-3/5 mx-auto mt-8 md:mt-16 shadow-xl rounded-2xl"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#02E2AC]"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto  font-serif">
            The Project
          </div>
          <div className="space-y-2">
            <p>
              The artwork is generated from the names of each fellow in the
              current block at Kernel. The code converts the name into an
              integer, by adding the ASCII values of all the letters in the
              name, and then uses that integer as the seed for the random
              function in the artwork.
            </p>
            <p>
              Made using p5.js, The collection of 287 NFTs is live on{" "}
              <a
                href="https://opensea.io/collection/kernel-fellowship-gratitude"
                className="underline hover:decoration-wavy decoration-[#02E2AC] text-[#02E2AC]"
              >
                OpenSea.
              </a>
            </p>
          </div>
        </div>

        <img
          src={code_screenshot}
          alt="Kernel NFT Code"
          className="w-3/5 mx-auto mt-8 md:mt-16 shadow-xl rounded-2xl"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#02E2AC]"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto  font-serif">
          Generated NFTs
        </div>

        <img
          src={generated_nfts}
          alt="Generated NFTs"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#02E2AC]"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex flex-col flex-none w-1/3 md:mr-auto space-y-4">
            <div className="font-bold text-sm tracking-wider mb-12 p-2 px-4 bg-slate-100 text-slate-400 rounded-md w-max">
              INTERACTIVE SKETCH
            </div>
            <div className=" font-serif text-3xl">Generate Your Own</div>
            <div>Enter your/any name below to see what pattern it makes!</div>
            <div className="flex flex-row pt-12">
              <input
                type="full name"
                placeholder="Full Name"
                value={fullName}
                className="rounded-lg bg-[#02E2AC] placeholder:text-white outline-none text-white  placeholder:text-opacity-75 p-2 w-full h-12"
                onChange={(event) => handleChange(event)}
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#02E2AC] ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="hover:animate-spectrum flex-none shadow-2xl rounded-2xl filter">
            <ReactP5Wrapper sketch={KernelSketch} fullName={fullName} />
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-8 "></div>
      </div>
    </div>
  );
}

export default KernelNFT;

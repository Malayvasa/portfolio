import React from "react";
import profile from "../assets/images/about/profile.png";
import friends from "../assets/images/about/friends.png";

function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:space-x-12 justify-center">
        <div className="mt-24 flex-none h-min">
          <div>
            <img
              src={friends}
              alt="profile"
              className="-z-10 hover:animate-spectrum w-[320px] my-auto shadow-lg"
            />
          </div>
          <div>
            {" "}
            <img
              src={profile}
              alt="profile"
              className="-z-10 hover:animate-spectrum mt-32 w-[320px] my-auto  shadow-lg"
            />
          </div>
        </div>
        <div
          className="flex flex-col my-24 space-y-16 w-[500px] overflow-y-scroll"
          style={{
            webkitScrollbarDisplay: "none",
            scrollbarDisplay: "none",
            scrollbarWidth: "none",
          }}
        >
          <div>
            <div className="z-50 md:-right-32 bg-teal-50 shadow-md p-2 px-4 text-4xl w-max font-serif text-teal-400">
              A little bit about me
            </div>
            <div className="font-serif text-2xl  text-slate-600 pt-6">
              I'm a student at Srishti Manipal Institute in Bangalore, where I'm
              studying HCI and UI/UX. Over the past couple of years, I've been
              freelancing as a designer. I've handled Social Media creatives for
              companies like Leap Finance, Avalon Labs, etc. I'm also currently
              Interning as a Product Designer at Modfy a SaaS company making
              Figma for video.
            </div>
          </div>

          <div className="flex flex-col   space-y-16">
            <div className=" ">
              <div className="z-50 md:-right-32 bg-violet-50 shadow-md p-2 px-4 text-4xl w-max font-serif text-violet-600">
                Experience
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="text-3xl text-violet-400 ">Coinocracy</div>
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-violet-400">UI Designer</div>
                  <div className="text-slate-300">June 2021- Present</div>
                </div>
                <div className=" ">
                  Focused on designing a DAO-VC formation platform and
                  integrating detailed financial tools like Vesting Contract
                  Tracking.
                </div>
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="text-3xl text-violet-400 ">Modfy</div>
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-violet-400">Product Design Intern</div>
                  <div className="text-slate-300">
                    April 2021 - September 2021
                  </div>
                </div>
                <div className=" ">
                  Directly collaborated with CEO and Product team to prototype,
                  design and deliver the UI and UX of a web based video editor
                  with a lean design process: research, design, test, and
                  iterate.
                </div>
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="text-3xl text-violet-400 ">Avalon Labs</div>
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-violet-400">UI/UX Intern</div>
                  <div className="text-slate-300">March 2020 - July 2020</div>
                </div>
                <div className=" ">
                  Refined UI/UX of the Avalon Meta App in order to increase user
                  engagement and retention.
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="z-50 md:-right-32 bg-cyan-50 shadow-md p-2 px-4 text-4xl w-max font-serif text-cyan-400">
                Education
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-cyan-400 text-3xl">Kernel Block III</div>
                  <div className="text-slate-300">May 2021</div>
                </div>
                <div className=" ">
                  8 Weeks with Mempool of brilliant minds in Web3.
                </div>
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-cyan-400 text-3xl">
                    10KDesigners Cohort 2
                  </div>
                  <div className="text-slate-300">September 2020</div>
                </div>
                <div className=" ">
                  An invite-only masterclass on becoming a UI/UX designer,
                  finding new opportunities for growth and kickstarting your
                  career.
                </div>
              </div>
              <div className="font-serif text-2xl   text-slate-600 pt-6">
                <div className="flex flex-col md:flex-row text-xl space-x-4">
                  <div className="text-cyan-400 text-3xl">
                    Srishti Manipal Institute
                  </div>
                  <div className="text-slate-300">2019 - 2023</div>
                </div>
                <div className=" ">B.Des in Human Centered Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

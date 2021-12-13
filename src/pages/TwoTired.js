import React from "react";
import { useLayoutEffect } from "react";
import logo from "../assets/images/two-tired/logo.png";
import onboarding from "../assets/images/two-tired/onboarding.png";
import information_architecture from "../assets/images/two-tired/information_architecture.png";
import signin from "../assets/images/two-tired/signin.png";
import newride1 from "../assets/images/two-tired/newride-1.png";
import newride2 from "../assets/images/two-tired/newride-2.png";
import journal from "../assets/images/two-tired/journal.png";
import friends from "../assets/images/two-tired/friends.png";
import otherscreens from "../assets/images/two-tired/otherscreens.png";
import darkmode from "../assets/images/two-tired/darkmode.png";

function TwoTired() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="w-screen md:text-2xl sm:text-xl">
        {/* Header */}
        <img
          src={logo}
          alt="Kernel NFT"
          className="w-64 mt-20 pt-8 pb-12 mx-auto"
        />
        <div className=" top-0 w-1/2 filter py-4 text-center md:w-max mx-auto">
          A <span className="italic font-serif px-2">Mindfulness</span> focused
          Ride Tracker App
        </div>

        {/* /Header */}

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F]"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            The challenge
          </div>
          <div className="space-y-2">
            <p>
              Most Personal Informatics technologies today are based on
              frameworks borrowed from behavior change theories, resulting in a
              focus shift from the self to the behavior to be changed.
            </p>
            <p>
              The "self" that these instruments quantify thus is reduced to the
              single behavior/parameter tracked, and the self-knowledge that
              they actually provide is mere information about how the user
              behaved in the past.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            The Solution
          </div>
          <div className="space-y-2">
            <p>
              Personal Informatics should reverse the point of view through
              which it looks at its constitutive elements, by providing
              subjective meanings instead of supposedly objective information.
            </p>
            <p>
              Creation of closed spaces of intimacy where users can share the
              data they gathered and the experiences connected with them. This
              becomes essential for self-understanding.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none w-max md:mx-auto text-3xl font-serif">
            Information Architecture
          </div>
          <div className="space-y-2">
            <img
              src={information_architecture}
              alt="Two Tired IA"
              className=" mx-auto"
            />
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="text-left w-4/5 md:w-3/5 mx-auto text-3xl font-serif">
          Onboarding
        </div>

        <img
          src={onboarding}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            Why Cycling?
            <div className="text-4xl mt-4">🚴‍♂️</div>
          </div>
          <div className="space-y-2">
            <p>
              Have you ever been out for a ride, lost yourself in the moment,
              then come home and felt like your mind has been cleansed? Like
              you’ve figured out the answers to all your problems?
            </p>

            <p>
              You are withdrawing your senses when you hop on a bike. You’re
              instantly locked into a particular attitude – a physical attitude
              and also a mental attitude. That helps train the mind into a
              particular groove which is also helped by just riding down a quiet
              backroad or single- track. These are aesthetic elements that all
              come together to help.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none">
            <img
              src={signin}
              alt="Sign In Screen"
              className="w-[392px] mx-auto"
            />
          </div>
          <div className="space-y-2 flex-grow">
            <div className="text-3xl font-serif">Sign In</div>
            <div className="pt-12 text-4xl font-bold">🙅‍♂️</div>
            <div className="">
              Two Tired stores all your ride data on your device inside Apple’s
              Secure Enclave. You can also choose to skip the profile details
              and make your profile anonymous.
            </div>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col lg:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="">
            <div className="text-3xl font-serif">New Ride</div>
            <div className="flex flex-col mx-auto md:w-auto h-full md:mr-32 justify-around">
              <div>
                <div className="text-4xl font-bold">☀️</div>
                The app shows you the current weather conditions and encourages
                you to go for a mindful ride.
              </div>
              <div>
                <div className="text-4xl font-bold">✍️</div>
                Every ride starts with a prompt, intended to give you a topic to
                think about while you ride.
              </div>
              <div>
                <div className="text-4xl font-bold">📍</div>
                The app tracks you real-time, showing your path as you move.
              </div>
              <div>
                <div className="text-4xl font-bold">⏳</div>
                Upon completion, the final stats are displayed along with the
                complete path of your ride.
              </div>
            </div>
          </div>

          <div className="flex flex-none flex-row md:flex-col space-y-8">
            <img
              src={newride1}
              alt="Sign In Screen"
              className="w-[128px] md:w-[392px] mx-auto"
            />
            <img
              src={newride2}
              alt="Sign In Screen"
              className="w-[128px] md:w-[392px] mx-auto"
            />
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            Journal
          </div>
          <div className="space-y-2">
            <p>
              The journal let’s you note down your thoughts and insights after
              each ride. To do so, you can simply type or choose to draw/record.
            </p>
          </div>
        </div>

        <img
          src={journal}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            What is mindfulness?
            <div className="text-4xl mt-4">🧠</div>
          </div>
          <div className="space-y-2">
            <p>
              Mindfulness is at the interface between personality and cognition
              and represents a preferred way of thinking.
            </p>

            <p>
              The practitioner of mindfulness meditation practices being
              receptive to all stimulation that may arise. The greater sense of
              autonomy arising from mindfulness practice comes not so much from
              a need to control thoughts, sensations and emotions, but rather
              from the experience of not having to be controlled by them.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none space-y-8">
            <img
              src={friends}
              alt="Sign In Screen"
              className="w-[256px] md:w-[392px] mx-auto"
            />
          </div>
          <div className="flex-grow md:ml-32">
            <div className="text-3xl font-serif ">Friends</div>
            <div className="flex flex-col w-1/2 mx-auto md:w-auto h-full  justify-evenly">
              <div className="space-y-4">
                <div className="text-4xl font-bold"> 🫂 </div>
                <p>
                  Exchanging perspectives on your own rides with others is
                  essential to improve self-understanding.
                </p>
                <p>
                  Two Tired supports the creation of closed spaces of intimacy
                  where you can share your rides and the experiences connected
                  with them.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold">🤏</div>
                Nudge your friends to go <br /> on more mindful rides.
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-[#184C5F] bg-opacity-30"></div>

        <div className="text-center w-4/5 md:w-3/5 mx-auto text-3xl font-serif">
          Other Screens
        </div>

        <img
          src={otherscreens}
          alt="Two Tired Onboarding"
          className="w-3/5 mx-auto mt-8 md:mt-16"
        />

        <div className="w-3/5 mx-auto h-[2px] mt-8 md:mt-16"></div>

        <div className="w-screen bg-black mb-8 md:mb-16">
          <div className="text-center pt-8 md:pt-16 w-4/5 md:w-3/5 mx-auto text-3xl font-serif text-[#426B7A]">
            Dark Mode
          </div>

          <img
            src={darkmode}
            alt="Two Tired Onboarding"
            className="w-3/5 mx-auto py-8 md:py-16"
          />
        </div>

        <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 mx-auto h-max">
          <div className="flex-none md:w-64 w-max md:mx-auto text-3xl font-serif">
            Shortcomings
          </div>
          <div className="space-y-2">
            <p>
              Judging by the widespread use mindfulness, it seems to be a very
              safe intervention. The uncommon reporting of adverse events
              implies that situations of risk are not high. However, there is
              little substantial data to quantify how significant any risk might
              be.
            </p>
            <p>
              Caution would therefore seem prudent in using mindfulness for
              patients with psychosis or major affective disorders, and
              intensive practice or retreats would not be recommended for new
              practitioners.
            </p>
          </div>
        </div>

        <div className="w-3/5 mx-auto h-[2px] my-8 md:my-16 bg-opacity-30"></div>
      </div>
    </div>
  );
}

export default TwoTired;

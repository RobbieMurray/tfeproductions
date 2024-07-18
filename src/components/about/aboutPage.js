import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray hover:text-black">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Ideation
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Something something about Ideation
            </h4>
          </div>

          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Production
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Something something about production
            </h4>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Packaging
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Something something about packaging
            </h4>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              SEO
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              something something about SEO
            </h4>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-white text-4xl font-semibold">PERFORMANCE</h2>
        <h3 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
          Time to lock new speeds
        </h3>

        <p className="text-white opacity-75 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          TFE Productions is a group of like minded individuals, with a passion
          for learning, media production, and snowsports. Having found a major
          gap in popular media in regards to skiing and snowboarding content,
          especially on YouTube, it became our goal(mission?) to help fill that
          gap. We’ve started by working together with companies, resorts, and
          professional athletes to help elevate their brand’s reach, short and
          long form content, and even ads(?) for everyone in the snowsports
          community to enjoy. So far we’ve helped our professional athlete
          clients build their YT channels by ___ amount, with a combined total
          of ___ views. We’ve also feature resort’s and their freestyle parks on
          our TFE Park Tours channel, worked with product companies to level up
          their ad and branding content, and in some cases bridge them together
          making __(adj.)___, compelling collaborations. Though, the ultimate
          part of working in this domain is continuous learning and teaching
          others through our partnership.
        </p>
      </div>
    </div>
  )
}

export default WorkPage

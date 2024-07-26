import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full flex flex-row justify-between align-middle bg-[url('../images/tfepattern02.webp')] bg-repeat bg-custom-size p-12 xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-midgray/30 p-10 rounded-lg lg:p-10">
            <div className="text-white font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl opacity-75">
              "[They] have produced a ton of content for both Snowboard
              Addiction and Ski Addiction as well as implemented important
              changes to our YouTube and TikTok channels that we continue to
              employ. Highly recommended!"
            </div>
            <div className="mt-10">
              <h3 className="text-white text-2xl font-inter">Nev Lapwood</h3>
              <p className="text-white text-sm  opacity-50">
                CEO Snowboard Addiction & Ski Addiction
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial

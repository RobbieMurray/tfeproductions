import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/tfepattern02.webp"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="This is an" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-white">
            Who is TFE Productions?
          </h1>
          <h2 className="text-white text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
            A production agency with a love for YouTube, action sports, stories
            and education.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader

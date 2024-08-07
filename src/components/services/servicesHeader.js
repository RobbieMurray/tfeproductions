import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

const ServicesHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden max-h-5xlm-4">
          <StaticImage
            alt="X Games"
            src="../../images/xgames.webp"
            placeholder="none"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            quality={100}
            aspectRatio={3}
          />
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-white opacity-75">
            What Does TFE Productions Offer?
          </h1>
          <h2 className="text-white text-6xl font-semibold leading-snug xxs:text-lg xs:text-xl sm:text-3xl lg:text-6xl">
            Our Services
          </h2>
          <p className="text-white opacity-75 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
            At TFE Productions we pride our selfs in taking the time to deeply
            understand our customers and their pain points. Wether you already
            have invested a lot of time into your YouTube channel and aren't
            seeing the results you want or have never hit publish. We can
            provide help in specific areas or a fully done for you solution.
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default ServicesHeader

import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import hero from "../../images/tfeprodlogow.webp"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-white text-4xl font-semibold opacity-75">
              TFE Productions
            </h1>
            <h2 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              YouTube Agency
            </h2>

            <p className="mt-3 text-white opacity-75 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              At TFE Productions, we specialize in crafting high-quality YouTube
              content that captivates and engages audiences. Our services
              encompass every aspect of the production process, from ideation
              and scripting to filming, editing, and optimization. Whether
              you’re a brand looking to expand your digital presence or an
              influencer aiming to grow your channel, our expert team is
              dedicated to bringing your vision to life with creativity and
              precision.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <Link
                  to="/services"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-black hover:text-white border border-yellow  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Our Services
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"

const ServicesExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="w-auto p-8 m-4 h-72 sm:h-96 xs:h-96 xxs:h-96 mt-10 bg-offblack rounded-xl flex flex-col items-center justify-center">
        <h2 className=" text-4xl font-semibold text-white opacity-75 text-center">
          Interested?
        </h2>
        <h3 className="text-6xl mt-2 font-bold text-white text-center xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
          Let Us Help You
        </h3>
        <p className="text-white opacity-75 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg"></p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
          <div className="rounded-md">
            <Link
              to="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-black hover:text-white border border-yellow  hover:bg-transparent md:text-lg md:px-10 "
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesExtra

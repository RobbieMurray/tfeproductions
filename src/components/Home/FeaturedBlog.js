import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade duration={2200}>
        <div className="bg-transparent">
          <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
            <h2 className="text-white text-4xl opacity-75 font-semibold pl-4">
              Stay Up To Date{" "}
            </h2>
            <h3 className="text-white pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Latest Posts
            </h3>
            <div className="blog-hover bg-offblack border mt-10 border-offblack p-8 md:p-12 mb-8">
              <h2 className="text-white text-3xl font-simibold mb-2">
                YouTube Fundamentals
              </h2>
              <p className="text-lg  text-white opacity-75 mb-6">
                YouTube is hard. Which is why we are breaking down how we
                fundamentally approach YouTube to achieve success, no matter the
                topic you wish to cover.
              </p>
              <Link
                to="/blog/fundamentals-of-youtube"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white opacity-75 hover:text-black rounded-lg border border-yellow  hover:bg-yellow"
              >
                Continue Reading
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="blog-hover bg-offblack p-8 md:p-12">
                <h2 className="text-white text-3xl font-simibold mb-2">
                  Is YouTube Right For You?
                </h2>
                <p className="text-lg font-normal text-white opacity-75 mb-4">
                  YouTube requires more upfront investment than other social
                  media platforms. However we believe there is greater long term
                  ROI potential. Here's what we think you need to consider if
                  you want to start a YouTube empire for yourself.
                </p>
                <Link
                  to="/blog/youtube-for-you"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white opacity-75 hover:text-black rounded-lg border border-yellow  hover:bg-yellow"
                >
                  Continue Reading
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
              <div className="blog-hover bg-offblack p-8 md:p-12">
                <h2 className="text-white text-3xl font-simibold mb-2">
                  WTF Is The "Algorithm"
                </h2>
                <p className="text-lg font-normal text-white opacity-75 mb-4">
                  The algorithm is a mistery to many, but not to us. Here is
                  everything you need to know.
                </p>
                <Link
                  to="/blog/wtf-algorithm"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white opacity-75 hover:text-black rounded-lg border border-yellow  hover:bg-yellow"
                >
                  Continue Reading
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
        </div>
      </Fade>
    </div>
  )
}

export default FeaturedBlog

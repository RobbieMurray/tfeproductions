import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="overflow-hidden m-4">
          <StaticImage
            alt="Joel Kristinsan"
            src="../../images/Joel_3-2.webp"
            placeholder="none"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
      </Fade>

      {/* <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 md:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden md:block">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden md:block">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden md:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade> */}

      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray hover:text-black">
            <Link to="/services/">
              <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
                Ideation
              </h3>
              <h4 className="mt-10 text-white opacity-75 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-xl">
                Learn More
              </h4>
            </Link>
          </div>

          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray hover:text-black">
            <Link to="/services/">
              <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
                Production
              </h3>
              <h4 className="mt-10 text-white opacity-75 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-xl">
                Learn More
              </h4>
            </Link>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray hover:text-black">
            <Link to="/services/">
              <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
                Packaging
              </h3>
              <h4 className="mt-10 text-white opacity-75 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-xl">
                Learn More
              </h4>
            </Link>
          </div>
        </div>
      </Fade> */}
      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray hover:text-black">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Ideation
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Learn More
            </h4>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Production
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Learn More{" "}
            </h4>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              Packaging
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Learn More{" "}
            </h4>
          </div>
          <div className="group transition-all duration-500ms ease-in-out hover:ease-in-out w-1/3 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:bg-lightgray">
            <h3 className="text-white transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black text-2xl">
              SEO
            </h3>
            <h4 className="mt-10 text-white opacity-70 transition-all duration-500ms ease-in-out hover:ease-in-out group-hover:text-black group-hover:opacity-100 text-xl">
              Learn More{" "}
            </h4>
          </div>
        </div>
      </Fade> */}

      <div className="mt-10 px-8">
        <h2 className="text-white text-4xl font-semibold opacity-75">
          Who Are We?
        </h2>
        <h3 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
          A production agency with a love for YouTube, action sports, stories
          and education.
        </h3>
        <p className="text-white opacity-75 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          TFE Productions is a group of like minded individuals, with a passion
          for learning, media production, and snowsports. Having found a major
          gap in popular media in regards to high quality and broad appealing
          skiing and snowboarding content, especially on YouTube, it became our
          mission to help fill that gap. We’ve started by working together with
          companies, resorts, and professional athletes to help elevate their
          brand’s reach, short and long form content, and even ads for everyone
          in the snowsports community to enjoy.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <Link
              to="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-black hover:text-white border border-yellow hover:bg-transparent md:text-lg md:px-10"
            >
              Contact Us
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

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <StaticImage
              alt="Alex Hackel"
              src="../../images/Hackel_3-2.webp"
              placeholder="none"
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            />
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold text-white opacity-75">
              Case Study
            </h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-white">
              Alex Hackel
            </h3>

            <p className="mt-3 text-white opacity-75 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              We helped take Alex Hackel in his first season on YouTube go from
              struggling to make a thousand views, to averaging almost 50,000
              views per video.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <Link
                  to="/blog/alex-hackel/"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-encodesans rounded-md text-center bg-yellow text-black hover:text-white border border-yellow hover:bg-transparent md:text-lg md:px-10"
                >
                  Learn More
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
      </div>

      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-lightgray p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Gatsby 5+</p>
                <p className="text-black opacity-50 text-sm">SSG and more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">React 18+</p>
                <p className="text-black opacity-50 text-sm">Create more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">
                  A utility-first CSS
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-offblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Start building amazing web experiences
            </h2>
            <p className="mt-10 text-white opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Fade> */}

      {/* <div className="mt-10 px-8">
        <h2 className="text-white text-4xl font-semibold opacity-75">
          INTEGRATIONS
        </h2>
        <h3 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl ">
          Discover and connect
        </h3>
        <p className="text-white opacity-75 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-black hover:text-white border border-yellow hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}

      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-lightgray">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-white hover:text-yellow border border-yellow hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection

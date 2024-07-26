import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a
              className="text-white flex-shrink-0 font-inter font-semibold"
              href="/"
            >
              <span className="text-white font-semibold">TFE</span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  className="relative after:rounded after:bg-yellow after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-inter"
                  to="/"
                >
                  Home
                </Link>
                {/* <Link
                  className="relative after:rounded after:bg-yellow after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-inter"
                  to="/about"
                >
                  About
                </Link> */}

                <Link
                  className="relative after:rounded after:bg-yellow after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-inter"
                  to="/services"
                >
                  Services
                </Link>
                {/* <Link
                  className="relative after:rounded after:bg-yellow after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-inter"
                  to="/gallery"
                >
                  How We Work
                </Link> */}
                <Link
                  className="relative after:rounded after:bg-yellow after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-inter"
                  to="/blog"
                >
                  Blog
                </Link>
                <div className="items-center">
                  <Link
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out bg-transparent mt-5 py-2.5 px-4 text-base font-medium text-center text-white rounded-lg border border-yellow hover:text-black border-black  hover:bg-yellow"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex bg-black md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-black bg-black dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="white"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="transition duration-1000 ease-in-out md:hidden bg-offblack">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-offblack transition duration-1000 ease-in-out">
            <Link
              className="text-white opacity-75 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-inter"
              to="/"
            >
              Home
            </Link>
            {/* <Link
              className="text-white opacity-75 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-inter"
              to="/about"
            >
              About
            </Link> */}

            <Link
              className="text-white opacity-75 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-inter"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-white opacity-75 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium font-inter"
              to="/blog"
            >
              Blog
            </Link>
            <div className="items-center mt-20 py-3">
              <Link
                to="/contact"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-offblack text-white hover:text-black border border-yellow hover:bg-yellow md:text-lg md:px-10 "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

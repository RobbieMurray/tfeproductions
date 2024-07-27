import { Link } from "gatsby"
import React from "react"

import { FaYoutube } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaTiktok } from "react-icons/fa6"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-lightgray p-10 mt-10">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <StaticImage
                alt="TFE Productions Logo"
                src="../images/tfeprodlogob.webp"
                placeholder="blurred"
                layout="constrained"
                formats={["auto", "webp", "avif"]}
                quality={100}
                width={112}
              />
              <p className="text-black opacity-70 text-sm mt-5 ">
                For all your social media production needs.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="flex justify-between w-1/4">
                <div className="text-black font-bold block-inline">
                  <p>
                    <a
                      href="https://instagram.com/the_flying_englishman"
                      target="_blank"
                      rel="noreferrer"
                      alt="TFE Instagram"
                    >
                      <FaInstagram color="black" />
                    </a>
                  </p>
                </div>
                <div className="text-black font-bold block-inline">
                  <p>
                    <a
                      href="https://www.youtube.com/@the_flying_englishman"
                      target="_blank"
                      rel="noreferrer"
                      alt="TFE YouTube"
                    >
                      <FaYoutube color="black" />
                    </a>
                  </p>
                </div>
                <div className="text-black font-bold block-inline">
                  <p>
                    <a
                      href="https://www.tiktok.com/@the_flying_englishman"
                      target="_blank"
                      rel="noreferrer"
                      alt="TFE TikTok"
                    >
                      <FaTiktok color="black" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
                {/* <li>
                  <Link to="/about" className="text-black">
                    About
                  </Link>
                </li> */}
                <li>
                  <Link to="/services" className="text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

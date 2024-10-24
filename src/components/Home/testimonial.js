import React from "react"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tfepattern02.webp" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage.childImageSharp.gatsbyImageData)
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="relative w-full h-full p-12 xxs:p-5 lg:p-12">
          <div className="absolute inset-0">
            <GatsbyImage
              image={image}
              alt="Background"
              className="w-full h-full"
              style={{ backgroundSize: "cover", backgroundRepeat: "repeat" }}
            />
          </div>
          <div className="relative w-full h-full flex flex-row justify-between items-center xxs:flex-col xs:flex-col sm:flex-row">
            <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-midgray/30 p-10 rounded-lg lg:p-10">
              <div className="text-white font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl opacity-75">
                "Robbie is fantastic to work with. Not only does he have a great
                understanding of YouTube with knowledge in packaging, ideation,
                and video editing, he also is driven, passionate, and easy to
                work with. He has been instrumental in my growth on YouTube, and
                I believe that he will make a huge impact for any creator or
                brand looking to grow their YouTube presence."
              </div>
              <div className="mt-10">
                <h3 className="text-white text-2xl font-inter">Alex Hackel</h3>
                <p className="text-white text-sm  opacity-50">
                  Professional Skier
                </p>
                {/* <div className="text-white font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl opacity-75">
                "[They] have produced a ton of content for both Snowboard
                Addiction and Ski Addiction as well as implemented important
                changes to our YouTube and TikTok channels that we continue to
                employ. Highly recommended!"
              </div>
              <div className="mt-10">
                <h3 className="text-white text-2xl font-inter">Nev Lapwood</h3>
                <p className="text-white text-sm  opacity-50">
                  CEO Snowboard Addiction & Ski Addiction
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial

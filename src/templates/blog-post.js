import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LeftIcon from "../images/left-icon.svg"
import RightIcon from "../images/right-icon.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.2;
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2;
  }
  & h4 {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2;
  }
  & p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding-bottom: 15px;
  }
  & a {
    color: #6b46c1;
  }
`
const BlogPost = props => {
  const { pageContext } = props
  const nextSlug = pageContext.next ? pageContext.next.fields.slug : "/"
  const previousSlug = pageContext.previous
    ? pageContext.previous.fields.slug
    : "/"
  const nextLinkStatus = pageContext.next
    ? pageContext.next.frontmatter.templateKey === "blog-post"
      ? true
      : false
    : false
  const previousLinkStatus = pageContext.previous
    ? pageContext.previous.frontmatter.templateKey === "blog-post"
      ? true
      : false
    : false

  const post = props.data.markdownRemark
  let date = new Date(post.frontmatter.date) // assuming post.frontmatter.date is in ISO string format
  let options = { year: "numeric", month: "short", day: "numeric" }
  let formattedDate = date.toLocaleDateString("en-US", options)
  let titlaDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let isoDate = date.toISOString().split("T")[0] // get the date part of the ISO string

  return (
    <Layout>
      <Seo
        title="Blog"
        description="We have been providing professional repair services in the city since 1993 ,and we have helped thousands of local car owners to restore their vehicles."
      />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl ">
                {post.frontmatter.title}
              </h1>
            </header>
            {post.frontmatter.featuredimage && (
              <div className="post-content-image">
                <GatsbyImage
                  image={getImage(post.frontmatter.featuredimage)}
                  className="lg:mb-1 overflow-hidden "
                  alt={post.frontmatter.title}
                />
              </div>
            )}
            <p className="text-base text-white dark:text-gray-400 lg:mb-2">
              <time dateTime={isoDate} title={titlaDate}>
                {formattedDate}
              </time>
            </p>

            <StyledDiv
              className="post-content-body text-white"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="flex items-center justify-between pt-8">
              <div>
                <Link
                  style={{
                    display: previousLinkStatus ? "flex" : "none",
                    alignItems: "center",
                    color: "#white",
                  }}
                  className="text-white	"
                  to={previousSlug}
                >
                  <img src={LeftIcon} alt="LeftIcon" width={30} height={30} />
                  <span>
                    {pageContext.previous
                      ? pageContext.previous.frontmatter.title?.length > 30
                        ? pageContext.previous.frontmatter.title.slice(0, 30) +
                          "..."
                        : pageContext.previous.frontmatter.title
                      : ""}
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  style={{
                    display: nextLinkStatus ? "flex" : "none",
                    alignItems: "center",
                    color: "#ffffff",
                  }}
                  className="text-white	"
                  to={nextSlug}
                >
                  <span>
                    {pageContext.next
                      ? pageContext?.next?.frontmatter?.title?.length > 30
                        ? pageContext?.next?.frontmatter?.title?.slice(0, 30) +
                          "..."
                        : pageContext?.next?.frontmatter?.title
                      : ""}
                  </span>
                  <img src={RightIcon} alt="RightIcon" width={30} height={30} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

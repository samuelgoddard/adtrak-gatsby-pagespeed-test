import React from "react"
import SEO from "../components/seo"
import Shape from "../components/shape/shape"
import Triangle from "../components/triangle/triangle"
import Moment from "react-moment"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogPostPage = ({ data: { post }, location, pageContext }) => {
  const readingTime = require('reading-time');
  const readingTimeEstimate = readingTime(post.content);
  const { prev } = pageContext;

  return (
    <>
      <SEO
        titleOverride={post.metaTags && post.metaTags.title ? post.metaTags.title : post.title}
        descriptionOverride={post.metaTags && post.metaTags.description ? post.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={post.metaTags && post.metaTags.image ? post.metaTags.image.url : null}
      />

      <section className="mb-0 lg:mb-12 mt-0 md:mt-6">
        <div className="container relative">
          <div className="w-full lg:w-9/12 mx-auto mb-6 lg:mb-10">
            <div className="lg:w-11/12 ml-auto overflow-hidden">
              <div className="flex flex-wrap items-center md:-mx-4">
                <div className="w-full md:w-auto md:text-right md:px-4 order-2 md:order-1 md:mt-8">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-4">
                      <span className="text-primary block text-lg">{ post.author.name }</span>
                      <Moment format="DD MMMM, Y">{ post.date }</Moment>
                    </div>
                    <div>
                      <Img
                        className="w-16 h-16 border-grey border-2 rounded-full bg-white"
                        backgroundColor={`#3B5CC4`}
                        fluid={post.author.avatar.fluid}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:flex-1 md:px-4 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap -mx-2">
                      <div className="px-2 w-full sm:w-auto mt-px mb-2 sm:mb-0">
                        <span className="text-base capitalize">{ readingTimeEstimate.text } <span className="text-primary">▸</span></span>
                      </div>

                      <div className="w-full sm:flex-1 flex flex-wrap px-2 -mx-1">
                        {post.categories.map(({ name, slug }, index) =>
                          <div key={index} className="px-1">
                            <Link
                              to={`blog/category/${slug}`}
                              className="block bg-secondary-light hover:opacity-75 focus:opacity-75 text-secondary-dark px-3 py-1 uppercase text-xs md:text-sm mb-2"
                            >
                              {name}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <h1 className="mb-0 pb-0" dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                </div>
              </div>
            </div>
          </div>
        </div>


        { post.featuredMedia && (
          <div className="w-full">
            <div className="container container--retina relative">
              <div className="w-1/2 md:w-1/3 absolute top-0 left-0">
                <Shape 
                  static={true}
                  index={7}
                />
              </div>
            </div>
            <div className="container">
              <div className="w-full lg:w-10/12 mx-auto pt-8 lg:pt-16">
                <Img backgroundColor={`#3B5CC4`} fluid={post.featuredMedia.fluid} />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="lg:mb-0">
        <div className="container relative">
          <div className="w-full lg:w-10/12 mx-auto">
            <div className="flex flex-wrap lg:-mx-12">
              <aside className="w-full lg:w-1/3 lg:px-12 relative order-2 lg:order-1">
                <div className="border-b border-grey pb-8 mb-8 lg:pb-10 sticky top-0 pt-12">
                  <span className="text-secondary text-xl mb-6 block">Adtrak is a full-service design, marketing and brand agency based in Nottingham.</span>

                  <Link to="/contact/" className="link text-xl font-display block text-secondary hover:text-secondary-dark focus:text-secondary-dark">
                    Get in touch
                    <span className={`ml-2 inline-block text-primary`}><Triangle size={`small`} /></span>
                  </Link>
                </div>
              </aside>

              <article className="content w-full lg:w-2/3 lg:px-12 order-1 lg:order-2 pt-12" dangerouslySetInnerHTML={{ __html: post.content }}></article>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-32">
        <div className="container relative">
          <div className="w-full lg:w-10/12 mx-auto">
            <div className="flex flex-wrap lg:-mx-12">
              <div className="w-full lg:w-2/3 lg:px-12 pt-12 ml-auto">
                <div className="flex flex-wrap items-center mb-8 lg:mb-12">
                  <div className="flex-1 border-grey border-b-2">
                  </div>
                  <div className="w-auto">
                    <span className="block text-secondary text-xl text-right pl-6">
                      <span className="inline-block mr-2">
                        Share this post
                      </span>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://adtrak.co.uk${ location.pathname }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:text-secondary-dark focus:text-secondary-dark"
                      >
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="mx-2" />
                      </a>
                      <a 
                        href={`http://twitter.com/share?text=${post.title}&url=https://adtrak.co.uk${ location.pathname }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:text-secondary-dark focus:text-secondary-dark"
                      >
                        <FontAwesomeIcon icon={['fab', 'twitter']} className="mx-2" />
                      </a>
                    </span>
                  </div>
                </div>

                { prev &&(
                  <div className="w-3/4">
                    <Link to={`/blog/${prev.node.slug}/`} className="text-lg lg:text-xl hover:text-secondary focus:text-secondary">
                      <span className="block">Next Post</span>
                      <div className="block text-xl lg:text-2xl font-display" dangerouslySetInnerHTML={{ __html: prev.node.title }}></div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPostPage

export const query = graphql`
  query blogPostQuery($slug: String!) {
    post: datoCmsArticle(slug: { eq: $slug }) {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      title
      date
      content
      featuredMedia {
        fluid(
          maxWidth: 1400
          imgixParams: {h: "570", w: "1400", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      categories {
        name
        slug
      }
      author {
        name
        avatar {
          fluid(imgixParams: {h: "640", w: "640", fit: "crop", crop: "faces"}) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
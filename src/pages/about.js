import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Clean minimal ideas. A blog for developers who appreciate simple
            lines.
          </h2>
          <Img
            fluid={data.benchAccounting.childImageSharp.fluid}
            className="kg-limage"
          />
          <p>
            I am Jorge Casal, a full stack JavaScript developer based in
            Stockholm, whose main focus is to innovate solutions. Check out my{" "}
            <a target="_blank" href="https://jorgecasal.github.io/">
              Portfolio
            </a>{" "}
            or take a look at my{" "}
            <a target="_blank" href="https://github.com/jorgecasal">
              Repo
            </a>{" "}
            and lets get to know each other a little better. Enjoy the hacking.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "blog.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

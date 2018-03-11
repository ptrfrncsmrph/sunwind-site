import React, { Fragment } from "react"
import Helmet from "react-helmet"

export default ({
  data: { markdownRemark: post }
}) => (
  <Fragment>
    <h1>{post.frontmatter.title}</h1>
  </Fragment>
)

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path } }
    ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

import React from "react"
import Link from "gatsby-link"

export default ({
  data: { allMarkdownRemark: { edges } }
}) => (
  <div>
    <h1>Yo cucksuckkkkerrrrrrrrssss</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {edges.map(
      ({
        node: { id, frontmatter: { title, path } }
      }) => (
        <a key={id} href={path}>
          {title}
        </a>
      )
    )}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 20) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

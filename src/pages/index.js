import React from "react"
import Link from "gatsby-link"

export default ({
  data: { allMarkdownRemark: { edges } }
}) => (
  <div>
    <h1>Yo cucksuckkkkerrrrrrrrssss</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {edges.map(
        ({
          node: {
            id,
            frontmatter: { title, path }
          }
        }) => (
          <li key={id}>
            <Link key={id} to={path}>
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 20
      filter: {
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`

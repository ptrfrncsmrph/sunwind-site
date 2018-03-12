const path = require("path")

exports.createPages = ({
  boundActionCreators,
  graphql
}) => {
  const postTemplate = path.resolve(
    "src/templates/post.js"
  )
  const { createPage } = boundActionCreators
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      console.log(res)
      return Promise.reject(res.errors)
    }
    console.log(res.data.allMarkdownRemark.edges)
    res.data.allMarkdownRemark.edges.forEach(
      ({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        })
      }
    )
  })
}

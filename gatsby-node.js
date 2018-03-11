const path = require("path")
const postTemplate = path.resolve(
  "src/templates/post.js"
)

exports.createPages = ({
  boundActionCreators,
  graphql
}) => {
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
      ({ node }) =>
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        })
    )
  })
}

import React, { Fragment } from "react"
import Link from "gatsby-link"
import { ConnectedUserContainer } from "../state/createStore"

const encode = data => {
  return Object.keys(data)
    .map(
      key =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key])
    )
    .join("&")
}

export default ({
  data: { allMarkdownRemark: { edges } }
}) => (
  <div>
    <h1>Hello</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2">Page 2</Link>
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
    <ConnectedUserContainer>
      {props => (
        <form
          onSubmit={e => {
            console.log(props)
            fetch("/", {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded"
              },
              body: encode({
                "form-name": "contact",
                ...props
              })
            })
              .then(() => alert("Success!"))
              .catch(error => alert(error))

            e.preventDefault()
          }}
        >
          {["user", "zip", "town"].map(key => (
            <input
              key={key}
              name={key}
              value={props[key]}
              type="text"
              onChange={({ target: { value } }) =>
                props.updateUser(key)(value)
              }
            />
          ))}
          <button type="submit">Button</button>
          <div>
            {JSON.stringify(props, null, 2)}
          </div>
        </form>
      )}
    </ConnectedUserContainer>
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

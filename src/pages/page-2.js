import React from "react"
import Link from "gatsby-link"
import { ConnectedUserForm } from "../state/createStore"

const SecondPage = () => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <input type="text" />
      <ConnectedUserForm>
        {props => JSON.stringify(props, null, 2)}
      </ConnectedUserForm>
    </div>
  )
}

export default SecondPage

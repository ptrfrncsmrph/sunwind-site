import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import logo from "../assets/Logo.svg"
import "./index.css"

const Header = () => (
  <div
    style={{
      background: "#2c3e50",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <img
            src={logo}
            alt="SunWind LLC Logo"
            width="200"
          />
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SunWind LLC | Cape Cod's Solar Professionals"
      meta={[
        {
          name: "description",
          content:
            "SunWind LLC has been trusted by homeowners on Cape Cod and beyond since 2009."
        },
        {
          name: "keywords",
          content:
            "solar, Cape Cod, solar installers, Massachusetts, SREC, renewable energy, solar panels, solar loan, smart program"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

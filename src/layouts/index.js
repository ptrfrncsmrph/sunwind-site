import React, { Fragment, Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, {
  ThemeProvider,
  withTheme
} from "styled-components"

import logo from "../assets/logo.svg"
import "./index.css"

const theme = {
  midnightBlue: "#2c3e50",
  wetAsphalt: "#34495e",
  wisteria: "#8e44ad",
  amethyst: "#9b59b6",
  belizeHole: "#2980b9",
  peterRiver: "#3498db",
  nephritis: "#27ae60",
  emerald: "#2ecc71",
  greenSea: "#16a085",
  turquoise: "#1abc9c",
  asbestos: "#95a5a6",
  concrete: "#7f8c8d",
  silver: "#bdc3c7",
  clouds: "#ecf0f1",
  pomegranate: "#c0392b",
  alizarin: "#e74c3c",
  pumpkin: "#d35400",
  carrot: "#e67e22",
  orange: "#f39c12",
  sunflower: "#f1c40f"
}

const Header = styled.header`
  margin-bottom: 1.5rem;
  max-width: 960px;
  padding: 1.45rem 0px 0px 1.0875rem;
  background: url("http://res.cloudinary.com/doyj6rjkr/image/upload/c_crop,h_173,q_100,w_1000,x_0,y_342/v1520730257/6C5A00721000.jpg");
`

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Fragment>
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
        <Header theme={theme}>
          <Link to="/">
            <img
              src={logo}
              alt="SunWind LLC Logo"
              width="200"
            />
          </Link>
        </Header>
        <form
          name="contact"
          netlify
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="user" />
          <input type="text" name="zip" />
          <input type="text" name="town" />
        </form>
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
      </Fragment>
    </ThemeProvider>
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

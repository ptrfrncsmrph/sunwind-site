module.exports = {
  siteMetadata: {
    title: `SunWind LLC`
  },
  pathPrefix: "/sunwind-gatsby",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    `gatsby-transformer-remark`
  ]
}

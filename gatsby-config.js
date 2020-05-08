module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful V2`,
    siteUrl: `https://www.stephangriesel.com`,
    description: `Boiler Plate for Gatsby & Contentful`,
    twitterUsername: '@stevegriesel',
    image: '/person.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

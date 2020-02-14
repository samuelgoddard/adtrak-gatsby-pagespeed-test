require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.adtrak.co.uk`,
    title: `Adtrak`,
    description: `Your Partner In Digital.`,
    author: `@adtrak`,
  },
  plugins: [
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        whitelistPatterns: [/is-active/],
        whitelist: ['text-secondary', 'text-secondary-dark']
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adtrak`,
        short_name: `adtrak`,
        start_url: `/`,
        background_color: `#FF6B4A`,
        theme_color: `#FF6B4A`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}

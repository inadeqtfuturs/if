module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'inadequate futures',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--more-->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'inadequate-futures',
        short_name: 'if',
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'content/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

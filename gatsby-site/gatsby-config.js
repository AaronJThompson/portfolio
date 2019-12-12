module.exports = {
  siteMetadata: {
    title: "Aaron Thompson - Portfolio",
    author: "Aaron Thompson",
    description: "Aaron Thompson's professional portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aaron Thompson - Portfolio',
        short_name: "Aaron's Portfolio",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

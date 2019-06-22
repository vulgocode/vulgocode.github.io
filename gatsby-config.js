module.exports = {
  siteMetadata: {
    title: 'Vulgocode',
    description: 'agencia vulgocode',
    author: '@alexandrer_stos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vulgocode Agency Web',
        short_name: 'vulgocode',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142577313-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'vulgocode.github.io',
      },
    },
  ],
};

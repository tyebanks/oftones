/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 
 */
module.exports = {
    siteMetadata: {
        title: `Voice of Tones`,
        description: `A description of your site.`,
        author: `Toni J`,
        siteUrl: `https://voiceoftones.com/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: `https://cms.voiceoftones.com/graphql`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}

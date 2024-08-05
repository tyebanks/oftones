/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 
 */
module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: `https://cms.voiceoftones.com/graphql`,
            },
        },
    ],
}

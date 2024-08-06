// gatsby-node.js

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Query for all blog posts
    const result = await graphql(`
        query {
            allWpPost {
                nodes {
                    id
                    slug
                }
            }
        }
    `)

    // Handle query errors
    if (result.errors) {
        throw new Error('Error querying WordPress posts')
    }

    // Create a page for each blog post
    result.data.allWpPost.nodes.forEach((post) => {
        createPage({
            path: `/posts/${post.slug}/`, // URL path for the blog post page
            component: path.resolve('./src/templates/post.js'), // Path to the template file
            context: {
                id: post.id, // Pass the post ID to the template
            },
        })
    })
}

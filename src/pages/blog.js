import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Category from '../components/Category'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    const categories = data.allWpCategory.nodes
    const categoriesACF = data.wpPage.blogPage.categories

    // Map images to categories based on slug matching alt text
    const categoriesWithImages = categories.map((category) => {
        let categoryImage = null

        // Loop through each ACF image field to find a match
        Object.values(categoriesACF).forEach((categoryACF) => {
            if (
                categoryACF &&
                categoryACF.node &&
                categoryACF.node.altText.toLowerCase() ===
                    category.slug.toLowerCase()
            ) {
                categoryImage = categoryACF.node.sourceUrl
            }
        })

        return {
            ...category,
            image: categoryImage, // Assign image URL if found
        }
    })

    // Extract pageTitle and subheading from categoriesACF
    const { pageTitle, subheading } = categoriesACF

    return (
        <Layout>
            <section className="blog__wrapper">
                <h1>{pageTitle}</h1>
                <h2>{subheading}</h2>
                {categoriesWithImages.length === 0 ? (
                    <div>No categories found</div>
                ) : (
                    <Category categories={categoriesWithImages} />
                )}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query BlogPageData {
        # Query for fetching Main Categories in WordPress
        allWpCategory(
            filter: {
                parentDatabaseId: { eq: null }
                description: { ne: null }
            }
        ) {
            nodes {
                id
                name
                slug
                description
                parentDatabaseId
            }
        }
        # Query for fetching Images to use for Main Categories
        wpPage(slug: { eq: "blog" }) {
            id
            title
            blogPage {
                categories {
                    pageTitle
                    subheading
                    belleBeauty {
                        node {
                            sourceUrl
                            altText
                        }
                    }

                    booksReading {
                        node {
                            sourceUrl
                            altText
                        }
                    }

                    twoTreadTravel {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                    tonesPoetry {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage

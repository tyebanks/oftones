import React, { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Category from '../components/Category'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    const [selectedCategory, setSelectedCategory] = useState(null) // Track the selected category
    const categories = data.allWpCategory.nodes
    const categoriesACF = data.wpPage.blogPage.categories

    // Define the onCategoryClick function
    const onCategoryClick = (slug) => {
        setSelectedCategory(slug)
    }

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

    // Find the selected category data
    const selectedCategoryData = categories.find(
        (category) => category.slug === selectedCategory
    )

    return (
        <Layout>
            <section className="blog__wrapper">
                <h1>{pageTitle}</h1>
                <h2>{subheading}</h2>
                <Category
                    categories={categoriesWithImages}
                    onCategoryClick={onCategoryClick}
                />

                {selectedCategoryData && (
                    <div id={selectedCategory}>
                        <h3>Posts for: {selectedCategoryData.name}</h3>
                        <ul>
                            {selectedCategoryData.posts.nodes.map((post) => (
                                <li key={post.id}>
                                    <h4>{post.title}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: post.excerpt,
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
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
                posts {
                    nodes {
                        id
                        title
                        slug
                        excerpt
                    }
                }
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

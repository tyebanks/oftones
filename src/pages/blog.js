import React, { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Category from '../components/Category'
import PostList from '../components/PostList'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const categories = data.allWpCategory.nodes
    const categoriesACF = data.wpPage.blogPage.categories

    const onCategoryClick = (slug) => {
        setSelectedCategory(slug)
    }

    const categoriesWithImages = categories.map((category) => {
        let categoryImage = null
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
            image: categoryImage,
        }
    })

    const { pageTitle, subheading } = categoriesACF

    const selectedCategoryData = categories.find(
        (category) => category.slug === selectedCategory
    )

    return (
        <Layout>
            <section className="blog__wrapper">
                <h1>{pageTitle}</h1>

                {!selectedCategory ? (
                    <Category
                        categories={categoriesWithImages}
                        onCategoryClick={onCategoryClick}
                        subheading={subheading}
                    />
                ) : (
                    <PostList
                        category={selectedCategoryData}
                        onBack={() => setSelectedCategory(null)} // Back button handler
                    />
                )}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query BlogPageData {
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
                wpChildren {
                    nodes {
                        id
                        name
                        slug
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
            }
        }
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

import React, { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Category from '../components/Category'
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
                <h2>{subheading}</h2>
                <Category
                    categories={categoriesWithImages}
                    onCategoryClick={onCategoryClick}
                />

                {selectedCategoryData && (
                    <div id={selectedCategory}>
                        <h3>Posts for: {selectedCategoryData.name}</h3>
                        {selectedCategoryData.posts.nodes.length > 0 ? (
                            <ul>
                                {selectedCategoryData.posts.nodes.map(
                                    (post) => (
                                        <li key={post.id}>
                                            <h4>{post.title}</h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt,
                                                }}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        ) : (
                            <p>
                                We're sorry, no posts have been made to{' '}
                                {selectedCategoryData.name} yet.
                            </p>
                        )}

                        {selectedCategoryData.wpChildren?.nodes?.length > 0 && (
                            <div>
                                {selectedCategoryData.wpChildren.nodes.map(
                                    (childCategory) => (
                                        <div key={childCategory.id}>
                                            <h4>{childCategory.name}</h4>
                                            {childCategory.posts.nodes.length >
                                            0 ? (
                                                <ul>
                                                    {childCategory.posts.nodes.map(
                                                        (post) => (
                                                            <li key={post.id}>
                                                                <h5>
                                                                    {post.title}
                                                                </h5>
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: post.excerpt,
                                                                    }}
                                                                />
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : (
                                                <p>
                                                    We're sorry, no posts have
                                                    been made to{' '}
                                                    {childCategory.name} yet.
                                                </p>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
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

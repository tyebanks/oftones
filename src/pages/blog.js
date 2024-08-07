import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Category from '../components/Category'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    const page = data?.wpPage

    if (!page) return <div>Oops, no data found on blog categories</div>

    const { categories } = page.blogPage

    // Extract pageTitle and subheading from categories
    const { pageTitle, subheading } = categories

    // Create an array of images from the categories object
    const images = [
        {
            src: categories.belleBeauty?.node?.sourceUrl,
            alt: categories.belleBeauty?.node?.altText,
        },
        {
            src: categories.freelancing?.node?.sourceUrl,
            alt: categories.freelancing?.node?.altText,
        },
        {
            src: categories.booksReading?.node?.sourceUrl,
            alt: categories.booksReading?.node?.altText,
        },
        {
            src: categories.haircare?.node?.sourceUrl,
            alt: categories.haircare?.node?.altText,
        },
        {
            src: categories.twoTreadTravel?.node?.sourceUrl,
            alt: categories.twoTreadTravel?.node?.altText,
        },
        {
            src: categories.tonesPoetry?.node?.sourceUrl,
            alt: categories.tonesPoetry?.node?.altText,
        },
    ]

    return (
        <Layout>
            <section className="blog__wrapper">
                <h1>{pageTitle}</h1>
                <h2 className='home__h2'>{subheading}</h2>
                {images.length === 0 ? (
                    <div>No categories found</div>
                ) : (
                    <Category images={images} />
                )}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query BlogPageData {
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
                    freelancing {
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
                    haircare {
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

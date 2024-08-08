import '../styles/global.scss'
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    const posts = data.allWpPost.nodes

    const heroImage = data.wpPage.heroBanner.heroImage1.node.sourceUrl
    // const heroImage = data.wpPage.heroBanner

    return (
        <Layout showHero={true} heroImage={heroImage}>
            <section className="index__wrapper">
                <h2 className="home__h2">Latest Blog Posts</h2>
                <div className="card_wrapper">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            readTime={post.postUtility.readTime}
                            categories={post.categories.nodes}
                            slug={post.slug}
                            date={post.date}
                            excerpt={post.excerpt}
                            featuredImage={post.featuredImage} // Pass the featured image data
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}
export const Head = () => <Seo title="Home" />
export default IndexPage

export const indexPageQuery = graphql`
    query {
        wpPage(id: { eq: "cG9zdDo4OA==" }) {
            id
            title
            slug

            heroBanner {
                heroImage1 {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
        allWpPost(sort: { date: DESC }, limit: 6) {
            nodes {
                id
                title
                slug
                date(formatString: "MMM DD, YYYY")
                excerpt
                categories {
                    nodes {
                        name
                    }
                }
                postUtility {
                    readTime
                }
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
    }
`

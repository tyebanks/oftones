import '../styles/global.scss'
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import About from '../components/About'

const AboutPage = ({ data }) => {
    const page = data.wpPage

    if (!page) return <div>No data found</div>

    const {
        pageTitle,
        welcomeMessage,
        subTitle1,
        contentSection1,
        image1,
        subTitle2,
        contentSection2,
        // image2,
        signature,
    } = page.aboutPage

    const authorBio = {
        intro: subTitle1,
        imageSrc: image1.node.sourceUrl,
        altText: image1.node.altText,
        description: [contentSection1], // Adjust if description is an array
    }

    const blogFocus = {
        intro: subTitle2,
        // imageSrc: image2.node.sourceUrl,
        // altText: image2.node.altText,
        description: [contentSection2], // Adjust if description is an array
        closing: [signature], // Add actual closing items if any
    }

    return (
        <Layout>
            <section className="about__wrapper">
                <h1>{pageTitle}</h1>
                <About
                    welcomeMessage={welcomeMessage}
                    authorBio={authorBio}
                    blogFocus={blogFocus}
                />
            </section>
        </Layout>
    )
}

export const query = graphql`
    query AboutPageData {
        wpPage(slug: { eq: "about" }) {
            id
            aboutPage {
                pageTitle
                welcomeMessage
                subTitle1
                contentSection1
                image1 {
                    node {
                        sourceUrl
                        altText
                    }
                }
                subTitle2
                contentSection2
                image2 {
                    node {
                        sourceUrl
                        altText
                    }
                }
                signature
            }
        }
    }
`

export const Head = () => <Seo title="About" />
export default AboutPage

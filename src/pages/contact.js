import * as React from 'react'
import Layout from '../components/Layout' // Adjust the import based on your file structure
import Seo from '../components/seo' // Adjust the import based on your file structure
import Contact from '../components/Contact'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => {
    const page = data.wpPage

    if (!page) return <div>No data found</div>

    const {
        heading,
        subheading,
        mainImage,
        emailButton,
        instagramButton,
        facebookButton,
        xtwitterButton,
        linkedinButton,
    } = page.contactPage

    return (
        <Layout>
            <section className="contact__wrapper">
                <h1>{heading}</h1>
                <Contact
                    subheading={subheading}
                    mainImage={mainImage}
                    emailButton={emailButton}
                    instagramButton={instagramButton}
                    facebookButton={facebookButton}
                    xtwitterButton={xtwitterButton}
                    linkedinButton={linkedinButton}
                />
            </section>
        </Layout>
    )
}
export const query = graphql`
    query ContactPageData {
        wpPage(id: { eq: "cG9zdDozMQ==" }) {
            #  wpPage(slug: { eq: "contact" })
            title
            contactPage {
                heading
                subheading
                mainImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
                emailButton
                instagramButton
                facebookButton
                xtwitterButton
                linkedinButton
            }
        }
    }
`
export const Head = () => <Seo title="Contact" />
export default ContactPage

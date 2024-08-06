import * as React from 'react'
import Layout from '../components/Layout' // Adjust the import based on your file structure
import Seo from '../components/seo' // Adjust the import based on your file structure
// import Contact from '../components/Contact'
// import { graphql } from 'gatsby'

const ContactPage = () => (
    <Layout>
        <section className="contact__wrapper">
            <h1>Contact Tones</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </section>

        {/* <Contact /> */}
    </Layout>
)

export const Head = () => <Seo title="Contact" />
export default ContactPage

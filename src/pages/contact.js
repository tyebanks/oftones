import * as React from 'react'
import Layout from '../components/Layout' // Adjust the import based on your file structure
import Seo from '../components/seo' // Adjust the import based on your file structure
// import Contact from '../components/Contact'
// import { graphql } from 'gatsby'

const ContactPage = () => (
    <Layout>
        <h1>Contact Tones</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        {/* <Contact /> */}
    </Layout>
)

export const Head = () => <Seo title="About" />
export default ContactPage

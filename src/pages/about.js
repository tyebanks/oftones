import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
// import About from '../components/About'

const AboutPage = () => (
    <Layout>
        <section className="about__wrapper">
            <h1>About Tones</h1>
            {/* <About /> */}
        </section>
    </Layout>
)

export const Head = () => <Seo title="About" />
export default AboutPage

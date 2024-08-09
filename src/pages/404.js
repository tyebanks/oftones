import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'
import Seo from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <div className="page404">
            <h1>Something's wrong here...</h1>
            <p>
                Oops... we're sorry. You just hit a route that doesn&#39;t
                exist... the sadness.
            </p>
            <h2>404: Page Not Found</h2>
            <Button text="Go Home" to="/" />
        </div>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

import * as React from 'react'
import * as styles from './Layout.module.scss'
import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children, showHero, heroImage }) => {
    return (
        <>
            <Header />
            {showHero && <Hero image={heroImage} />}
            <div className={styles.wrapper}>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout

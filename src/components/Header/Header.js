// src/components/Header/Header.js

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

const Header = () => {
    const data = useStaticQuery(graphql`
        query NavBar {
            allWpPage {
                nodes {
                    id
                    title
                    slug
                }
            }
        }
    `)

    const navLinks = data.allWpPage.nodes.map((page) => ({
        text: page.title,
        url: page.slug === 'home' ? '/' : `/${page.slug}`,
        badge: false, // or any other logic to determine the badge
    }))

    return (
        <header className={styles.header}>
            <Navigation navLinks={navLinks} />
            <Logo />
        </header>
    )
}

export default Header

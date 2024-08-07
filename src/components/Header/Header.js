// src/components/Header/Header.js

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

const Header = () => {
    const data = useStaticQuery(graphql`
        query PrimaryMenu {
            wpMenu(id: { eq: "dGVybTozMQ==" }) {
                menuItems {
                    nodes {
                        id
                        label
                        url
                    }
                }
            }
        }
    `)

    // Access menu items from the data
    const menuItems = data.wpMenu.menuItems.nodes

    // Map menu items to nav links
    const navLinks = menuItems.map((item) => {
        // Normalize URLs to handle full domain URLs and specific cases
        let normalizedUrl
        if (
            item.url === 'https://cms.voiceoftones.com/' ||
            item.url === 'home'
        ) {
            normalizedUrl = '/'
        } else if (item.url.startsWith('https://cms.voiceoftones.com/')) {
            normalizedUrl = item.url.replace(
                'https://cms.voiceoftones.com/',
                ''
            )
        } else {
            normalizedUrl = item.url
        }
        return {
            text: item.label,
            url: normalizedUrl,
            badge: false, // or any other logic to determine the badge
        }
    })
    return (
        <header className={styles.header}>
            <Navigation navLinks={navLinks} />
            <Logo />
        </header>
    )
}

export default Header

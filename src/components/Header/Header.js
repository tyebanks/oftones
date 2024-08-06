// src/components/Header/Header.js

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

const Header = () => {
    const data = useStaticQuery(graphql`
        query NavBar {
            allWpMenu {
                nodes {
                    name
                    menuItems {
                        nodes {
                            id
                            label
                            url
                        }
                    }
                }
            }
        }
    `)

    const navLinks = data.allWpMenu.nodes[0].menuItems.nodes.map((item) => ({
        text: item.label,
        url: item.url,
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

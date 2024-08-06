// src/components/Navigation.js
// src/components/Navigation/Navigation.js

import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Navigation.module.scss'

const Navigation = ({ navLinks }) => (
    <nav className={styles.nav}>
        {navLinks.map((link) => (
            <React.Fragment key={link.url}>
                <Link className={styles.navLink} to={link.url}>
                    {link.text}
                </Link>
            </React.Fragment>
        ))}
    </nav>
)

export default Navigation

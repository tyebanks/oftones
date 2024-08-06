import * as React from 'react'
import * as styles from './Logo.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => (
    <div className={styles.container}>
        <StaticImage
            className={styles.logo}
            src="../../images/logo.gif"
            alt="Site Logo"
        />
    </div>
)

export default Logo

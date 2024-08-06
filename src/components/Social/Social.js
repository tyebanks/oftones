// export default Social;
import * as React from 'react'
import * as styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
    faTiktok,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Social = ({ youtube, tiktok, instagram, facebook, x, linkedin }) => (
    <section className={styles.socials}>
        {youtube && (
            <a className={styles.glow_btns} href={youtube} aria-label="Youtube">
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
        )}

        {tiktok && (
            <a className={styles.glow_btns} href={tiktok} aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
            </a>
        )}

        {instagram && (
            <a
                className={styles.glow_btns}
                href={instagram}
                aria-label="Instagram"
            >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
        )}

        {facebook && (
            <a
                className={styles.glow_btns}
                href={facebook}
                aria-label="Facebook"
            >
                <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </a>
        )}

        {x && (
            <a className={styles.glow_btns} href={x} aria-label="X/Twitter">
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
            </a>
        )}

        {linkedin && (
            <a
                className={styles.glow_btns}
                href={linkedin}
                aria-label="LinkedIn"
            >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
        )}
    </section>
)

export default Social

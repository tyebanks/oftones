// export default Footer;
import * as React from 'react'
import * as styles from './Footer.module.scss'
import Social from '../Social/Social'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(id: { eq: "cG9zdDo4OA==" }) {
                contactPage {
                    youtubeButton
                    tiktokButton
                    instagramButton
                    facebookButton
                    xtwitterButton
                    linkedinButton
                }
            }
        }
    `)

    const socialLinks = data.wpPage.contactPage

    return (
        <footer className={styles.footer}>
            <Social
                youtube={socialLinks.youtubeButton}
                tiktok={socialLinks.tiktokButton}
                instagram={socialLinks.instagramButton}
                facebook={socialLinks.facebookButton}
                x={socialLinks.xtwitterButton}
                linkedin={socialLinks.linkedinButton}
            />
            <div>
                © Copyright 2018 - {new Date().getFullYear()} · voiceoftones.com
                · All rights reserved · Developed by &nbsp;{' '}
                <a
                    href="https://tyebanks-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    T.Ebanks
                </a>
            </div>
        </footer>
    )
}

export default Footer

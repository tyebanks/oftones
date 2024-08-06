import * as React from 'react'
import * as styles from './Contact.module.scss'

const Contact = ({
    subheading,
    mainImage,
    emailButton,
    instagramButton,
    facebookButton,
    xtwitterButton,
    linkedinButton,
}) => {
    const { sourceUrl = '', altText = '' } = mainImage?.node || {}

    return (
        <section className={styles.container}>
            <div className={styles.glass_card}>
                <div className={styles.image_border_container}>
                    <div className={styles.image_container}>
                        <img src={sourceUrl} alt={altText} />
                    </div>
                </div>

                <h2 className={styles.subheading}>{subheading}</h2>

                <div className={styles.contact_buttons}>
                    {emailButton && (
                        <a
                            className={styles.btn}
                            href={`mailto:${emailButton}`}
                        >
                            Email
                        </a>
                    )}
                    {instagramButton && (
                        <a
                            className={styles.btn}
                            href={instagramButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    )}
                    {facebookButton && (
                        <a
                            className={styles.btn}
                            href={facebookButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    )}
                    {xtwitterButton && (
                        <a
                            className={styles.btn}
                            href={xtwitterButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            X-Twitter
                        </a>
                    )}
                    {linkedinButton && (
                        <a
                            className={styles.btn}
                            href={linkedinButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact

// src/components/About/About.js
import * as React from 'react'
import * as styles from './About.module.scss'

const WelcomeMsg = ({ message }) => (
    <section className={styles.welcome_msg}>
        <p>{message}</p>
    </section>
)

const AuthorBio = ({ intro, imageSrc, altText, description }) => (
    <section className={styles.author_bio_wrapper}>
        <div className={styles.bio_image_container}>
            <img className={styles.bio_image} src={imageSrc} alt={altText} />
        </div>
        <div className={styles.bio_text_container}>
            <h2>{intro}</h2>
            {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    </section>
)

const BlogFocus = ({ intro, imageSrc, altText, description, closing }) => (
    <section className={styles.blog_focus_wrapper}>
        <div className={styles.blog_focus_top}>
            <h2>{intro}</h2>
            <p className={styles.intro}>{description[0]}</p>
        </div>
        <div className={styles.octagon_border}>
            <div className={styles.blog_img_container}>
                <img className={styles.blog_img} src={imageSrc} alt={altText} />
            </div>
        </div>
        <div className={styles.blog_focus_bottom}>
            {description.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            {closing.map((item, index) => (
                <p key={index} className={styles.signature}>
                    {item}
                </p>
            ))}
        </div>
    </section>
)

const About = ({ welcomeMessage, authorBio, blogFocus }) => (
    <article className={styles.wrapper}>
        <WelcomeMsg message={welcomeMessage} />
        <AuthorBio
            intro={authorBio.intro}
            imageSrc={authorBio.imageSrc}
            altText={authorBio.altText}
            description={authorBio.description}
        />
        <BlogFocus
            intro={blogFocus.intro}
            imageSrc={blogFocus.imageSrc}
            altText={blogFocus.altText}
            description={blogFocus.description}
            closing={blogFocus.closing}
        />
    </article>
)

export default About

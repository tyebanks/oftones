// src/components/Card/Card.js

import * as React from 'react'
import * as styles from './Card.module.scss'
import Button from '../Button/Button'
import parse from 'html-react-parser'

const Card = ({
    title,
    slug,
    date,
    readTime,
    categories,
    excerpt,
    featuredImage,
}) => {
    // Extract category names if they exist
    const categoryNames = categories.map((category) => category.name).join(', ')

    return (
        <article className={styles.card}>
            {featuredImage && (
                <section className={styles.card_image}>
                    <img
                        src={featuredImage.node.sourceUrl}
                        alt={featuredImage.node.altText}
                    />
                </section>
            )}
            <section className={styles.card_title}>
                <h2>{title}</h2>
            </section>
            {/* <section className={styles.util_info}>
                
            </section> */}
            <section className={styles.post_info}>
                <p>{date}</p>
                <p className={styles.card_readtime}>{categoryNames} mins</p>
                <p className={styles.card_readtime}>{readTime} mins</p>
            </section>

            <section className={styles.card_excerpt}>{parse(excerpt)}</section>
            <section className={styles.button}>
                <Button text="Read More" to={`/posts/${slug}`} />
            </section>
        </article>
    )
}

export default Card

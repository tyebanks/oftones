// src/components/Card/Card.js

import * as React from 'react'
import * as styles from './Card.module.scss'
import Button from '../Button/Button'
import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

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
                <section
                    className={styles.card_image}
                    style={{
                        backgroundImage: `url(${featuredImage.node.sourceUrl})`,
                    }}
                >
                    <p className={styles.date}>{date}</p>
                </section>
            )}
            <section className={styles.post_info}>
                <p className={styles.card_tag}>{categoryNames}</p>
                <p className={styles.card_readtime}>
                    <FontAwesomeIcon icon={faClock} /> {readTime} mins
                </p>
            </section>
            <section className={styles.card_title}>
                <h3>{title}</h3>
            </section>

            <section className={styles.card_excerpt}>{parse(excerpt)}</section>
            <section className={styles.button}>
                <Button text="Read More" to={`/posts/${slug}`} />
            </section>
        </article>
    )
}

export default Card

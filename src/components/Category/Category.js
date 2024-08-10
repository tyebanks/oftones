import React from 'react'
import * as styles from './Category.module.scss'

const Category = ({ categories, onCategoryClick, subheading }) => {
    return (
        <section className={styles.content_wrapper}>
            {subheading && <h2>{subheading}</h2>}
            <div className={styles.category_container}>
                {categories.map((category, index) => (
                    <article key={index} className={styles.category_box}>
                        <a
                            href="#!"
                            onClick={(e) => {
                                e.preventDefault() // Prevent default anchor behavior
                                onCategoryClick(category.slug) // Set selected category slug
                            }}
                        >
                            {category.image && (
                                <div
                                    className={styles.blog_category}
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>
                            )}
                            <div className={styles.inner_box}>
                                <div className={styles.category_title}>
                                    <p>{category.name}</p>
                                </div>
                                <span className={styles.top}></span>
                                <span className={styles.right}></span>
                                <span className={styles.bottom}></span>
                                <span className={styles.left}></span>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Category

import * as React from 'react'
import * as styles from './Category.module.scss'

const Category = ({ categories }) => {
    return (
        <section className={styles.category_wrapper}>
            {categories.map((category, index) => (
                <article key={index} className={styles.category_box}>
                    <a href={`/category/${category.slug}`}>
                        {' '}
                        {/* Use the category slug for the link */}
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
                                <p>{category.name}</p>{' '}
                                {/* Display category name */}
                            </div>
                            <span className={styles.top}></span>
                            <span className={styles.right}></span>
                            <span className={styles.bottom}></span>
                            <span className={styles.left}></span>
                        </div>
                    </a>
                </article>
            ))}
        </section>
    )
}

export default Category

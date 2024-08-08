import * as React from 'react'
import * as styles from './Category.module.scss'

const Category = ({ images }) => {
    return (
        <section className={styles.category_wrapper}>
            {images.map((image, index) => (
                <article key={index} className={styles.category_box}>
                    <a href={image.src}>
                        {image.src && (
                            <div
                                className={styles.blog_category}
                                style={{
                                    backgroundImage: `url(${image.src})`,
                                }}
                            ></div>
                        )}
                        <div className={styles.inner_box}>
                            <div className={styles.category_title}>
                                <p>{image.alt}</p>
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

// src/components/PostList.js

import * as React from 'react'
// import { Link } from 'gatsby'
import * as styles from './PostList.module.scss'

const PostList = ({ category, onBack }) => {
    if (!category) return null

    const { posts, wpChildren } = category

    return (
        <div className={styles.postListWrapper}>
            {/* Back to Categories Button */}
            <button onClick={onBack} className={styles.backButton}>
                Back to Categories
            </button>

            {/* Posts for the selected category */}
            {posts.nodes.length > 0 ? (
                <>
                    <h2>{category.name}</h2>
                    <ul className={styles.main_category_posts}>
                        {posts.nodes.map((post) => (
                            <li key={post.id}>
                                <h4>{post.title}</h4>
                                <div className={styles.excerpt}
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    Sorry, there are no posts made under this category at this
                    time.
                </p>
            )}

            {/* Subcategory posts */}
            {wpChildren.nodes.length > 0 &&
                wpChildren.nodes.map((childCategory) => (
                    <div key={childCategory.id}>
                        <h3>- {childCategory.name}</h3>
                        {childCategory.posts.nodes.length > 0 ? (
                            <ul className={styles.subcategory_posts}>
                                {childCategory.posts.nodes.map((post) => (
                                    <li key={post.id}>
                                        <h4>{post.title}</h4>
                                        <div className={styles.excerpt}
                                            dangerouslySetInnerHTML={{
                                                __html: post.excerpt,
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                Sorry, there are no posts made under this
                                subcategory at this time.
                            </p>
                        )}
                    </div>
                ))}
        </div>
    )
}

export default PostList

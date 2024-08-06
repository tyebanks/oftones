import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import parse from 'html-react-parser'
import * as styles from './post.module.scss'

const PostTemplate = ({ data }) => {
    const { wpPost } = data // Destructure wpPost from data

    // Error handling if wpPost is not found
    if (!wpPost) {
        return (
            <Layout>
                <p>Post not found</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <Seo title={wpPost.title} />
            <article className={styles.blog_wrapper}>
                <section className={styles.post_content}>
                    <h1 itemProp="headline">{parse(wpPost.title)}</h1>
                    <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
                </section>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String!) {
        wpPost(id: { eq: $id }) {
            title
            content
        }
    }
`

export default PostTemplate
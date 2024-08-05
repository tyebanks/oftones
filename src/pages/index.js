import * as React from 'react'
import { graphql } from 'gatsby'

// Define the component
export default function Home({ data }) {
    // Destructure the fetched data
    const pages = data.allWpPage.nodes

    return (
        <div>
            <h1>Pages</h1>
            <ul>
                {pages.map((page) => (
                    <li key={page.slug}>
                        <a href={`/${page.slug}`}>{page.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Define the GraphQL query
export const query = graphql`
    query NavigationBar {
        allWpPage {
            nodes {
                title
                slug
            }
        }
    }
`

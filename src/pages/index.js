import * as React from 'react'
import { graphql } from 'gatsby'

// Define the component
export default function IndexPage({ data }) {
    const menuItems = data.allWpMenu.nodes[0].menuItems.nodes

    return (
        <div>
            <nav>
                <ul>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <a href={menuItem.url}>{menuItem.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <h1>Welcome to the homepage!</h1>
            {/* Other page content */}
        </div>
    )
}

// Define the GraphQL query
export const query = graphql`
    query {
        allWpMenu {
            nodes {
                name
                menuItems {
                    nodes {
                        id
                        label
                        url
                    }
                }
            }
        }
    }
`

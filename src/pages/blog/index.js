import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id} style={{ border: "1px dotted #663399", margin: "0.5em", padding: "1em", borderRadius: "10px" }}>
                        <h3>
                            <Link to={`/blog/${node.slug}`} style={{color:"hotpink"}} >
                                {node.frontmatter.title}
                            </Link>
                        </h3>
                        <pre>Posted: {node.frontmatter.date}</pre>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
            }
        id
        slug
        }
    }
}
`

export default BlogPage
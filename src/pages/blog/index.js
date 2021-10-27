import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components';
import Layout from '../../components/layout'

const StyledArticle = styled.article`
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    h3 {
        margin-bottom: 0.5rem;
    }
    pre {
        margin-bottom: 0.5rem;
    }
`;


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                width: '75%',
                margin: '0 auto',
            }}>
                {
                    data.allMdx.nodes.map((node) => (
                        <StyledArticle key={node.id} style={{ border: "1px dotted #663399", margin: "0.5em", padding: "1em", borderRadius: "10px" }}>
                            <h3>
                                <Link to={`/blog/${node.slug}`} style={{ color: "hotpink" }} >
                                    {node.frontmatter.title}
                                </Link>
                            </h3>
                            <pre>Posted: {node.frontmatter.date}</pre>
                        </StyledArticle>
                    ))
                }
            </div>
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
import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
    height: 100vh;
    width: 100vw;
    margin: 0em;
    padding: 0em;
`;

const IndexPages = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
            host
            siteMetadata {
                siteUrl
                title
            }
        }
    }
`)
    return (
        <StyledDiv>
            <h2>Hello, world. Gatsby! </h2>
            <code>GraphQL shows up:</code>
            {
                data
                    ?
                    (
                        <div style={{ color: "#1d3c47" }}>
                            <p>host : {data.site.host}</p>
                            <p>siteUrl: {data.site.siteMetadata.siteUrl}</p>
                            <p>title: {data.site.siteMetadata.title}</p>
                        </div>
                    )
                    :
                    (
                        <code style={{ color: "red" }}> Error </code>
                    )
            }
        </StyledDiv>
    )
}
export default IndexPages;
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;
`;

const StyledLinks = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
`;

const StyledLinksItem = styled.li`
padding-right: 2rem;
`;

const StyledHeading = styled.h1`
color: rebeccapurple;
`;

const StyledTitle = styled.header`
font-size: 3rem;
color: gray;
font-weight: 700;
margin: 3rem 0;
`;

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)
    return (
        <StyledDiv>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
            <nav>
                <StyledLinks>
                    <StyledLinksItem><Link to="/" style={{ color: "black" }}>Home</Link></StyledLinksItem>
                    <StyledLinksItem><Link to="/about" style={{ color: "black" }}>About</Link></StyledLinksItem>
                    <StyledLinksItem><Link to="/blog" style={{ color: "black" }}>Blog</Link></StyledLinksItem>
                </StyledLinks>
            </nav>
            <main>
                <StyledHeading>{pageTitle}</StyledHeading>
                {children}
            </main>
        </StyledDiv>
    )
}

export default Layout
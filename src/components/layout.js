import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const StyledDiv = styled.div`
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0px;
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
font-size: 1.5em;
margin: 0.67em 0;
font-weight: 500;
color: rebeccapurple;
`;

const StyledTitle = styled.header`
font-size: 3rem;
color: gray;
font-weight: 700;
margin: 3rem 0;
`;

const StyledMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
@media only screen and (min-width: 768px) {
    width: 75%;
}
margin: 0px;
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
            <StyledMain>
                <StyledHeading>{pageTitle}</StyledHeading>
                {children}
            </StyledMain>
        </StyledDiv>
    )
}

export default Layout
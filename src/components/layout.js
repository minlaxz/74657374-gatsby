import * as React from 'react'
import { Link } from 'gatsby'
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

const Layout = ({ pageTitle, children }) => {
    return (
        <StyledDiv>
            <title>{pageTitle}</title>
            <nav>
                <StyledLinks>
                    <StyledLinksItem><Link to="/" style={{ color: "black" }}>Home</Link></StyledLinksItem>
                    <StyledLinksItem><Link to="/about" style={{ color: "black" }}>About</Link></StyledLinksItem>
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

import * as React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;


const AboutPage = ({ data }) => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            {data.site.siteMetadata.title}
        </Layout>
    );
};

export default AboutPage;
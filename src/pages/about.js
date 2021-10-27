
import * as React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'


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
            <p
            style={{fontFamily: 'Arial', fontSize: '1rem', fontWeight: 'normal'}}
            >Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <pre style={{fontWeight:'bold'}}>
                GraphQL query shows: title is =&gt; {data.site.siteMetadata.title}
            </pre>
            <StaticImage
                style={{ borderRadius: "10px" }}
                src="../images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg"
                alt="brown short coated dog in orange hoodie"
            />
            <p>
                Photo Credit:{" "}
                <a href={`https://unsplash.com/photos/oU6KZTXhuvk`}
                    target={`_blank`}
                    rel={`noopener noreferrer`}>
                    Karsten Winegeart
                </a>
            </p>

        </Layout>
    );
};

export default AboutPage;
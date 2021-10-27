import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle={`Home Page`}>
            <p>
                <code style={{ fontSize: "1.2em" }}>Demo of <b>React</b> in a <b>Gatsby</b>'s way.</code>
            </p>
            <p>Create by Min Min Latt, Check PGP ID :&nbsp;
                <a
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={`https://keys.openpgp.org/search?q=minminlaxz%40gmail.com`}
                    style={{
                        color: "dodgerblue", fontSize: "1rem",
                        fontWeight: "bold", cursor: "pointer"
                    }}>&lt; minlaxz &gt;</a>
            </p>
            <StaticImage
                style={{borderRadius: "10px"}}
                alt="black Schnauzer dog with sunglasses on a white background"
                src="../images/flouffy-qEO5MpLyOks-unsplash.jpg"
            />
            <p>
                Photo Credit:{" "}
                <a href="https://unsplash.com/photos/qEO5MpLyOks"
                    target={`_blank`}
                    rel={`noopener noreferrer`}>
                    FLOUFFY
                </a>
            </p>
        </Layout>
    )
}

export default IndexPage;
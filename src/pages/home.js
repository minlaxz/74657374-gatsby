import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
    return (
        <Layout pageTitle={`Home Page`}>
            <p>This is Demo of React in a Gatsby's way.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/clifford.jpg"
            />
        </Layout>
    )
}

export default HomePage;
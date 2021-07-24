import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head"




function AboutPage() {
    return (
        <div>
            <Layout>
            <Head title="About"/>
            <h3>ABout Me</h3>
            <p><Link to="/contact">Contact Us</Link></p>

            </Layout>
        </div>
    )
}

export default AboutPage

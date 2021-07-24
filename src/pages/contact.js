import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head"



function ContactPage() {
    return (
        <div>
            <Layout>
            <Head title="Contact"/>

            <h3>Contact</h3>
            <p>Best way to reach us is at <Link target="blank" to="https://www.linkedin.com/in/bharath-kumar-4bb399208/">Ninja</Link> </p>

            </Layout>
        </div>
    )
}

export default ContactPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


const Home = () => {
  return (
    <div>
      <Layout>
        <Head title="Home"/>
        <h1>Welcome</h1>
        <p>Need a Developer/Recruitment Consultant ?</p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
      </Layout>
    </div>
  )
}

export default Home

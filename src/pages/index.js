import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

const Home = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <div className={blogStyles.homeContainer}>
          <h1 className={blogStyles.title}>Welcome</h1>
          <p className={blogStyles.title}>Need a Developer/Recruitment Consultant ?</p>
          <p className={blogStyles.title}>Help us as we build next generation tools</p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Home

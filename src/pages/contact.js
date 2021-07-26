import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

function ContactPage() {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <div className={blogStyles.contactContainer}>
          <h1>Contact</h1>
          <p>
            Best way to reach us is at{" "}
            <Link
              target="blank"
              to="https://www.linkedin.com/company/benchninja/"
            >
              LinkedIn
            </Link>{" "}
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

function NotFound() {
  return (
    <Layout>
      <Head title="404" />
      <h1>Err: Page not found</h1>
      <h3>
        <Link to="/">Go to Homepage</Link>
      </h3>
    </Layout>
  )
}

export default NotFound

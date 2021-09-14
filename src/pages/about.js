import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

function AboutPage() {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1 className={blogStyles.title}>Privacy Policy</h1>
        <h3 className={blogStyles.title}>
          We don't store your personal details / We don't store your email
          address
        </h3>
        <p className={blogStyles.title}>
          Site usage information We use Google Analytics on our website. We use
          it to assess information about the devices visitors use to access our
          website, the type of Internet browser they use, the area of our
          website they visited and the actions they performed. This information
          doesn’t include any personal information. And we use this information
          to only improve our website’s experience. Usage of the stored
          information We only use the information provided by visitors to
          contact them and respond to their queries. Their discretion will be
          asked before using any personal information for any other purposes
          than those set out in this Policy. Disclosure of stored information We
          do not sell, trade, or rent visitor's personal information or identity
          information to any third parties.
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyles from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <hr />
      <p>Created by {data.site.siteMetadata.author}, Copyright @ 2021</p>
    </footer>
  )
}

export default Footer

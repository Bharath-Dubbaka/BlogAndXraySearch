import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as headerStyles from "./header.module.scss"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {" "}
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/blog"
            >
              Blog Posts
            </Link>
          </li>
          {/* <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/about"
            >
              About Us
            </Link>
          </li> */}
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/contact"
            >
              User Guide
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/xray"
            >
              X-Ray Search
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItems}
              to="/about"
            >
              Privacy policy
            </Link>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.hr} ></div>
    </header>
  )
}

export default Header

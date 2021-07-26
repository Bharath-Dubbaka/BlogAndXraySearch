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
              Blog
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
              Contact
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
        </ul>
      </nav>
      <hr />

    </header>
  )
}

export default Header

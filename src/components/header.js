import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as headerStyles from "./header.module.scss"
import { motion } from "framer-motion"
import logo from "../images/ninjaLogo.png"

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
      <div style={{ display: "flex" }}>
        <div>
          <h1>
            <Link className={headerStyles.title} to="/">
              {" "}
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>

        <div style={{marginTop:"2em", marginLeft:"1em"}}>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: [1, 1.5, 1.3],
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 0.1,
              },
            }}
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            <img alt="menu-logo" src={logo} width="40" height="40" />
          </motion.div>
        </div>
      </div>
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
      <div className={headerStyles.hr}></div>
    </header>
  )
}

export default Header

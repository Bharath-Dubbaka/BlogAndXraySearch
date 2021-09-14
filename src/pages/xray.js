import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

function XrayPage() {
  const [string, setString] = useState("")

  const handleString = e => {
    // let preString = 'http://www.google.com/search?q=+';
    let postString =
      ' -intitle:"profiles" -inurl:"dir/ " site:linkedin.com/in/ OR site:linkedin.com/pub/'
    setString(e.target.value + postString)
  }
  //   const handleClear = () => {
  //     setString("");
  //   };

  const onSubmit = () => {
    return string.length !== 0
      ? window.open("http://www.google.com/search?q=+" + string)
      : alert("Please enter string")
  }
  return (
    <div>
      <Layout>
        <Head title="Xray-Search" />
        {/* <h1>Xray Search</h1> */}

        <div className="main-div">
          <div className={blogStyles.headingDiv}>
            <h1> LinkedIn Xray Search Tool </h1>
          </div>
          <div className={blogStyles.xrayInputDiv}>
            <input
              className="input-field"
              type="text"
              name="string"
              placeholder='    eg: "React" AND (Javascript OR JS) AND San jose, CA'
              onChange={handleString}
            />
            <button onClick={onSubmit} className="search-btn">
              SEARCH
            </button>
          </div>
          <div>
            <p className={blogStyles.xrayOutRow}>
              This site is free for everyone to use, build with a vision to help
              recruiters and startup finding the potential/desired candidates
              for their organization,"PLEASE DO NOT EXPLOIT/MISUSE"
            </p>
            <br />
            <p className={blogStyles.xrayOutRow}>
              {/* but it still costs me money
            to host and maintain… Why don’t you #BeAwesome and help out by
            Donating. Lorem ipsum dolor, sit amet consectetur adipisicing elit. */}{" "}
              Please go through the boolean guides available on google on how to
              source, if you are not familiar with syntax or concept. I am
              working on the page to make it more usable and productive by
              adding new options and add-ons.
            </p>
            <br />
            <br />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default XrayPage

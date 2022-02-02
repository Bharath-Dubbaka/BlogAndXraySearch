import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

function XrayPage() {
  const [string, setString] = useState("")
  const [location, setLocation] = useState("")

  const handleString = e => {
    // let preString = 'http://www.google.com/search?q=+';
    let postString =
      ' -intitle:"profiles" -inurl:"dir/ " site:linkedin.com/in/ OR site:linkedin.com/pub/'
    setString(e.target.value + postString)
  }
  const handleLocation = e => {
    // let preString = 'http://www.google.com/search?q=+';
    setLocation(e.target.value + " AND ")
  }
  //   const handleClear = () => {
  //     setString("");
  //   };
console.log(location);
console.log(string);
  const onSubmit = () => {
    return string.length !== 0
      ? window.open("http://www.google.com/search?q=+" + location + string )
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
          <div className={blogStyles.xrayInputDivOne}>
            <p style={{  color: "#358da0"}}>ENTER TITLE AND SKILLS: </p>
            <input
              className="input-field"
              type="text"
              name="string"
              placeholder='    eg: React AND ((Javascript OR JS) OR (ES6 OR "ES 6")) AND (Github OR "Github")' 
              onChange={handleString}
            />
          </div>
          <div className={blogStyles.xrayInputDivTwo}>
            <div style={{color: "#358da0", marginTop:"0.6em", marginRight:"1em"}}> LOCATION: </div>
            <input
              className={blogStyles.xrayInputDivTwoInputOne}
              type="text"
              name="string"
              placeholder="   eg: Houston, TX"
              onChange={handleLocation}
            />
            {/* <input
              className={blogStyles.xrayInputDivTwoInputTwo}
              type="text"
              name="string"
              placeholder='    eg: "React" AND (Javascript OR JS) AND San jose, CA'
              onChange={handleString}
            /> */}
          </div>
          <div className={blogStyles.xraySubmitDiv}>
            <button onClick={onSubmit}>SEARCH</button>
          </div>
          <div>
            <p className={blogStyles.xrayOutRowOne}>
              This site is free for everyone to use, build with a vision to help
              recruiters and startup finding the potential/desired candidates
              for their organization,"PLEASE DO NOT EXPLOIT/MISUSE"
            </p>
            <p className={blogStyles.xrayOutRowTwo}>
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

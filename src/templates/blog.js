import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      postBody {
        json
      }
    }
  }
`

function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
    <Head title={props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <h3>{props.data.contentfulBlogPost.publishedDate}</h3>
      {documentToReactComponents(
        props.data.contentfulBlogPost.postBody.json,
        options
      )}

      {/* MARKDOWNS */}
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <h3>{props.data.markdownRemark.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }}></div> */}
    </Layout>
  )
}

export default Blog

import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import usePageData from "../static_queries/usePageData"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"
import Markdown from "../components/Markdown"

export default function Blog(props) {
  const data = props.data.markdownRemark

  return (
    <Layout page="page">
      <h1 className="text-3xl logo-font my-8 text-center color-c">{data.frontmatter.title}</h1>
      <Markdown escapeHtml={false} source={data.html} />
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`

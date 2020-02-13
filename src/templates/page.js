import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import usePageData from "../static_queries/usePageData"
import Markdown from "../components/Markdown"

export default function Page(props) {
  const pageData = usePageData()[0]
  const data = props.data.markdownRemark

  return (
    <Layout page={"/pages/" + pageData.node.fields.slug}>
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
        mainmenu
      }
      html
    }
  }
`

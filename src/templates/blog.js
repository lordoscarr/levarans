import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"
import Markdown from "../components/Markdown"

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
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

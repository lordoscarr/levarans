import React from "react"
import Layout from "../components/Layout"
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

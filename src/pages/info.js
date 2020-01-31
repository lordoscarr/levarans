import React from "react"
import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import ReactMarkdown from "react-markdown"
import "./info.scss"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
      <ReactMarkdown className="markdown" source={infoData.about} />
    </Layout>
  )
}

import React from "react"
import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import ReactMarkdown from "react-markdown"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
      <ReactMarkdown source={infoData.about} />
    </Layout>
  )
}

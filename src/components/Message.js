import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Markdown from "./Markdown"
import indexStyle from "../styles/pages/index.module.scss"

export default function Message(props) {
  const siteMetadata = useSiteMetadata()
  return (
    <p className="text-center my-6">
      <Markdown source={siteMetadata.alertMessage} />
    </p>
  )
}

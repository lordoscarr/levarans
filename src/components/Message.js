import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Markdown from "./Markdown"

export default function Message(props) {
  const siteMetadata = useSiteMetadata()
  return (
    <p className="text-white text-center my-6">
      <Markdown source={siteMetadata.alertMessage} />
    </p>
  )
}

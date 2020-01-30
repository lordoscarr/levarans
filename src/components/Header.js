import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Header(props) {
  const siteMetadata = useSiteMetadata()

  return (
    <div className="header-container">
      <h1 className="header-title text-6xl logo-font text-center p-4 text-white">
        {siteMetadata.title}
      </h1>
      <p className="header-title text-m text-center text-white">
        {siteMetadata.description}
      </p>
    </div>
  )
}

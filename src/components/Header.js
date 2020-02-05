import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Header(props) {
  const siteMetadata = useSiteMetadata()

  return (
    <div className="header-container md:invisible md:h-0 lg:invisible lg:h-0">
      <h1 className="header-title text-5xl logo-font text-center p-4 text-white">
        {siteMetadata.title}
      </h1>
      <p className="header-title text-s text-center text-white">
        {siteMetadata.description}
      </p>
    </div>
  )
}

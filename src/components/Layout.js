import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Header from "./Header";

export default function Layout(props) {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <header className="navbar"></header>
      <main className="flex items-center flex-col">
        <div className="container w-11/12 md:w-2/3 lg:w-5/12 my-16">
          <Header />
          <div className="form-container bg-white rounded-lg p-6 my-16 shadow-xl">
            <div>{props.children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

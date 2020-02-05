import React from "react"
import Layout from "../components/Layout"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function NotFound() {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <Layout>
        <div className="container w-4/5 md:w-1/2 lg:w-1/3 my-16">
          <div className="header-container">
            <h1 className="header-title text-6xl logo-font text-center p-4 text-white">
              {siteMetadata.title}
            </h1>
            <p className="header-title text-m text-center text-white">
              {siteMetadata.description}
            </p>
          </div>
          <div className="form-container bg-white rounded-lg p-6 my-16 shadow-xl">
            <p className="text-center">Oops! Kunde inte hitta sidan.</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

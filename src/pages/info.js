import React from "react"
import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import "./info.scss"
import Markdown from "../components/Markdown"
import { MdMailOutline, MdPhone } from "react-icons/md"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
      <p className="logo-font text-4xl text-center color-c">{infoData.title}</p>
      <Markdown source={infoData.about} />
      <p className="text-xl text-center font-bold color-c my-4">Kontakta oss</p>
      <div className="flex">
        <div className="w-1/2 text-center my-2">
          <MdMailOutline className="m-auto text-3xl color-c my-2" />
          <a href={"mailto:" + infoData.contact.email} className="color-b">{infoData.contact.email}</a>
        </div>
        <div className="w-1/2 text-center">
          <MdPhone className="m-auto text-3xl color-c my-2" />
          <a href={"tel:" + infoData.contact.phone} className="color-b">{infoData.contact.phone}</a>
        </div>
      </div>
    </Layout>
  )
}

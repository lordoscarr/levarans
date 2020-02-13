import React from "react"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import Layout from "../components/Layout"
import { FiTruck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import { MdMailOutline, MdPhone } from "react-icons/md"

export default function MenuPage() {
  const { menuData } = useSiteMetaData()

  return (
    <Layout page="menu">
      <p className="logo-font text-4xl text-center color-c">Meny</p>
      <p className="my-4 text-center text-s color-b">
        <ReactMarkdown source={menuData.menu_information} />
      </p>
      <p className="text-2xl my-4 color-c font-bold text-center">
        Vecka {menuData.week_number}
      </p>
      <ul>
        {menuData.menu.map(menuItem => {
          return (
            <li key={menuItem.food} className="flex">
              <div className="w-3/4 color-c">
                <p className="font-bold">{menuItem.food}</p>{" "}
                <p className="text-xs color-b">{menuItem.description}</p>
              </div>
              <p className="w-1/4 font-bold text-right color-c">
                {menuItem.price} kr
              </p>
            </li>
          )
        })}
      </ul>

      <p className="my-4 text-center text-s color-b">
        <ReactMarkdown source={menuData.delivery_info} />
      </p>

      <FiTruck className="my-8 mx-auto" size="3rem" color={"#4a7367"} />

      <div className=" md:flex lg:flex text-center">
        <div className="md:w-1/2 lg:w-1/2 py-2">
          <p className="font-bold text-xs color-c">Beställ senast</p>
          <p className="color-b">
            {menuData.last_order_date} kl. {menuData.last_order_time}
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/2 py-2">
          <p className="font-bold text-xs color-c">Leverans</p>
          <p className="color-b">
            {menuData.delivery_date} kl. {menuData.delivery_start_time}-
            {menuData.delivery_end_time}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-center">
          <MdMailOutline className="m-auto text-3xl color-c my-2" />
          <a href={"mailto:" + menuData.contact.email} className="color-b">{menuData.contact.email}</a>
        </div>
        <div className="w-1/2 text-center">
          <MdPhone className="m-auto text-3xl color-c my-2" />
          <a href={"tel:" + menuData.contact.phone} className="color-b">{menuData.contact.phone}</a>
        </div>
      </div>
    </Layout>
  )
}

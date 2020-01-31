import React, { useState } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Header from "./Header"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import Sidebar from "react-sidebar"
import { MdRestaurantMenu } from "react-icons/md"

export default function Layout(props) {
  const siteMetadata = useSiteMetadata()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <header className="navbar"></header>
      <Sidebar
        sidebar={
          <>
            <ul>
              <li
                key="index"
                className={
                  "text-2xl font-bold hover:underline cursor-pointer color-c " +
                  (props.page === "index" && "underline")
                }
              >
                <Link to="/">Start</Link>
              </li>
              <li
                key="menu"
                className={
                  "text-2xl font-bold hover:underline cursor-pointer color-c " +
                  (props.page === "menu" && "underline")
                }
              >
                <Link to="/menu">Veckans meny</Link>
              </li>
              <li
                key="info"
                className={
                  "text-2xl font-bold hover:underline cursor-pointer color-c " +
                  (props.page === "info" && "underline")
                }
              >
                <Link to="/info">Om oss</Link>
              </li>
            </ul>
            <p className="absolute logo-font text-2xl color-b bottom-0 my-8">
              Levarans
            </p>
          </>
        }
        open={sidebarOpen}
        onSetOpen={() => {
          console.log("sidebar open")
        }}
        styles={{
          sidebar: {
            background: "white",
            paddingLeft: "1rem",
            paddingRight: "10rem",
            paddingTop: "10rem",
          },
        }}
      >
        <main className="flex items-center flex-col bg-color-a">
          <div
            className={
              "absolute top-0 left-0 my-2 mx-2 md:mx-4 lg:mx-4 md:my-12 lg:my-12 z-50 cursor-pointer"
            }
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <div
              className={
                "color-b p-2 rounded-full " +
                (sidebarOpen ? "bg-color-a" : "bg-white")
              }
            >
              <MdRestaurantMenu
                lassName="my-8 mx-auto"
                size="2rem"
                color={sidebarOpen ? "white" : "#4d6b96"}
              />
              {/* <Burger isOpen={sidebarOpen} /> */}
            </div>
          </div>
          <div className="container w-11/12 md:w-2/3 lg:w-5/12 my-16">
            <Header />
            <div className="form-container bg-white rounded-lg p-6 my-16 shadow-xl">
              <div>{props.children}</div>
            </div>
          </div>
        </main>
      </Sidebar>
    </>
  )
}

function RenderSideBar() {
  return (
    <ul>
      <li className="text-2xl font-bold">Start</li>
      <li className="text-2xl font-bold">Veckans meny</li>
      <li className="text-2xl font-bold">Om oss</li>
    </ul>
  )
}

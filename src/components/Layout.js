import React, { useState } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import "../styles/tailwind.css"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import useBlogData from "../static_queries/useBlogData"
import Header from "./Header"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import Sidebar from "react-sidebar"
import Navbar from "./Navbar"
import Message from "./Message"
import { MdRestaurantMenu } from "react-icons/md"

export default function Layout(props) {
  const siteMetadata = useSiteMetadata()
  const blogData = useBlogData()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
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
        <Navbar page={props.page} />
        <main className="flex items-center flex-col">
          <div
            className={
              "lg:invisible absolute top-0 left-0 my-2 mx-2 md:mx-4 lg:mx-4 md:my-12 lg:my-12 z-50 cursor-pointer"
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
          <div className="container w-11/12 md:w-2/3 lg:w-1/2 my-16">
            <Header />
            {props.page === "index" && <div className="bg-white rounded-lg p-6 my-16 shadow-xl"><Message /></div>}
            <div>
              <div className="form-container bg-white rounded-lg p-6 my-16 shadow-xl">
                <div>{props.children}</div>
              </div>
            </div>
          </div>
          <div className="m-2 text-center">
            {blogData.map(item => {
              console.log(item)
              return (
                <Link
                  to={"/pages/" + item.node.fields.slug}
                  className="m-2 text-white hover:underline"
                >
                  {item.node.frontmatter.title}
                </Link>
              )
            })}
          </div>
          <p className="p-2 mt-4 color-b w-full text-center bg-white">
            Copyright Levarans 2020
          </p>
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

import React, { useState } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import "../styles/tailwind.css"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import usePageData from "../static_queries/usePageData"
import Header from "./Header"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import Sidebar from "react-sidebar"
import Navbar from "./Navbar"
import Message from "./Message"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { MdRestaurantMenu } from "react-icons/md"

export default function Layout(props) {
  const siteMetadata = useSiteMetadata()
  const pageData = usePageData()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
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
            {props.page === "index" && (
              <div className="bg-white rounded-lg p-6 my-16 shadow-xl">
                <Message />
              </div>
            )}
            <div>
              <div className="form-container bg-white rounded-lg p-6 my-16 shadow-xl">
                <div>{props.children}</div>
              </div>
            </div>
          </div>
          <div className="flex text-white text-6xl">
            <div
              className="mx-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://instagram.com/" + siteMetadata.instagramUsername
                )
              }
            >
              <FaInstagram />
            </div>
            <div
              className="mx-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://facebook.com/" + siteMetadata.facebookUsername
                )
              }
            >
              <FaFacebookSquare />
            </div>
          </div>
          <div className="m-2 text-center">
            {pageData.map(item => {
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

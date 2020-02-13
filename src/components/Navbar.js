import React from "react"
import { Link } from "gatsby"
import usePageData from "../static_queries/usePageData"

export default function Navbar(props) {
  const { page } = props
  const pageData = usePageData()

  return (
    <div className="fixed invisible lg:visible bg-white w-full h-12 flex shadow-lg">
      <span className="mx-48 my-auto w-full flex justify-between items-end">
        <span className="logo-font color-b text-xl mr-8">
          <Link to="/">Levarans</Link>
        </span>
        <span className="">
          <span
            className={
              "color-b hover:underline cursor-pointer font-bold ml-6 " +
              (page === "menu" && "underline")
            }
          >
            <Link to="/menu">Veckans meny</Link>
          </span>
          <span
            className={
              "color-b hover:underline cursor-pointer font-bold ml-6 " +
              (page === "info" && "underline")
            }
          >
            <Link to="/info">Vad gör Levarans?</Link>
          </span>
          {pageData
            .filter(e => e.node.frontmatter.mainmenu)
            .map(item => {
              return (
                <span
                  className={
                    "color-b hover:underline cursor-pointer font-bold ml-6 " +
                    (props.page === "/pages/" + item.node.fields.slug &&
                      "underline")
                  }
                >
                  <Link to={"/pages/" + item.node.fields.slug}>
                    {item.node.frontmatter.title}
                  </Link>
                </span>
              )
            })}
        </span>
      </span>
    </div>
  )
}

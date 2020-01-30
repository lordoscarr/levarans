import React from "react"

import "./Spinner.scss"

const Spinner = ({ type }) => {
  return <div><span className={type}></span></div>
}

export default Spinner

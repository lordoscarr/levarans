import React from "react"
import ReactMarkdown from "react-markdown"
import "./Markdown.scss"

export default function Markdown(props) {  
    return (<ReactMarkdown className="markdown" {...props} />)
}
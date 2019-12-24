import React from "react"
import IParagraph from "./IParagraph"
import "./index.scss"

export default ({ theme = "inherit", ...props }: IParagraph) => (
  <p
    className={`para
    ${props.thin ? "text-thin" : ""} 
    ${props.lead ? "text-lead" : ""}
    ${props.classes}
    `}
  >
    {props.children}
  </p>
)

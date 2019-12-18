import React from "react"
import IParagraph from "./IParagraph"

export default ({ theme = "inherit", ...props }: IParagraph) => (
  <p
    className={`
    ${props.thin ? "text-thin" : ""} 
    ${props.lead ? "text-lead" : ""}
    theme-${theme}
    ${props.classes}
    `}
  >
    {props.text}
  </p>
)

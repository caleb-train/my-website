import React from "react"
import IHeading from "./IHeading"

export default ({ type, theme = "inherit", ...props }: IHeading) => {
  return React.createElement(
    type,
    {
      className: `
      theme-${theme}
      ${props.uppercase ? "text-upper" : ""}
      ${props.thin ? "text-thin" : ""}
      ${props.classes}`,
    },
    props.text
  )
}

import React from "react"
import IHeading from "./IHeading"
import "./index.scss"

export default ({ type, theme = "inherit", ...props }: IHeading) => {
  return React.createElement(
    type,
    {
      className: `heading
      ${props.uppercase ? "text-upper" : ""}
      ${props.thin ? "text-thin" : ""}
      ${props.classes}`,
    },
    props.text
  )
}

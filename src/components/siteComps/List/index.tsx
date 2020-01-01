import React from "react"
import { IUList, IList } from "./IList"
import "./index.scss"

export const UList = ({ style = "", ...props }: IUList) => {
  return React.createElement(
    props.list,
    { className: `${style}` },
    props.children
  )
}

export const List = ({ theme = "inherit", ...props }: IList) => (
  <li
    className={`${props.thin ? "text-thin" : ""} ${props.className}`}
    {...props.attr}
  >
    {props.children}
  </li>
)

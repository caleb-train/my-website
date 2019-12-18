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

export const List = ({ theme = "light", ...props }: IList) => (
  <li className={`theme-${theme} ${props.thin ? "text-thin" : ""}`}>
    {props.children}
  </li>
)

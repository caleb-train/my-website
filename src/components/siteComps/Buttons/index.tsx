import React from "react"
import IButton from "./IButton"
import "./index.scss"

export default ({
  borderRadius = "full",
  attr = {},
  value = "",
  theme = "default",
  ...props
}: IButton) => (
  <button
    className={`
    btn
    ${borderRadius}
    ${props.size ? "btn-" + props.size : ""}
    ${props.block ? "btn-block" : ""}
    ${props.thin ? "text-thin" : ""}
    theme-${theme}
    ${props.disabled ? "disabled" : ""}
    ${props.uppercase ? "text-upper" : ""}
    ${props.classes}`}
    type={props.type || "button"}
    {...attr}
  >
    <span className={`ctr-icon ${props.icon}`}></span>
    {value}
  </button>
)

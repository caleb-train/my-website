import React from "react"
import ILine from "./ILine"
import "./index.scss"

export default ({ theme = "default", ...props }: ILine) => (
  <div className="padd-box">
    <hr className={`${props.pattern || ""} brd-${theme}`} />
  </div>
)

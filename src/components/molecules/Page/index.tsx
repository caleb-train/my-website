import React from "react"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div id={props.id} className="page crt-animated">
      <div className="crt-paper">{props.children}</div>
    </div>
  )
}

import React from "react"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div className="page">
      <div id={props.id} className="crt-paper-layers crt-animate">
        <div className="crt-paper clearfix">
          <div className="crt-paper-cont paper-padd clear-mrg">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

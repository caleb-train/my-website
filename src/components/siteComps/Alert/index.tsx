import React from "react"
import IAlert from "./IAlert"
import "./index.scss"

export default (props: IAlert) => (
  <div className={`alert alert-${props.color}`} role="alert">
    <strong>{props.title}</strong> {props.message}
    <button type="button" className="close">
      <span className="crt-icon crt-icon-close"></span>
    </button>
  </div>
)

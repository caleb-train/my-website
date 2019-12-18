import React from "react"
import IImage from "./IImage"
import "./index.scss"

export default ({ attr = {}, ...props }: IImage) => (
  <img src={props.src} alt={props.alt} {...attr} />
)

import React from "react"
import IFigure from "./IFigure"
import Image from "../Image"
import "./index.scss"

export default ({ attr = {}, ...props }: IFigure) => (
  <figure {...attr}>
    <Image src={props.src} alt={props.alt} />
    <figcaption>{props.caption}</figcaption>
  </figure>
)

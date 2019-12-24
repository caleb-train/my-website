import React from "react"
import IQuote from "./IQuote"
import "./index.scss"

export default ({ theme = "inherit", ...props }: IQuote) => {
  return (
    <blockquote className={`quote-${props.quoteIcon}`}>
      {props.children}
      <p>
        <cite>
          <a href={props.link} target="_blank">
            {props.person}
          </a>{" "}
          - {props.from}
        </cite>
      </p>
    </blockquote>
  )
}

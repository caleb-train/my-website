import * as React from "react"
import IProgressBar from "./IProgressBar"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "./index.scss"

export default ({
  theme = "default",
  fontSize = 25,
  ...props
}: IProgressBar) => (
  <div
    className={`progress-chart ${theme}`}
    role="progressbar"
    aria-valuenow={props.valuenow}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <CircularProgressbarWithChildren
      value={props.valuenow}
      strokeWidth={4}
      styles={buildStyles({
        rotation: 0,
        strokeLinecap: "butt",
        textSize: "16px",
        pathTransitionDuration: 0.5,
        textColor: "#f88",
        trailColor: "rgba(0,0,0,0.1)",
        backgroundColor: "rgba(0,0,0,0)",
      })}
    >
      <div style={{ fontSize, marginTop: -20 }}>
        <strong>{props.valuenow}%</strong>
      </div>
    </CircularProgressbarWithChildren>
    <strong className="progress-title">{props.title}</strong>
  </div>
)

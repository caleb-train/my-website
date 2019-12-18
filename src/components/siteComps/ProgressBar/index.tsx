import * as React from "react"
import IProgressBar from "./IProgressBar"
import ProgressBar from "progressbar.js"
import "./index1.scss"

export default ({
  theme = "default",
  fontSize = 3,
  width = 40,
  ...props
}: IProgressBar) => {
  React.useEffect(() => {
    var bar = new ProgressBar[props.type]("#container", {
      easing: "easeInOut",
      color: "inherit",
      strokeWidth: 3,
      trailWidth: 1,
      text: {
        value: `${props.valuenow}%`,
      },
      style: {
        color: "inherit",
        position: "absolute",
        top: "50%",
        padding: 0,
        margin: 0,
        // You can specify styles which will be browser prefixed
        transform: {
          prefix: true,
          value: "translate(-50%, -50%)",
        },
      },
    })
    bar.animate(props.valuenow / 100)
  }, [])
  return (
    <div
      className={`progress-chart ${props.type} theme-${theme}`}
      style={{ width: `${width}%` }}
      role="progressbar"
      aria-valuenow={props.valuenow}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        id="container"
        style={{ fontSize: `${fontSize}rem` }}
        className={props.type}
      ></div>
      <strong style={{ fontSize: `${fontSize}rem` }} className="progress-title">
        {props.title}
      </strong>
    </div>
  )
}

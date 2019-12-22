import * as React from "react"
import IProgressBar from "./IProgressBar"
import ProgressBar from "progressbar.js"
import "./index.scss"

export default ({
  theme = "inherit",
  fontSize = 3,
  width = 40,
  ...props
}: IProgressBar) => {
  React.useEffect(() => {
    var bar = new ProgressBar[props.type](`#${props.id}`, {
      easing: "easeInOut",
      color: "inherit",
      strokeWidth: props.strokeWidth || 2,
      trailWidth: props.strokeWidth || 2,
      text: {
        value: `${props.value || props.valuenow + "%"}`,
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
        id={props.id}
        style={{ fontSize: `${fontSize}rem` }}
        className={props.type}
      ></div>
      <strong style={{ fontSize: `${fontSize}rem` }} className="progress-title">
        {props.title}
      </strong>
    </div>
  )
}

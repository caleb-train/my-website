export default interface IProgressBar {
  valuenow: number
  title: string
  width?: number
  height?: number
  type: "Circle" | "Line" | "SemiCircle"
  theme?: "primary" | "default" | "light" | "inherit"
  fontSize?: number
}

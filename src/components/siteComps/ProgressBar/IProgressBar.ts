export default interface IProgressBar {
  valuenow: number
  id: string
  title: string
  value?: string
  width?: number
  strokeWidth?: number
  height?: number
  type: "Circle" | "Line" | "SemiCircle"
  theme?: "primary" | "default" | "light" | "inherit"
  fontSize?: number
}

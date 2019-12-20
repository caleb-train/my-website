export default interface IButton {
  size?: "sm" | "lg" | ""
  type?: "button" | "submit"
  value?: string
  theme?: "primary" | "default" | "light" | "inherit"
  disabled?: boolean
  block?: boolean
  thin?: boolean
  uppercase?: boolean
  icon?: string
  borderRadius?: "full" | "medium" | ""
  classes?: string
  attr?: any
}

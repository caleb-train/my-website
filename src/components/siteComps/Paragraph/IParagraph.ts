export default interface IButton {
  lead?: boolean
  thin?: boolean
  children: any
  classes?: string
  theme?: "primary" | "default" | "light" | "inherit"
}

export default interface IButton {
  lead?: boolean
  thin?: boolean
  text: string
  classes?: string
  theme?: "primary" | "default" | "light" | "inherit"
}

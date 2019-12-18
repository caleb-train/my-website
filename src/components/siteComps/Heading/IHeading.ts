export default interface IHeading {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  text: string
  theme?: "primary" | "default" | "light" | "inherit"
  thin?: boolean
  uppercase?: boolean
  classes?: string
}

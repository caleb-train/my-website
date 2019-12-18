export default interface IHeading {
  theme?: "primary" | "default" | "light" | "inherit"
  quoteIcon?: "side" | "top" | ""
  children?: any
  link: string
  person: string
  from: string
}

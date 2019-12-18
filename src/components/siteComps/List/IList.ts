export interface IUList {
  style?: "styled-ul" | "styled-ol" | "styled-list" | "clear-list" | ""
  children?: any
  list: "ul" | "ol"
}
export interface IList {
  thin?: boolean
  theme?: "primary" | "default" | "light" | "inherit"
  children?: any
}

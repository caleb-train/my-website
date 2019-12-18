export default interface IFilter {
  theme?: "primary" | "default" | "light" | "inherit"
  filters: {
    title: string
    name: string
  }[]
  projects: {
    title: string
    name: string
    image: string
    body: string
    link: string
    alt: string
  }[]
}

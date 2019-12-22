import React from "react"
import "./index.scss"
import About from "./Partitions/About"
import Experience from "./Partitions/Experience"
import Portfolio from "./Partitions/Portfolio"
import Reference from "./Partitions/Reference"
import Contact from "./Partitions/Contact"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div className="crt-container-sm content">
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

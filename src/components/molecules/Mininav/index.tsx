import React from "react"
import { UList, List } from "../../siteComps/List"
import "./index.scss"
import ThemeContext from "../../../context/ThemeContext"
import isInViewport from "../../../utils"

export default ({ theme = "inherit", ...props }) => {
  const { gotoPage } = React.useContext(ThemeContext)
  React.useEffect(() => {
    const page = document.querySelector("#experience")
    document.querySelector("body").addEventListener(
      "scroll",
      function(event) {
        const lists = document.querySelectorAll(".app-nav ul li")
        ;[...lists].forEach(list => {
          const page = document.querySelector(list.dataset.page)
          if (isInViewport(page)) {
            document
              .querySelector(".app-nav ul li.is-current")
              .classList.remove("is-current")
            list.classList.add("is-current")
          }
          if (isInViewport(page, window.innerHeight / 2 + 200)) {
            if (page.classList.contains("crt-animate")) {
              page.classList.replace("crt-animate", "crt-animated")
            }
          }
        })
      },
      false
    )
  }, [])
  return (
    <nav className="app-nav">
      <UList list="ul" style="clear-list">
        {["About", "Experience", "Portfolio", "Contact"].map((link, index) => {
          let lk = String(link).toLowerCase()
          return (
            <List
              className={`${index === 0 ? "is-current" : ""}`}
              attr={{
                "data-page": `#${lk}`,
              }}
            >
              <span
                onClick={_ => gotoPage(`#${lk}`)}
                className={`crt-icon crt-icon-${lk}`}
              ></span>
            </List>
          )
        })}
      </UList>
    </nav>
  )
}

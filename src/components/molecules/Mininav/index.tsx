import React from "react"
import { UList, List } from "../../siteComps/List"
import { Link } from "gatsby"
import "./index.scss"
import ThemeContext from "../../../context/ThemeContext"

export default ({ theme = "inherit", ...props }) => {
  const { gotoPage } = React.useContext(ThemeContext)
  return (
    <nav className="app-nav">
      <UList list="ul" style="clear-list">
        {["About", "Experience", "Portfolio", "Contact"].map(link => (
          <List>
            <span
              onClick={_ => gotoPage(`#${String(link).toLowerCase()}`)}
              className={`crt-icon crt-icon-${String(link).toLowerCase()}`}
            ></span>
          </List>
        ))}
      </UList>
    </nav>
  )
}

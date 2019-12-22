import React from "react"
import { UList, List } from "../../siteComps/List"
import { Link } from "gatsby"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <nav className="app-nav">
      <UList list="ul" style="clear-list">
        {["Experience", "Portfolio", "References", "Contact"].map(link => (
          <List>
            <Link
              to={`index.html#${String(link).toLowerCase()}`}
              data-tooltip={link}
            >
              <span
                className={`crt-icon crt-icon-${String(link).toLowerCase()}`}
              ></span>
            </Link>
          </List>
        ))}
      </UList>
    </nav>
  )
}

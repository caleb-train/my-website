import PropTypes from "prop-types"
import React from "react"
import { UList, List } from "./siteComps/List"
import { Link } from "gatsby"
import ThemeContext from "../context/ThemeContext"
import Image from "./siteComps/Image"
import "./header.scss"

const Header = ({ siteTitle }) => {
  const { gotoPage } = React.useContext(ThemeContext)
  return (
    <header className="app-header" style={{}}>
      <div className="head-inner">
        <div className="logo-wrap">
          <a className="logo" href="">
            <Image
              attr={{
                className: "",
              }}
              src="/brain.svg"
              alt="brain-logo"
            />
            <h2>&nbsp;{`.${siteTitle}`}</h2>
          </a>
        </div>

        <div className="nav-container">
          <nav className="main-nav">
            <UList list="ul" style="clear-list">
              <List>
                <div role="button" onClick={_ => gotoPage("#about")}>
                  about
                </div>
              </List>
              <List>
                <div role="button" onClick={_ => gotoPage("#experience")}>
                  experience
                </div>
              </List>
              <List>
                <div role="button" onClick={_ => gotoPage("#portfolio")}>
                  portfolio
                </div>
              </List>
              <List>
                <div role="button" onClick={_ => gotoPage("#contact")}>
                  contact
                </div>
              </List>
            </UList>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import PropTypes from "prop-types"
import React from "react"
import { UList, List } from "./siteComps/List"
import { Link } from "gatsby"
import Image from "./siteComps/Image"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="app-header" style={{}}>
    <div
      className="head-inner"
      style={{
        margin: `0 auto`,
        maxWidth: 1196,
      }}
    >
      <div className="logo-wrap">
        <a className="logo" href="index.html">
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
              <Link to="index.html">About</Link>
            </List>
            <List>
              <Link to="experience.html">experience</Link>
            </List>
            <List>
              <Link to="portfolio#">portfolio</Link>
            </List>
            <List>
              <Link to="contact.html">contact</Link>
            </List>
          </UList>
        </nav>
      </div>
    </div>

    <nav className="nav-sm">
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

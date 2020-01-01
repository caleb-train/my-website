import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ThemeContext from "../context/ThemeContext"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <div className="">
            <div className="app">
              {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
              <Header siteTitle="Caleb" />
              <div>
                <main>{children}</main>
              </div>
              <div
                onClick={_ => {
                  theme.gotoPage(".app-header")
                }}
                className="chevron"
              >
                <span className={`crt-icon crt-icon-chevron-up`}></span>
              </div>
            </div>
          </div>
          <ToastContainer
            autoClose={5000}
            position="top-center"
            hideProgressBar
            rtl={false}
            pauseOnHover
          />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

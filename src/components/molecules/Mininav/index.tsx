import React from "react"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div id="crt-nav-wrap" className="hidden-sm hidden-xs min-nav">
      <div id="crt-nav-inner">
        <div className="crt-nav-cont">
          <div id="crt-nav-scroll">
            <nav id="crt-nav" className="crt-nav">
              <ul className="clear-list">
                <li>
                  <a href="index.html#about" data-tooltip="Home">
                    <img
                      className="avatar avatar-42"
                      src="assets/images/uploads/avatar/avatar-42x42.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="index.html#experience" data-tooltip="Experience">
                    <span className="crt-icon crt-icon-experience"></span>
                  </a>
                </li>
                <li>
                  <a href="index.html#portfolio" data-tooltip="Portfolio">
                    <span className="crt-icon crt-icon-portfolio"></span>
                  </a>
                </li>
                <li>
                  <a href="index.html#references" data-tooltip="References">
                    <span className="crt-icon crt-icon-references"></span>
                  </a>
                </li>
                <li>
                  <a href="index.html#contact" data-tooltip="Contact">
                    <span className="crt-icon crt-icon-contact"></span>
                  </a>
                </li>
                <li>
                  <a href="category.html" data-tooltip="Blog">
                    <span className="crt-icon crt-icon-blog"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="crt-nav-tools" className="hidden">
            <span className="crt-icon crt-icon-dots-three-horizontal"></span>

            <button id="crt-nav-arrow" className="clear-btn">
              <span className="crt-icon crt-icon-chevron-thin-down"></span>
            </button>
          </div>
        </div>
        <div className="crt-nav-btm"></div>
      </div>
    </div>
  )
}

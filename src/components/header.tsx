import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="crt-header" style={{}}>
    <div
      className="crt-head-inner crt-container"
      style={{
        margin: `0 auto`,
        maxWidth: 1196,
      }}
    >
      <div className="crt-container-sm">
        <div className="crt-head-row">
          <div id="crt-head-col1" className="crt-head-col text-left">
            <a id="crt-logo" className="crt-logo" href="index.html">
              {/* <img
                src="assets/images/uploads/brand/logo.svg"
                alt="certy resume"
              /> */}
              <span>{siteTitle}</span>
            </a>
          </div>

          <div id="crt-head-col2" className="crt-head-col text-right">
            <div className="crt-nav-container crt-container hidden-sm hidden-xs">
              <nav id="crt-main-nav">
                <ul className="clear-list">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="portfolio.html">portfolio</a>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="typography.html">typography</a>
                      </li>
                      <li>
                        <a href="components.html">components</a>
                      </li>
                      <li>
                        <a href="search.html">search</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="category.html">blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="single.html">single</a>
                      </li>
                      <li>
                        <a href="single-image.html">single image</a>
                      </li>
                      <li>
                        <a href="single-slider.html">single slider</a>
                      </li>
                      <li>
                        <a href="single-youtube.html">single youtube</a>
                      </li>
                      <li>
                        <a href="single-vimeo.html">single vimeo</a>
                      </li>
                      <li>
                        <a href="single-dailymotion.html">single dailymotion</a>
                      </li>
                      <li>
                        <a href="single-soundcloud.html">single soundcloud</a>
                      </li>
                      <li>
                        <a href="single-video.html">single video</a>
                      </li>
                      <li>
                        <a href="single-audio.html">single audio</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div id="crt-head-col3" className="crt-head-col text-right">
            <button id="crt-sidebar-btn" className="btn btn-icon btn-shade">
              <span className="crt-icon crt-icon-side-bar-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav id="crt-nav-sm" className="crt-nav hidden-lg hidden-md">
      <ul className="clear-list">
        <li>
          <a href="index.html#about" data-tooltip="Home">
            <img
              className="avatar avatar-42"
              src="assets/images/uploads/avatar/avatar-42x42.png"
              srcset="assets/images/uploads/avatar/avatar-84x84-2x.png 2x"
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
  </header>
)
/* <header
    
  >
    <div
      
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header> */
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

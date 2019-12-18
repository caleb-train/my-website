import React from "react"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div id="crt-side-box-wrap" className="crt-sticky">
      <div id="crt-side-box">
        <div className="crt-side-box-item">
          <div className="crt-card bg-primary text-center">
            <div className="crt-card-avatar">
              <img
                className="avatar avatar-195"
                src="assets/images/uploads/avatar/avatar-195x195.png"
                srcset="assets/images/uploads/avatar/avatar-390x390-2x.png 2x"
                width="195"
                height="195"
                alt=""
              />
            </div>
            <div className="crt-card-info">
              <h2 className="text-upper">Ola Lowe</h2>

              <p className="text-muted">Florist | Decorator</p>
              <ul className="crt-social clear-list">
                <li>
                  <a>
                    <span className="crt-icon crt-icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="crt-icon crt-icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="crt-icon crt-icon-google-plus"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="crt-icon crt-icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="crt-icon crt-icon-pinterest"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="crt-side-box-btn">
            <a
              className="btn btn-default btn-lg btn-block btn-thin btn-upper"
              href="#"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

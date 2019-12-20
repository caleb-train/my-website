import React from "react"
import Page from "../../Page"

const Ref = () => {}

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="contact">
      <div className="padd-box">
        <h2 className="title-lg text-upper">contact me</h2>

        <div className="padd-box-xs">
          <header className="contact-head">
            <ul className="crt-social clear-list text-primary">
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
            <h3 className="title text-upper">
              fell free to contact me the core of your marketing
            </h3>
          </header>
        </div>

        <div className="padd-box-sm">
          <form action="#" method="post" className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="author">
                Your Name
              </label>
              <div className="form-item-wrap">
                <input id="author" className="form-item" type="text" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Your E-mail
              </label>
              <div className="form-item-wrap">
                <input
                  id="email"
                  className="form-item"
                  type="email"
                  required="required"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="url">
                Subject
              </label>
              <div className="form-item-wrap">
                <input id="url" className="form-item" type="url" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="comment">
                Your Comment
              </label>
              <div className="form-item-wrap">
                <textarea id="comment" className="form-item"></textarea>
              </div>
            </div>

            <div className="form-submit form-item-wrap">
              <input
                className="btn btn-primary btn-lg"
                type="submit"
                value="Post Your Comment"
              />
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

import React from "react"
import Page from "../../Page"
import { Link } from "gatsby"
import { UList, List } from "../../../siteComps/List"
import Heading from "../../../siteComps/Heading"
import Buttons from "../../../siteComps/Buttons"

const Ref = () => {}

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="contact">
      <div className="padd-box">
        <Heading uppercase type="h1" text="contact me" />
        <div className="social-links">
          <header className="contact-head">
            <UList list="ul" style="clear-list">
              <List>
                <a
                  href="https://twitter.com/caleb42_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="crt-icon crt-icon-twitter"></span>
                </a>
              </List>
              <List>
                <a
                  href="https://www.linkedin.com/in/ewere-ebie-1a6783150/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="crt-icon crt-icon-linkedin"></span>
                </a>
              </List>
              <List>
                <a
                  href="https://www.instagram.com/42caleb_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="crt-icon crt-icon-instagram"></span>
                </a>
              </List>
            </UList>
            <Heading uppercase type="h3" text="feel free to contact me" />
          </header>
        </div>

        <div className="contact-form">
          <form action="#" method="post">
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
                <input id="email" className="form-item" type="email" required />
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
              <Buttons value="Post Your Comment" />
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

import React from "react"
import Page from "../../Page"
import emailjs from "emailjs-com"
import { UList, List } from "../../../siteComps/List"
import callToast from "../../../siteComps/Toast"
import Loader from "../../../siteComps/Loader"
import Heading from "../../../siteComps/Heading"
import Buttons from "../../../siteComps/Buttons"

export default ({ theme = "inherit", ...props }) => {
  const [sending, setSending] = React.useState(false)

  function sendEmail(e) {
    setSending(true)
    e.preventDefault()
    emailjs
      .sendForm(
        "contact_service",
        "contact_template",
        e.target,
        "user_hbthmg2GX3lv9a5cBNlZD"
      )
      .then(
        result => {
          setSending(false)
          console.log(result.text)
          callToast("I got Your message", "success")
        },
        error => {
          setSending(false)
          console.log(error.text)
          callToast("Opps, that message failed", "warning")
        }
      )
  }

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
                  href="https://github.com/caleb-42"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="crt-icon crt-icon-github"></span>
                </a>
              </List>
            </UList>
            <Heading uppercase type="h3" text="reach me anytime" />
          </header>
        </div>

        <div className="contact-form">
          <form action="#" method="post" onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-label" htmlFor="author">
                Your Name
              </label>
              <div className="form-item-wrap">
                <input
                  name="user_name"
                  id="author"
                  className="form-item"
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Your E-mail
              </label>
              <div className="form-item-wrap">
                <input
                  name="user_email"
                  id="email"
                  className="form-item"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="url">
                Subject
              </label>
              <div className="form-item-wrap">
                <input
                  required
                  name="subject"
                  id="url"
                  className="form-item"
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="comment">
                Message
              </label>
              <div className="form-item-wrap">
                <textarea
                  required
                  name="message"
                  id="comment"
                  className="form-item"
                ></textarea>
              </div>
            </div>

            <div className="form-submit form-item-wrap">
              {sending ? (
                <Loader />
              ) : (
                <Buttons type="submit" value="Send Message" />
              )}
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

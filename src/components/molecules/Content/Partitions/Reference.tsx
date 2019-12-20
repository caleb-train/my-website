import React from "react"
import Page from "../../Page"

const Ref = () => {}

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="references">
      <section className="section padd-box">
        <h2 className="title-lg text-upper">References</h2>

        <div className="padd-box-sm clear-mrg">
          <div className="ref-box brd-btm hreview">
            <div className="ref-avatar">
              <img
                alt=""
                src="assets/images/uploads/avatar/avatar-54x54-01.png"
                className="avatar avatar-54 photo"
                height="54"
                width="54"
              />
            </div>

            <div className="ref-info">
              <div className="ref-author">
                <strong>Hattie Maxwell</strong>
                <span>West Alexandrine</span>
              </div>

              <blockquote className="ref-cont clear-mrg">
                <p>
                  Your brand is the core of your marketing, the central theme
                  around your products and services.Your brand is not your Logo
                  or your Company Name
                </p>
              </blockquote>
            </div>
          </div>

          <div className="ref-box brd-btm hreview">
            <div className="ref-avatar">
              <img
                alt=""
                src="assets/images/uploads/avatar/avatar-54x54-02.png"
                className="avatar avatar-54 photo"
                height="54"
                width="54"
              />
            </div>

            <div className="ref-info">
              <div className="ref-author">
                <strong>franklin may</strong>
                <span>Modern LLC,HR</span>
              </div>

              <blockquote className="ref-cont clear-mrg">
                <p>
                  Your brand is the core of your marketing, the central theme
                  around your products and services.Your brand is not your Logo
                  or your Company Name
                </p>
              </blockquote>
            </div>
          </div>

          <div className="ref-box brd-btm hreview">
            <div className="ref-avatar">
              <img
                alt=""
                src="assets/images/uploads/avatar/avatar-58x58-default.png"
                className="avatar avatar-54 photo"
                height="54"
                width="54"
              />
            </div>

            <div className="ref-info">
              <div className="ref-author">
                <strong>edwin ballard</strong>
                <span>West Alexandrine</span>
              </div>

              <blockquote className="ref-cont clear-mrg">
                <p>
                  Your brand is the core of your marketing, the central theme
                  around your products and services.Your brand is not your Logo
                  or your Company Name
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

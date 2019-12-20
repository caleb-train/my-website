import React from "react"
import Page from "../../Page"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="experience">
      <section className="section padd-box">
        <h2 className="title-lg text-upper">work experience</h2>
        <div className="education">
          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Jan <strong className="text-upper">2014</strong> - Mar
                <strong>2016</strong>
              </span>
            </time>
            <h3>Full Stack Developer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-audio-jungle.png"
                alt=""
              />
            </div>
            <span className="education-company">IBBA Group</span>
            <p>
              Your brand is the core of your marketing, the central theme around
              your products and services. Your brand is not your Logo or your
              Company Name
            </p>
          </div>

          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Jan <strong className="text-upper">2014</strong> - Mar
                <strong>2016</strong>
              </span>
            </time>
            <h3>Systems Analyst / Web Developer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-themeforest.png"
                alt=""
              />
            </div>
            <span className="education-company">Loft Studio</span>
            <p>
              Your brand is the core of your marketing, the central theme around
              your products and services.
            </p>
          </div>

          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Jan <strong className="text-upper">2014</strong> - Mar
                <strong>2016</strong>
              </span>
            </time>
            <h3>Full Stack Developer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-envato.png"
                alt=""
              />
            </div>
            <span className="education-company">Stu Unger Rise</span>
            <p>
              Your brand is the core of your marketing, the central theme around
              your products and services.
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}

import React from "react"
import Page from "../../Page"
import Heading from "../../../siteComps/Heading"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="experience">
      <section className="section padd-box">
        <Heading uppercase type="h1" text="work experience" />
        <div className="education">
          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Oct <strong className="text-upper">2015</strong> - Dec
                <strong>2017</strong>
              </span>
            </time>
            <h3>UI/UX Designer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-audio-jungle.png"
                alt=""
              />
            </div>
            <span className="education-company">The Operator</span>
            <p>
              I worked with a number of brilliant minds to create an app called
              Ulearn that provided past questions, answers and solutions to
              students writing exams to get into Universities and students in
              the process of obtaining a degree. The app garnered over 10,000
              Users after its release and received numerous positive feedback
              from students
            </p>
          </div>

          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Feb <strong className="text-upper">2018</strong> - Mar
                <strong>2019</strong>
              </span>
            </time>
            <h3>Software Engineer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-themeforest.png"
                alt=""
              />
            </div>
            <span className="education-company">Webplay Nigeria</span>
            <p>
              I Created software application to manage stock and sales coupled
              with POS integrations such as reciept printing and barcode
              scanning for restuarants and pharmacies
            </p>
          </div>

          <div className="education-box">
            <time className="education-date" dateTime="2014-01T2016-03">
              <span>
                Mar <strong className="text-upper">2019</strong> - Sept
                <strong>2019</strong>
              </span>
            </time>
            <h3>Full Stack JS Developer</h3>
            <div className="education-logo">
              <img
                src="assets/images/uploads/experience/logo-envato.png"
                alt=""
              />
            </div>
            <span className="education-company">Andela Nigeria</span>
            <p>
              I worked in a team to create a Blog application and implement unit
              testing of various app features produced by the organisation using
              technologies like reactjs/Nextjs and node
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}

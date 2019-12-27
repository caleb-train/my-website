import React from "react"
import Page from "../../Page"
import Paragraph from "../../../siteComps/Paragraph"
import Heading from "../../../siteComps/Heading"
import Button from "../../../siteComps/Buttons"
import ProgressBar from "../../../siteComps/ProgressBar"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="about">
      <section>
        <div className="row">
          <Heading uppercase type="h1" text="About Me" />

          <div className="about">
            <Paragraph>
              <b>Hello, I’m Caleb Ebie!</b>
              <br />I am an adept problem solver with a desire to rid the world
              of inefficiency using algorithms. My super power is cognitive
              learning and a desperate need to prove my worth. I find great
              delight in authoring real world inspired features and reflecting
              the brand vision of my clients through code.
            </Paragraph>
          </div>
        </div>

        <div className="row clearfix">
          <div className="share">
            <Button value="Share" icon="crt-icon crt-icon-share-alt" />
          </div>
          <div className="signature">
            {/* <img src="assets/images/uploads/signature.svg" alt="signature" /> */}
          </div>
        </div>
      </section>

      <section>
        <div className="info">
          <Heading type="h2" text="Personal Information" />

          <dl className="dl-horizontal">
            <dt className="text-upper">Full Name</dt>
            <dd>Caleb Ewere Ebie</dd>

            <dt className="text-upper">Address</dt>
            <dd>Lagos Nigeria</dd>

            <dt className="text-upper">E-mail</dt>
            <dd>
              <a href="mailto:robertsmith@company.com">
                caleb42.codes@gmail.com
              </a>
            </dd>

            <dt className="text-upper">Phone</dt>
            <dd>+234 7083488183</dd>

            <dt className="text-upper">Freelance</dt>
            <dd>Available</dd>
          </dl>
        </div>

        <div className="languages">
          <Heading type="h2" text="Stacks" />
          <div>
            <ProgressBar
              type="Circle"
              id="frontend"
              title="FRONTEND"
              fontSize={0.8}
              width={23}
              valuenow={90}
            />
            <div className="stack-details">
              <ProgressBar
                id="html"
                type="Line"
                title="HTML"
                fontSize={0.7}
                strokeWidth={1.5}
                width={80}
                valuenow={92}
              />
              <ProgressBar
                id="css"
                type="Line"
                title="CSS"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={82}
              />
              <ProgressBar
                id="js"
                type="Line"
                title="JAVASCRIPT"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={95}
              />
            </div>
          </div>
          <div>
            <ProgressBar
              type="Circle"
              id="backend"
              title="BACKEND"
              fontSize={0.8}
              width={23}
              valuenow={76}
            />
            <div className="stack-details">
              <ProgressBar
                id="node"
                type="Line"
                title="JS/NODE"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={85}
              />
              <ProgressBar
                id="django"
                type="Line"
                title="PYTHON/DJANGO"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={65}
              />
              <ProgressBar
                id="laravel"
                type="Line"
                title="PHP/LARAVEL"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={78}
              />
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

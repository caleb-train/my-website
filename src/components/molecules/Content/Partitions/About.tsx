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
              <b>Helo, I’m Ola Lowe!</b>
              <br />I am talanted florist and decorator. I have graduated from
              International and cultural university of design and arts. Since
              first year in high school I relized that nature is most powerfull
              and beautiful gift in the world. I was captivated by beauty and
              simplicity of flowers and trees. Since then I have started to
              create and mastering unique and nice bouquets. My 1st masterpiece
              was garden of ant Ula Lowe decorated by me
            </Paragraph>
          </div>
        </div>

        <div className="row clearfix">
          <div className="share">
            <Button value="Share" icon="crt-icon crt-icon-share-alt" />
          </div>
          <div className="signature">
            <img src="assets/images/uploads/signature.svg" alt="signature" />
          </div>
        </div>
      </section>

      <section>
        <div className="info">
          <Heading type="h2" text="personal information" />

          <dl className="dl-horizontal">
            <dt className="text-upper">Full Name</dt>
            <dd>Ola Maria Lowe</dd>

            <dt className="text-upper">D.o.b.</dt>
            <dd>05 Sep 1986</dd>

            <dt className="text-upper">address</dt>
            <dd>Lagos Nigeria</dd>

            <dt className="text-upper">e-mail</dt>
            <dd>
              <a href="mailto:robertsmith@company.com">ewiscobaba@gmail.com</a>
            </dd>

            <dt className="text-upper">phone</dt>
            <dd>+1 256 254 84 56</dd>

            <dt className="text-upper">freelance</dt>
            <dd>Available</dd>
          </dl>
        </div>

        <div className="languages">
          <Heading type="h2" text="stacks" />
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
                valuenow={90}
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
              valuenow={90}
            />
            <div className="stack-details">
              <ProgressBar
                id="node"
                type="Line"
                title="JS/NODE"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={90}
              />
              <ProgressBar
                id="django"
                type="Line"
                title="PYTHON/DJANGO"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={82}
              />
              <ProgressBar
                id="laravel"
                type="Line"
                title="PHP/LARAVEL"
                strokeWidth={1.5}
                fontSize={0.7}
                width={80}
                valuenow={95}
              />
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

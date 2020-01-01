import React from "react"
import { UList, List } from "../../siteComps/List"
import { Link } from "gatsby"
import Image from "../../siteComps/Image"
import Button from "../../siteComps/Buttons"
import "./index.scss"

export default ({ theme = "inherit", ...props }) => {
  return (
    <div className="side-box">
      <div className="card">
        <div className="card-avatar">
          <Image
            attr={{
              className: "avatar avatar-195",
              width: "195",
              height: "195",
            }}
            src="/dp.png"
            alt="brain-logo"
          />
        </div>
        <div className="card-info">
          <h2>Caleb Ebie</h2>

          <p>Software Engineer</p>
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
        </div>
      </div>
      <div className="download">
        <a className="" href="/Caleb_Ewere_Ebie.pdf" target="_blank">
          <Button value="VIEW RESUME" theme="default" />
        </a>
      </div>
    </div>
  )
}

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

          <p>Engineer | Designer</p>
          <UList list="ul" style="clear-list">
            <List>
              <Link to="#">
                <span className="crt-icon crt-icon-facebook"></span>
              </Link>
            </List>
            <List>
              <Link to="#">
                <span className="crt-icon crt-icon-twitter"></span>
              </Link>
            </List>
            <List>
              <Link to="#">
                <span className="crt-icon crt-icon-linkedin"></span>
              </Link>
            </List>
            <List>
              <Link to="#">
                <span className="crt-icon crt-icon-instagram"></span>
              </Link>
            </List>
          </UList>
        </div>
      </div>
      <div className="download">
        <a className="" href="#">
          <Button value="DOWNLOAD RESUME" theme="default" />
        </a>
      </div>
    </div>
  )
}

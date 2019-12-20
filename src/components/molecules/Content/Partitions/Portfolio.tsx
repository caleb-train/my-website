import React from "react"
import Page from "../../Page"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="portfolio">
      <section className="section padd-box">
        <h2 className="title-lg text-upper padd-box">portfolio</h2>

        <div className="pf-wrap">
          <div className="pf-filter padd-box">
            <button data-filter="*">all</button>
            <button data-filter=".photography">photography</button>
            <button data-filter=".design">design</button>
          </div>

          <div className="pf-grid">
            <div className="pf-grid-sizer"></div>

            <div className="pf-grid-item design">
              <a className="pf-project" href="#pf-popup-6">
                <figure className="pf-figure">
                  <img
                    src="assets/images/uploads/portfolio/prj-06.jpg"
                    alt=""
                  />
                </figure>

                <div className="pf-caption text-center">
                  <div className="valign-table">
                    <div className="valign-cell">
                      <h2 className="pf-title text-upper">stu unger rise</h2>

                      <div className="pf-text clear-mrg">
                        <p>
                          Accessories Here you can find the best computer
                          monitor, printer, scanner, speaker, projector.
                          hardware and more
                        </p>
                      </div>

                      <button className="pf-btn btn btn-primary">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="pf-grid-item photography">
              <a className="pf-project" href="#pf-popup-7">
                <figure className="pf-figure">
                  <img
                    src="assets/images/uploads/portfolio/prj-01.jpg"
                    alt=""
                  />
                </figure>

                <div className="pf-caption text-center">
                  <div className="valign-table">
                    <div className="valign-cell">
                      <h2 className="pf-title text-upper">stu unger rise</h2>

                      <div className="pf-text clear-mrg">
                        <p>
                          Accessories Here you can find the best computer
                          monitor, printer, scanner, speaker, projector.
                          hardware and more
                        </p>
                      </div>

                      <button className="pf-btn btn btn-primary">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

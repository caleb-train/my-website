import React from "react"
import IFilter from "./IFilter"
import Button from "../Buttons"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Image from "../Image"
import "./index.scss"

export default ({ theme = "default", ...props }: IFilter) => {
  const pfGrid = React.useRef()
  let iso = null

  React.useEffect(() => {
    const grid = pfGrid.current
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout")
      iso = new Isotope(grid, {
        // options...
        itemSelector: ".pf-grid-item",
        masonry: {
          columnWidth: ".pf-grid-sizer",
          gutter: 2,
        },
      })
    } else iso = { arrage: _ => {} }
  }, [])

  const selectn = e => {
    let filter = e.target.getAttribute("data-filter")
    document.querySelector(".pf-wrap button.active").classList.remove("active")
    e.target.classList.add("active")
    iso.arrange({
      filter: `${filter}`,
    })
  }

  return (
    <div className="pf-wrap">
      <div className="pf-filter padd-box">
        <Button
          borderRadius="medium"
          classes="all active"
          value="All"
          theme="inherit"
          attr={{ "data-filter": "*", onClick: e => selectn(e) }}
        />
        {props.filters.map((filter, index) => (
          <Button
            borderRadius="medium"
            key={index}
            value={filter.title}
            theme="inherit"
            attr={{
              "data-filter": `.${filter.name}`,
              onClick: e => selectn(e),
            }}
          />
        ))}
      </div>

      <div className="pf-grid" ref={pfGrid}>
        <div className="pf-grid-sizer"></div>
        {props.projects.map((proj, index) => (
          <div key={index} className={`pf-grid-item ${proj.name}`}>
            <div className="pf-project">
              <Image
                src={proj.image}
                alt={proj.alt}
                attr={{ className: "pf-figure" }}
              />

              <div className="pf-caption text-center">
                <div className="valign-table">
                  <div className="valign-cell">
                    <Heading
                      classes="pf-title text-upper"
                      type="h2"
                      text={proj.title}
                    />

                    <div className="pf-text clear-mrg">
                      <Paragraph>{proj.body}</Paragraph>
                    </div>

                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        classes="pf-btn"
                        value="View More"
                        size="sm"
                        theme={theme}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

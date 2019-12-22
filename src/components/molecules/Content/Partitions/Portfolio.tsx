import React from "react"
import Page from "../../Page"
import Grid from "../../../siteComps/Filtergrid"
import Heading from "../../../siteComps/Heading"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="portfolio">
      <section>
        <Heading uppercase type="h1" text="portfolio" />
        <div className="portfolio-grid">
          <Grid
            filters={[
              { name: "photography", title: "photography" },
              { name: "design", title: "design" },
            ]}
            projects={[
              {
                name: "photography",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxEOVTcvf8wEI1bGPVZrCVADRvWGpFsVzrowss8S1SuQl_xJjK",
                alt: "image",
                body:
                  "Accessories Here you can find the best computer monitor, printer, scanner, speaker, projector. hardware and more",
                title: "stu unger rise",
                link: "www.google.com",
              },
              {
                name: "design",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkB0nT0L_8AvBP9y87XoRj24JMDcRp8cyDJ2k1iMUnq83QA--J",
                alt: "image",
                body:
                  "Accessories Here you can find the best computer monitor, printer, scanner, speaker, projector. hardware and more",
                title: "stu unger rise",
                link: "www.google.com",
              },
              {
                name: "photography",
                image:
                  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
                alt: "image",
                body:
                  "Accessories Here you can find the best computer monitor, printer, scanner, speaker, projector. hardware and more",
                title: "stu unger rise",
                link: "www.google.com",
              },
            ]}
          />
        </div>
      </section>
    </Page>
  )
}

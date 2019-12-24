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
              { name: "react", title: "React" },
              { name: "angular", title: "Angular" },
              { name: "design", title: "Design" },
            ]}
            projects={[
              {
                name: "angular",
                image: "/salesapp.png",
                alt: "Restuarant",
                body:
                  "Restaurant sales application for handling stock keeping and receipt issuing",
                title: "Sales App",
                link: "http://ncgcteenz.com.ng/tego/hms",
              },
              {
                name: "react",
                image: "/scrapbook.png",
                alt: "Scrapbook",
                body:
                  "Note Taking Application that gives users the chance to make and save notes online",
                title: "Scrapbook",
                link: "https://note-taking-app-staging.herokuapp.com/",
              },
              {
                name: "design",
                image: "/ulearn.webp",
                alt: "Ulearn",
                body:
                  "Android Study Application that enables users to view past questions for JAMB & PostUTME and take a test",
                title: "Ulearn",
                link:
                  "https://play.google.com/store/apps/details?id=com.operator.u_learn&hl=en",
              },
              {
                name: "design",
                image: "/debbiewales.png",
                alt: "Debbywales",
                body:
                  "This ecommerce site enables the client sell shoe products and make payments",
                title: "Debbywales",
                link: "https://debbywales.com/en/",
              },
              {
                name: "react",
                image: "/ah.png",
                alt: "authors haven",
                body:
                  "Blog application that gives authors the chance to create and publish articles",
                title: "Authors Haven",
                link: "https://demeter-ah-frontend-staging.herokuapp.com",
              },
              {
                name: "angular",
                image: "/security.png",
                alt: "Desteward",
                body:
                  "Security application that lets security agencies track their clients movement",
                title: "Security App",
                link: "http://destewardgroup.com/security",
              },
            ]}
          />
        </div>
      </section>
    </Page>
  )
}

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebox from "../components/molecules/Sidebox"
import Mininav from "../components/molecules/Mininav"
import Content from "../components/molecules/Content"
import "../styles/home.scss"
import { Modal } from "../components/siteComps/ShareBtn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <Sidebox />
      <Mininav />
      <Content />
    </div>
    <Modal />
  </Layout>
)

export default IndexPage

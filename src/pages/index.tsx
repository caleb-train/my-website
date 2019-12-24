import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebox from "../components/molecules/Sidebox"
import Mininav from "../components/molecules/Mininav"
import Content from "../components/molecules/Content"
import "../styles/home.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <Sidebox />
      <Mininav />
      <Content />
    </div>
  </Layout>
)

export default IndexPage

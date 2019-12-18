import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from "../components/siteComps/Alert"
import Button from "../components/siteComps/Buttons"
import Line from "../components/siteComps/Line"
import ProgressBar from "../components/siteComps/ProgressBar"
import Heading from "../components/siteComps/Heading"
import Paragraph from "../components/siteComps/Paragraph"
import Blockquote from "../components/siteComps/Blockquote"
import { UList, List } from "../components/siteComps/List"
import Grid from "../components/siteComps/Filtergrid"
import Sidebox from "../components/molecules/Sidebox"
import Mininav from "../components/molecules/Mininav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="crt-container" className="crt-container">
      <Sidebox />
      <Mininav />
    </div>
  </Layout>
)

export default IndexPage

{
  /* <Alert color="success" message="hello there" title="greet" />
    <Button value="start" />
    <Line pattern="dotted" />
    <ProgressBar
      type="Circle"
      width={20}
      fontSize={1}
      title="python"
      theme="light"
      valuenow={30}
    />
    <Heading theme="light" type="h3" text="Hello" thin />
    <Paragraph text="Hello" />
    <Blockquote
      quoteIcon="side"
      link="www.google.com"
      person="john buyan"
      from="days of our life"
      theme="default"
    >
      <Paragraph text="It's not the customers job to know what they want." />
    </Blockquote>
    <UList list="ul" style="styled-ul">
      <List>Hello</List>
      <List>Hello</List>
      <List>Hello</List>
      <List>Hello</List>
    </UList>
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
    /> */
}

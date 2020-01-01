import React from "react"

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share"

const SocialMediaButtons = props => (
  <>
    <FacebookShareButton url={props.url} quote={props.text}>
      <FacebookIcon size={42} round />
    </FacebookShareButton>

    <TwitterShareButton url={props.url} title={props.text}>
      <TwitterIcon size={42} round />
    </TwitterShareButton>

    <WhatsappShareButton url={props.url} title={props.text}>
      <WhatsappIcon size={42} round />
    </WhatsappShareButton>

    <EmailShareButton
      subject={`Check out what I did on GoodWerk`}
      body={`${props.text}: ${props.url}`}
    >
      <EmailIcon size={42} round />
    </EmailShareButton>
  </>
)

export default SocialMediaButtons

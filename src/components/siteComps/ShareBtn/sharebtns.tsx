import React from "react"

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share"

const SocialMediaButtons = props => (
  <>
    <FacebookShareButton url={props.url} quote={props.text}>
      <FacebookIcon size={48} round />
    </FacebookShareButton>

    <TwitterShareButton url={props.url} title={props.text}>
      <TwitterIcon size={48} round />
    </TwitterShareButton>

    <LinkedinShareButton url={props.url} title={props.text}>
      <LinkedinIcon size={48} round />
    </LinkedinShareButton>

    <EmailShareButton
      subject={`Check out what I did on GoodWerk`}
      body={`${props.text}: ${props.url}`}
    >
      <EmailIcon size={48} round />
    </EmailShareButton>
  </>
)

export default SocialMediaButtons

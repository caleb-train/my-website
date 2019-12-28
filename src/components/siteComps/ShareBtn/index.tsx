import React from "react"
import IShareBtn from "./IShareBtn"
import actModal from "./modal"
import Button from "../Buttons"
import "./index.scss"
import SocialMediaButtons from "./sharebtns"

/* 
import {
  FacebookShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share" */

export default (props: IShareBtn) => {
  React.useEffect(() => {
    const Modal = actModal()
    Modal.init()
  }, [])
  const shareUrl = "http://github.com"
  return (
    <div className="demo-btns">
      <Button
        {...props}
        attr={{ "data-modal": "#modal" }}
        classes="modal__trigger"
      />
    </div>
  )
}

export const Modal = props => (
  <div id="modal" className="modal" role="dialog" aria-hidden="true">
    <div className="modal__bg"></div>
    <div className="modal__dialog">
      <div className="modal__content">
        <div>
          <SocialMediaButtons
            url="http://meetcaleb.netlify.com/"
            text="Checkout Caleb's personal Website"
          />
        </div>
        <a href="" className="modal__close demo-close">
          <svg className="" viewBox="0 0 24 24">
            <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
        </a>
      </div>
    </div>
  </div>
)

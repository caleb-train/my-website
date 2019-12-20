import React from "react"
import Page from "../../Page"

export default ({ theme = "inherit", ...props }) => {
  return (
    <Page id="about">
      <section className="section brd-btm padd-box">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="title-lg text-upper">About Me</h2>

            <div className="text-box">
              <p>
                <b>Helo, I’m Ola Lowe!</b>
                <br />I am talanted florist and decorator. I have graduated from
                International and cultural university of design and arts. Since
                first year in high school I relized that nature is most
                powerfull and beautiful gift in the world. I was captivated by
                beauty and simplicity of flowers and trees. Since then I have
                started to create and mastering unique and nice bouquets. My 1st
                masterpiece was garden of ant Ula Lowe decorated by me
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-9">
            <div className="crt-share-box clearfix">
              <button id="btn-share" className="btn btn-share btn-upper">
                <span className="crt-icon crt-icon-share-alt"></span>Share
              </button>
              <script
                type="text/javascript"
                src="../../../s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5821a6c28931dc81"
              ></script>
              <div className="addthis_inline_share_toolbox"></div>
            </div>
          </div>
          <div className="col-sm-3 text-right">
            <img src="assets/images/uploads/signature.svg" alt="signature" />
          </div>
        </div>
      </section>

      <section className="section padd-box">
        <div className="row">
          <div className="col-sm-6 clear-mrg">
            <h2 className="title-thin text-muted">personal information</h2>

            <dl className="dl-horizontal clear-mrg">
              <dt className="text-upper">Full Name</dt>
              <dd>Ola Maria Lowe</dd>

              <dt className="text-upper">D.o.b.</dt>
              <dd>05 Sep 1986</dd>

              <dt className="text-upper">address</dt>
              <dd>24058, Belgium, Brussels, Liutte 27, BE</dd>

              <dt className="text-upper">e-mail</dt>
              <dd>
                <a href="mailto:robertsmith@company.com">
                  robertsmith@company.com
                </a>
              </dd>

              <dt className="text-upper">phone</dt>
              <dd>+1 256 254 84 56</dd>

              <dt className="text-upper">freelance</dt>
              <dd>Available</dd>
            </dl>
          </div>
        </div>
      </section>
    </Page>
  )
}

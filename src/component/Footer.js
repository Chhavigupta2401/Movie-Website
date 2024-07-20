import React from "react";
import "../css/fotter.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <img src="images/download.png" alt="#" className="stream" />
                <div className="text d-flex">
                  <span>
                    Email us: <span style={{ color: "white" }}>@username</span>
                  </span>
                  <span> Customer Services</span>
                  <h6 style={{ color: "white", fontWeight: "400" }}>
                    +(91) 9775643210
                  </h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 d-lg-block d-none" style={{width:"13%"}}>
                <h5 className="heading">quick links</h5>
                <div className="text d-flex">
                  <span>about us</span>
                  <span>blog</span>
                  <span>pricing plan</span>
                  <span>FAQ</span>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 d-lg-block d-none">
                <h5 className="heading">movies to watch</h5>
                <div className="text d-flex">
                  <span>top trending</span>
                  <span>recommended</span>
                  <span>popular</span>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 d-md-block d-none">
                <h5 className="heading">about company</h5>
                <div className="text d-flex">
                  <span>contact us</span>
                  <span>privacy policy</span>
                  <span>terms of use</span>

                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <h5 className="heading">Subscribe Newsletter</h5>
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  required
                  className="email"
                />
                <button className="submit_btn btn-hover" type="submit">
                  subscribe
                </button>
                <div className="follow d-flex">
                  <span className="text">follow us: </span>
                  <div className="socials"> <i class="fab fa-facebook social"></i>
                  <i class="fab fa-instagram social"></i>
                  <i class="fab fa-twitter social"></i>
                  <i class="fab fa-dribbble social"></i></div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

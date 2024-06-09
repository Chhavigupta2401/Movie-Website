import React from "react";
import "../css/Main.css";
export default function Main() {
  return (
    <>
      <div className="main">
        <div className="contis">

          <div className="row">
            <div className="col-lg-6 col-md-12 "style={{marginTop:"-80px"}}>
              <div className="c-logo">
                <img
                  src="images/download.png"
                  className="img2 img-fluid w-100 "
                  alt=""
                ></img>
              </div>

              <h1 className="tex ">the army</h1>
              <div className="rowy d-flex align-item-center"style={{marginTop:"-2px"}}>
                <div className="coll">
                  <ul className=" list-inline text-primary d-flex align-items-center ">
                    <li className="lis">
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li className="lis">
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li className="lis">
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li className="lis">
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li className="lis">
                      <i class="fa-solid fa-star-half"></i>
                    </li>
                  </ul>
                </div>
                <div className="tt">4.7(IMDB)</div>
                <div className="td d-flex align-item-center ">20+</div>
                <div className="cs" style={{ color: "white" }}>
                  2 seasons
                </div>
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus non, et aperiam obcaecati officia optio odio maiores
                reiciendis maxime! Tenetur soluta tempora libero iure optio
                repellat ullam quibusdam facere voluptates?
              </p>
              <div className="trending-list">
                <span className="st">starring:</span>
                <span className="ts">karen garudy ,james</span> <br />
                <span className="st">geners:</span>
                <span className="ts">action</span>
                <br />
                <span className="st">tag:</span>
                <span className="ts">action adventure</span>
              </div>
              <div className="d-flex align-item-center re">
                <a href="/" className="btn btn-hover">
                  <i class="fa-solid fa-play"></i> play now
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="padingCont ">
              <a className="playbtn"   href="/">
              <i class="fa-solid fa-play"></i>
                <span className="w-trailor">
                   watch trailor
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

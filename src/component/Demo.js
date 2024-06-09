import React from "react";
import "../css/Demo.css";
import Card from "./Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Demo() {
  return (
    <>
      <div className="rowy d-flex justify-content-between align-item-center">
        <h3 className="title">Latest Movies</h3>
        <a href="/" className="iq">
          View All
        </a>
      </div>
      <Card />
      <div className="rowy d-flex justify-content-between align-item-center">
        <h3 className="title">upcoming Movies</h3>
        <a href="/" className="iq">
          View All
        </a>
      </div>
      <Card />
      <div className="hand">
        <h3 className="title mt-5">Top in Global chart</h3>

        <div className="card cd" style={{ border: "none" }}>
          <img
            src="images/01.f3300754.jpg "
            className="img-fuid w-100"
            alt=""
          />
          <div className="hea">
            <h5 className="hd">Star Warrier</h5>
            <p className="time">1hr : 50mins</p>
            <button className="btx">
              {" "}
              <div className="fa">
                <i class="fa-solid fa-play"></i>
              </div>
              PLAY NOW
            </button>
          </div>
        </div>

        <div className="card cd" style={{ border: "none" }}>
          <img src="images/02.cfab1387.jpg" className="img-fuid w-100" alt="" />
          <div className="hea">
            <h5 className="hd">narnia</h5>
            <p className="time">3hr : 50mins</p>
            <button className="btx">
              {" "}
              <div className="fa">
                <i class="fa-solid fa-play"></i>
              </div>
              PLAY NOW
            </button>
          </div>
        </div>

        <div className="card cd" style={{ border: "none" }}>
          <img
            src="images/03.705d7ac1.jpg "
            className="img-fuid w-100"
            alt=""
          />
          <div className="hea">
            <h5 className="hd">x-man</h5>
            <p className="time">2hr : 50mins</p>
            <button className="btx">
              {" "}
              <div className="fa">
                <i class="fa-solid fa-play"></i>
              </div>
              PLAY NOW
            </button>
          </div>
        </div>

        <div className="card cd" style={{ border: "none" }}>
          <img
            src="images/04.b3c156ff.jpg "
            className="img-fuid w-100"
            alt=""
          />
          <div className="hea">
            <h5 className="hd">logan</h5>
            <p className="time">1hr : 50mins</p>
            <button className="btx">
              {" "}
              <div className="fa">
                <i class="fa-solid fa-play"></i>
              </div>
              PLAY NOW
            </button>
          </div>
        </div>
      </div>

      <div className="rowy d-flex justify-content-between align-item-center">
        <h3 className="title">suggested for you</h3>
        <a href="/" className="iq">
          View All
        </a>
      </div>
      <Card />

      <div className="sticky d-flex justify-content-between align-item-center">
        <div className="feed">
          <h1 className="bae">bailey</h1>
          <div className="ics d-flex align-item-center mt-1 mb-1">
            <div className="icns">
              {" "}
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h6 style={{ color: "white" }}>9.2(Imdb)</h6>
          </div>
          <div className="line d-flex  align-item-center ">
            <div className="plus">13+</div>
            <h6 className="time">2h 30m</h6>
          </div>
          <p className="lorem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <div className="info d-flex align-item-center">
            <button className="btn btn-hover">PLAY NOW</button>
            <a href="/" className="more btn">
              More info
            </a>
          </div>
        </div>

        <div className="slider">
          <img src="images/p2.8c7c77c9.jpg " className="ima" alt="" />
        </div>
      </div>

      <div className="camp col-sm-12 ">
        <div className="tab-title">
          <ul className="trending-pills justify-content-center d-flex align-item-center">
            <li>
              <a href="/" className="nav-link">

                overview
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                episodes
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                trailor
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                something more
              </a>
            </li>
          </ul>
        </div>

          <div className="space">
            <img src="images/download.png" className="c-logo" alt="" />
            <h1 className="tex texta">the hero camp</h1>
            <div className="ssns d-flex justify-content-center">
              <div className="rate">18+</div>
              <div className="se ">3 Seasons</div>
              <div className="se" style={{ color: "white" }}>
                2020
              </div>
            </div>
            <div className="series d-flex align-item-center ">
              <a href="/">
                {" "}
                <img
                  src="images/download (1).png"
                  alt=""
                  className="img-fluid w-100"
                />
              </a>
              <div className="text-gold">#2 in series today</div>
            </div>

            <p className="para ps">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus non, et aperiam obcaecati officia optio odio maiores
            reiciendis maxime! Tenetur soluta tempora libero iure optio
            repellat ullam quibusdam facere voluptates?
          </p>
          <div className="d-flex align-item-center re">
          <a href="/" className="btn btn-hover">
            <i class="fa-solid fa-play"></i> play now
          </a>
        </div>
          <div className="trending-list tds">
            <span className="st">starring:</span>
            <span className="ts">karen garudy ,james</span> <br />
            <span className="st">geners:</span>
            <span className="ts">action</span>
            <br />
            <span className="st">tag:</span>
            <span className="ts">action adventure</span>
          </div>

        </div>

      </div>
      <div className="rowy d-flex justify-content-between align-item-center">
        <h3 className="title">Latest Movies</h3>
        <a href="/" className="iq">
          View All
        </a>
      </div>
      <Card/>
    </>
  );
}

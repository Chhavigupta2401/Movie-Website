import React from 'react'
import '../css/Demo.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function Card() {
  return (
  <>
  <div className="owly ">
  <OwlCarousel className="owl-theme" loop margin={48} autoplay={true} autoplayTimeout={1000} autoplayHoverPause={true} nav>
    <div class="item">
      <div className="card" style={{ border: "none" }}>
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
    </div>
    <div class="item">
      <div className="card" style={{ border: "none" }}>
        <img
          src="images/02.cfab1387.jpg"
          className="img-fuid w-100"
          alt=""
        />
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
    </div>
    <div class="item">
      <div className="card" style={{ border: "none" }}>
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
    </div>
    <div class="item">
      <div className="card" style={{ border: "none" }}>
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

  </OwlCarousel>
</div>


  </>
  )
}

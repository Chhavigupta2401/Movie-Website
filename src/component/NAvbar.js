import React from "react";
import "../css/Nav.css";

export default function NAvbar() {
  return (
    <>
      <div className="row">
        <nav class="p-0 navbar navbar-expand-lg navbar-dark">
          <div className="col-2">
            <a href="/" class="navbar-brand navbar-brand">
              <img src="images/download.png" alt="" className="logo img-fluid w-100" />
            </a>
          </div>
          <div className="col-7 menu">
            <ul className="ml-auto navbar-nav">
              <li>
                <a href="/" className="lists">
                  HOME
                </a>
              </li>
              <li>
                <a href="/" className="lists">
                  MOVIES
                </a>
              </li>
              <li>
                <a href="/" className="lists">
                  TVSHOWS
                </a>
              </li>
              <li>
                <a href="/" className="lists">
                  VEDIO
                </a>
              </li>
              <li>
                <a href="/" className="lists">
                  BLOGS
                </a>
              </li>
              <li>
                <a href="/" className="lists">
                  PAGES
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
          <div className="navbar-right menu-right">
            <ul className="d-flex align-items-center list-inline m-0">
              <li>
              <a href="/" className="search"> <i class="fa-solid fa-magnifying-glass"></i></a>
              </li>
              <li><a href="/" className="search"><i class="fa-regular fa-bell"></i></a>
              </li>
              <li><a href="/" className="search"><div className="img1 d-flex align-item-center"><img src="images/download.jpeg" alt="" className="img1 img-fluid rounded-circle" /></div></a></li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
}

import React from "react";
import NAvbar from "./NAvbar";
import Main from "./Main";
import Demo from "./Demo";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="conti">
        <NAvbar />


      </div>
      <Main/>
      <Demo/>
  <Footer/>
    </>
  );
}

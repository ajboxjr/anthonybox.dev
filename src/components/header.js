import React from "react";
import hero_png from "../images/hero_anthony.png"
import hero_blob from "../images/hero_blob.png"
import pdf from "../misc/AnthonyBox.pdf"
function Hero(){
  return (
    <section id="hero">
      <div id="hero_blob">
        <img src={hero_blob} alt=""/>
      </div>
      <div id="background">

        <div id="hero_header">

          <div id="hero_text">
            <h1>Anthony Box</h1>
            <h3>Budding Fullstack Developer</h3>
          </div>
          <div id="cv_download">
            <a href={pdf} download>Download</a>
          </div>
        </div>
      </div>
      <div id="heroProfile">
      <img src={hero_png} alt=""/>
      </div>
    </section>
  );
}

export default Hero;

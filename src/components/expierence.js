import React from "react";
import funny_blob from "../images/funny_blob.png"
function Expierence(){
  return (
    <section id="expierence">

      <div id="expierence_header" className="section_header">
        <h1>Work Expierence</h1>
      </div>
      <div id="expierece_blob">
        <img src={funny_blob} alt=""/>
      </div>
      <div id="expierence_content work">
        <div id="work_item">
          <div id="work_item_title">
            <h3>Freelance Web Development</h3>
          </div>
          <div id="work_item_duration">
            <h4>August 2018 to Janurary 2020</h4>
          </div>
          <div id="work_item_description ">
            <ul id="work_item_list">
              <li>Designed application portal UI Home Helpers, using HTML,CSS, Javascript.</li>
              <li>Web & Mobile Friendly (Home Helpers, Riddle & Schwartz, Law Firm, and Bolden Studios) </li>
              <li>Untilized shell to store and manage github reposititories</li>
            </ul>
          </div>
        </div>
        <div id="work_item">
          <div id="work_item_title">
            <h3>McDonalds</h3>
          </div>
          <div id="work_item_duration">
            <h4>August 2018 to Janurary 2020</h4>
          </div>
          <div id="work_item_description ">
            <ul id="work_item_list">
              <li>Provide excellent customer service and showed team cooperation.</li>
              <li>Multi-tasked quickly and effeciently to sastify customers</li>
            </ul>
          </div>
        </div><div id="work_item">
          <div id="work_item_title">
            <h3>Enterprise Bank and Trust</h3>
          </div>
          <div id="work_item_duration">
            <h4>August 2018 to Janurary 2020</h4>
          </div>
          <div id="work_item_description ">
            <ul id="work_item_list">
              <li>Designed application portal UI Home Helpers, using HTML,CSS, Javascript.</li>
              <li>Web & Mobile Friendly (Home Helpers, Riddle & Schwartz, Law Firm, and Bolden Studios) </li>
              <li>Untilized shell to store and manage github reposititories</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Expierence

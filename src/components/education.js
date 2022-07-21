import React from "react";

function Education(){
  return (
    <section id="education">
      <div id="education_header" className="section_header">
        <h1>Education</h1>
      </div>
      <div id="education_content">
        <div id="work_item">
          <div id="work_item_title">
            <h3>Make School- Full Stack Web</h3>
          </div>
          <div id="work_item_duration">
            <h4>September 2017 to December 2017</h4>
          </div>
          <div id="work_item_description ">
            <ul id="work_item_list">
              <li>Practiced Agile development (Stand Up, Scrum, code reviews) with team. </li>
              <li>Created and tested CRUD applications in Node and (NO) SQL.
                  Implemented Data Structures in Python to create Neil Degrasse Tyson Sentence Generator.</li>
            </ul>
          </div>
        </div>
        <div id="work_item">
          <div id="work_item_title">
            <h3>Saint Louis Community College- Computer Science</h3>
          </div>
          <div id="work_item_duration">
            <h4>2018 to 2020</h4>
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
export default Education;

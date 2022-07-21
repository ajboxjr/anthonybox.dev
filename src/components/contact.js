import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
  let viewFormSucess ="hide";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bz7m35j', 'template_jf6mt07', form.current, 'user_LW7FSQfFZKQzScoqWfHpn')
      .then((result) => {
        if(result.text === "OK"){
          console.log("jere");
          viewFormSucess ="show";
          console.log(viewFormSucess);
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact_me">
      <div id="contact_header" className="section_header">
        <h1>Contact Me</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className={viewFormSucess} id="contact_form">
        <div id="form_name">
          <label for="name">Name</label>
          <input name="name" type="text"/>
        </div>
        <div id="form_email">
          <label for="email">email</label>
          <input name="email" type="text"/>
        </div>
        <div id="form_subject">
          <label for="subject">Subject</label>
          <input name="subject" type="text"/>
        </div>
        <div id="form_message">
          <label for="subject">Message</label>
          <textarea name="message" rows="8" cols="80"></textarea>
        </div>
        <div id="form_submit">
          <input type="submit" id="submit_button" value="Submit"/>
         </div>
      </form>
    </section>
  );
}
export default Contact;

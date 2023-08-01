import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";


const Contact = ({ color, navColor }) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("");

  useEffect(() => {
    const contact = document.getElementById("contact");
    contact.style.backgroundColor = navColor;
  }, [navColor]);

  const sendEmail = (e) => {
    e.preventDefault();

    if(!name || !email || !message){
      alert("Please supply all fields.")
    } else {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
          alert("Your message has been sent.")
            // console.log(result.text);
            form.current.reset()
            setName("")
            setEmail("")
            setMessage("")
        }, (error) => {
          alert("Sorry, there was an submitting your message.")
            console.log(error.text);
            form.current.reset()
            setName("")
            setEmail("")
            setMessage("")
        });
    }
  };

  return (
    <div id="contact">
      <div id="contact-container">
        <h2 id="contact-title">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail}>
          <label>
            <p>Name</p>
            <input
              className="input-fields"
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e)=> setName(e.target.value)}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              className="input-fields"
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Message</p>
            <textarea 
            className="input-fields"
              type="text"
              name="message"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}/>
          </label>
          <button
            type="submit" id="email-submit">Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

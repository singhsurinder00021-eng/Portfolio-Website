import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import useReveal from "../hooks/useReveal";
import { magneticEffect, resetMagnetic } from "../utils/magnetic";

export default function Contact() {
  useReveal();

  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Set the hidden time input to the exact current timestamp before shipping the form
    if (form.current.elements.time) {
      form.current.elements.time.value = new Date().toLocaleString();
    }

    const SERVICE_ID = "service_ydgccqi"; 
    const TEMPLATE_ID = "template_ve60ep8";
    const PUBLIC_KEY = "VAVOCnfpQoKZUzDP0";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent Successfully! I will get back to you soon.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try emailing me directly at singhsurinder00021@gmail.com");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="contact-container">
        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>

        <p className="contact-subtitle">
          Have a project in mind, a job opportunity, or just want to say hello? Let's talk.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          {/* Automatically injects a formatted timestamp to map to {{time}} */}
          <input type="hidden" name="time" />

          <div className="input-group reveal">
            <input type="text" name="name" required placeholder=" " />
            <label>Name</label>
          </div>

          {/* Added back for EmailJS configuration context, though mapped inputs use {{name}} and {{message}} */}
          <div className="input-group reveal">
            <input type="email" name="user_email" required placeholder=" " />
            <label>Email</label>
          </div>

          <div className="input-group reveal">
            <textarea name="message" rows="5" required placeholder=" "></textarea>
            <label>Message</label>
          </div>

          <button
            type="submit"
            className="btn-primary reveal"
            disabled={isSending}
            onMouseMove={magneticEffect}
            onMouseLeave={resetMagnetic}
            style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? "not-allowed" : "pointer" }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}
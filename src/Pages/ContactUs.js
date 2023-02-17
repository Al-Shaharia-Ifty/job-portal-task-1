import React from "react";
import "../CSS/ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <main>
        <section>
          <h2>Get in Touch</h2>
          <form action="submit-form.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </section>
        <section>
          <h2>Our Location</h2>
          <p>We are located in the heart of downtown Anytown, USA.</p>
          <p>
            123 Main Street
            <br />
            Anytown, USA
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;

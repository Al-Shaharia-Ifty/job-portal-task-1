import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <main>
      <section data-aos="fade-left" data-aos-delay="300">
        <h2 className="text-2xl lg:text-3xl my-2">Our Mission</h2>
        <p className="text-justify">
          Our mission is to connect job seekers with quality job opportunities,
          and to help employers find the right candidates for their open
          positions. We believe in creating a positive user experience for both
          job seekers and employers, and in promoting diversity and inclusion in
          the workplace.
        </p>
      </section>
      <section data-aos="fade-left" data-aos-delay="400">
        <h2 className="text-2xl lg:text-3xl my-2">Our History</h2>
        <p className="text-justify">
          Job Hunting Website was founded in 2010 by John Smith and Jane Doe.
          Since then, we have grown to become one of the leading job hunting
          websites in the country, with thousands of job listings and hundreds
          of employers using our website to find top talent.
        </p>
      </section>
      <section data-aos="fade-left" data-aos-delay="500">
        <h2 className="text-2xl lg:text-3xl my-2">Contact Us</h2>
        <p className="text-justify">
          If you have any questions or concerns about our website, please
          contact us at:
        </p>
        <ul>
          <li>Email: info@jobhuntingwebsite.com</li>
          <li>Phone: 1-800-555-5555</li>
          <li>Address: 123 Main Street, Anytown USA</li>
        </ul>
      </section>
    </main>
  );
};

export default About;

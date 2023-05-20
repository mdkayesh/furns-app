import React from "react";
import Button from "../Button";
import SectionHero from "../SectionHero";
import UseDocumentTitle from "../UseDocumentTitle";

const Contact = () => {
  UseDocumentTitle("Contact");

  return (
    <div className="contact">
      <SectionHero heading={"Contact"} />
      <div className="map">
        <div className="container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2435159001507!2d90.46129904877017!3d23.667247997793154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0b34bf18cb3%3A0xeae487b820968fd4!2sNoyamati%20Jame%20Moshjid!5e0!3m2!1sen!2sbd!4v1672074102852!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="container">
        <div className="row gap-1">
          <div className="col-12 col-lg-4">
            <div className="contact-info">
              <h2>Contact Info</h2>
              <div className="info-item">
                <h3>Phone:</h3>
                <div>
                  <p>
                    <a href="tel:+012 345 678 102">+012 345 678 102</a>
                  </p>
                  <p>
                    <a href="tel:+012 345 678 102">+012 345 678 102</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <h3>Email:</h3>
                <div>
                  <p>
                    <a href="mailto:your@email.here">your@email.here</a>
                  </p>
                  <p>
                    <a href="mailto:email@here.com">email@here.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <h3>Address:</h3>
                <div>
                  <p>Address goes here,</p>
                  <p>street, Crossroad 123.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="form">
              <h2>Get In Touch</h2>
              <form action="">
                <div className="row">
                  <div className="col-12">
                    <div className="row gap-1">
                      <div className="col-12 col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="fname" id="fname" />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="massage">Massage</label>
                    <textarea
                      name="massage"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <Button type={"orange"}>send massage</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

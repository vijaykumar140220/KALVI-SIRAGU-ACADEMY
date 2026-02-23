import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_qbkh22a",
      "template_08yhz6q",
      form.current,
      "w50Cm76NNKzuboV9V"
    )
    .then((result) => {
        console.log("SUCCESS!", result.text);
        setSuccess(true);
        form.current.reset();
    })
    .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Check console.");
    });
};

  return (
    <div className="contact-wrapper">

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Us</h1>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>📍 Address</h3>
            <p>
              KALVI SIRAGU ACADEMY,<br />
              6/13, Naidu Shop St,<br />
              Opposite to Ashok Jewellers,<br />
              Radha Nagar, Chromepet,<br />
              Chennai - 600044
            </p>

            <h3>📞 Phone</h3>
            <p>+91 96295 44748</p>

            <h3>📸 Instagram</h3>
            <a
              href="https://www.instagram.com/kalvi_siragu_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              Visit Instagram Page
            </a>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input type="text" name="user_name" placeholder="Student Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
            <input type="text" name="user_phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Message / Course Interested" required />

            <button type="submit">Send Admission Enquiry</button>

            {success && <p className="success-msg">✅ Message Sent Successfully!</p>}
          </motion.form>
        </div>

        {/* GOOGLE MAP */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Kalvi Siragu Academy Location"
            src="https://www.google.com/maps?q=KALVI+SIRAGU+ACADEMY,+6/13,+Naidu+Shop+St,+Chromepet,+Chennai,+600044&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

      </motion.div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919629544748"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </div>
  );
}

export default Contact;

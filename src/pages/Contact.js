import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const contactVideoUrl =
    "https://www.youtube.com/embed/HbH-k6Us7UQ?autoplay=1&mute=1&loop=1&playlist=HbH-k6Us7UQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qbkh22a",
        "template_08yhz6q",
        form.current,
        "w50Cm76NNKzuboV9V"
      )
      .then(() => {
        toast.success("Admission Enquiry Sent Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });

        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });
      });
  };

  return (
    <div className="contact-wrapper">
      <iframe
        className="contact-video"
        src={contactVideoUrl}
        title="Kalvi Siragu Academy contact background video"
        allow="autoplay; encrypted-media; picture-in-picture"
        aria-hidden="true"
      />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Us</h1>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Address</h3>
            <p>
              KALVI SIRAGU ACADEMY,
              <br />
              6/13, Naidu Shop St,
              <br />
              Opposite to Ashok Jewellers,
              <br />
              Radha Nagar, Chromepet,
              <br />
              Chennai - 600044
            </p>

            <h3>Phone</h3>
            <p>+91 63818 83760</p>
            <p>+91 86374 74173</p>

            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/kalvi_siragu_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              Visit Instagram Page
            </a>
          </motion.div>

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
          </motion.form>
        </div>

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
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <a
        href="https://wa.me/916381883760"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>

      <ToastContainer />
    </div>
  );
}

export default Contact;

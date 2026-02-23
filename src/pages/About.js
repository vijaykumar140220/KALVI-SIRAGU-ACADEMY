import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About KALVI SIRAGU ACADEMY</h1>

        <p>
          We provide quality education for school and college students.
          Our mission is to empower young minds and help them achieve
          academic excellence.
        </p>

        <div className="about-features">
          <div>✔ Experienced Faculty</div>
          <div>✔ Small Batch Size</div>
          <div>✔ Individual Attention</div>
          <div>✔ Exam Preparation Support</div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

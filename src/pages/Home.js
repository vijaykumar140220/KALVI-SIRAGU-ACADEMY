import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo1.png";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [showFounder, setShowFounder] = useState(false);

  return (
    <div className="home-page">
      <section className="hero-section">

        {!showFounder ? (
          /* ================= NORMAL HERO ================= */
          <div className="hero-container">

            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img src={logo} alt="Academy Logo" className="hero-logo" />
              <h1>KALVI SIRAGU ACADEMY</h1>
              <p>Empowering Minds. Building Futures.</p>

              <button
                className="explore-btn"
                onClick={() => navigate("/courses")}
              >
                Explore Courses
              </button>

              <button
                className="founder-btn"
                onClick={() => setShowFounder(true)}
              >
                Founder’s Message
              </button>
            </motion.div>

          </div>
        ) : (
          /* ================= FOUNDER CENTER MODE ================= */
          <motion.div
            className="founder-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Founder’s Message</h2>

            <p><strong>Dear Students and Parents,</strong></p>

            <p>
              Education is not just about scoring marks — it is about building
              confidence, discipline, and a strong foundation for life.
            </p>

            <p>
              At Kalvi Siragu Academy, we focus on conceptual clarity,
              individual attention, and consistent practice to help students
              achieve their full potential.
            </p>

            <p>
              Let us work together to build a bright and successful future.
            </p>

            <p className="founder-sign">
              <strong>MR. A NAVEENKUMAR</strong><br />
              Founder
            </p>

            <button
              className="back-btn"
              onClick={() => setShowFounder(false)}
            >
              Back to Home
            </button>
          </motion.div>
        )}

      </section>
    </div>
  );
}

export default Home;
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo1.png";
import "./Home.css";

function Home() {
  const [showFounder, setShowFounder] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        {!showFounder ? (
          <div className="hero-container">
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={logo} alt="Academy Logo" className="hero-logo" />
              <h1>KALVI SIRAGU ACADEMY</h1>
              <p>EDUCATION IS THE WING OF LIFE</p>

              <div className="hero-buttons">
                {/* Changed from navigate to scrollToSection */}
                <button
                  className="explore-btn"
                  onClick={() => scrollToSection("courses")}
                >
                  Explore Courses
                </button>

                <button
                  className="faculty-btn"
                  onClick={() => scrollToSection("faculty")}
                >
                  Our Faculty
                </button>

                <button
                  className="founder-btn"
                  onClick={() => setShowFounder(true)}
                >
                  Founder’s Message
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
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
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo1.png";
import "./Home.css";

function Home() {
  const [showFounder, setShowFounder] = useState(false);
  const heroVideoUrl =
    "https://www.youtube-nocookie.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&start=1";

  const buttonVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <iframe
          className="hero-video"
          src={heroVideoUrl}
          title="Kalvi Siragu Academy background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-hidden="true"
        />

        {!showFounder ? (
          <div className="hero-container">
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={logo}
                alt="Academy Logo"
                className="hero-logo"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.h1
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                KALVI SIRAGU ACADEMY
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                EDUCATION IS THE WING OF LIFE
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.6 }
                  }
                }}
              >
                <motion.button
                  className="explore-btn"
                  onClick={() => scrollToSection("courses")}
                  variants={buttonVariants}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore Courses
                </motion.button>

                <motion.button
                  className="faculty-btn"
                  onClick={() => scrollToSection("faculty")}
                  variants={buttonVariants}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Our Faculty
                </motion.button>

                <motion.button
                  className="founder-btn"
                  onClick={() => setShowFounder(true)}
                  variants={buttonVariants}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Founder's Message
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="founder-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Founder's Message</h2>
            <p>
              <strong>Dear Students and Parents,</strong>
            </p>
            <p>
              Education is not just about scoring marks - it is about building
              confidence, discipline, and a strong foundation for life.
            </p>
            <p>
              At Kalvi Siragu Academy, we focus on conceptual clarity,
              individual attention, and consistent practice to help students
              achieve their full potential.
            </p>
            <p className="founder-sign">
              <strong>MR. A NAVEENKUMAR</strong>
              <br />
              Founder
            </p>
            <motion.button
              className="back-btn"
              onClick={() => setShowFounder(false)}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default Home;

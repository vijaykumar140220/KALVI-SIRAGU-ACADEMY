import { motion } from "framer-motion";
import "./About.css";

function About() {
  const aboutVideoUrl =
    "https://www.youtube.com/embed/P90X9xxm1gc?autoplay=1&mute=1&loop=1&playlist=P90X9xxm1gc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1";

  return (
    <div className="about-page">
      <section className="hero">
        <iframe
          className="about-video"
          src={aboutVideoUrl}
          title="Kalvi Siragu Academy about background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          aria-hidden="true"
        />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="highlight">Kalvi Siragu Academy</span>
          </h1>

          <p>
            Empowering students from
            <span className="highlight-text"> 6th to 12th (CBSE & State Board) </span>
            with strong fundamentals, confidence, and academic excellence.
          </p>
        </motion.div>
      </section>

      <section className="section light">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Kalvi Siragu Academy is a dedicated tuition centre committed to
            providing strong academic support through expert teaching methods,
            personal attention, and continuous motivation.
          </p>
          <p>
            We don't just focus on marks - we build discipline, conceptual
            clarity, and long-term academic success.
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Our Vision</h2>
              <p>
                To empower students with knowledge, confidence, and the skills
                needed to achieve academic excellence and build a successful future.
              </p>
            </div>

            <div>
              <h2>Our Mission</h2>
              <ul>
                <li>Quality education in supportive environment</li>
                <li>Strong fundamentals in all major subjects</li>
                <li>Small batch personal attention</li>
                <li>Regular tests & progress tracking</li>
                <li>Positive and motivating atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

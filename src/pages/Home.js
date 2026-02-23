import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Kalvi siragu academy logo.jpeg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <motion.div
        className="home-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logo} alt="Academy Logo" className="home-logo" />

        <h1>KALVI SIRAGU ACADEMY</h1>
        <p>Empowering Minds. Building Futures.</p>

        <button 
          className="explore-btn"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>
      </motion.div>
    </div>
  );
}

export default Home;

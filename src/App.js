import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";

/* MAIN SCROLL PAGE */
function MainPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="faculty">
        <Faculty />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <Navbar toggleMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <Routes>
        {/* SINGLE PAGE SCROLL ROUTE */}
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
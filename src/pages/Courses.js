import { motion } from "framer-motion";
import "./Courses.css";

function Courses() {
  const coursesVideoUrl =
    "https://www.youtube-nocookie.com/embed/PPLYuUtshuU?autoplay=1&mute=1&loop=1&playlist=PPLYuUtshuU&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&start=1";

  const courseList = [
    "6th - 12th : All Subjects (State Board, CBSE)",
    "11th - 12th : Mathematics & Computer Science (CBSE)",
    "UG & PG : Mathematics & Computer Science",
    "Engineering : Mathematics & Computer Science",
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="courses-wrapper">
      <iframe
        className="courses-video"
        src={coursesVideoUrl}
        title="Kalvi Siragu Academy courses background video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        aria-hidden="true"
      />

      <motion.div
        className="courses-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="courses-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          {/* <span className="courses-kicker">Academic Programs</span> */}
          <h1>Courses Offered</h1>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {courseList.map((course, index) => (
            <motion.div
              key={index}
              className="course-card"
              variants={cardVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="course-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {course}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Courses;

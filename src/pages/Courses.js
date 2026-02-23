import { motion } from "framer-motion";
import "./Courses.css";

function Courses() {
  const courseList = [
    "Class 1–5 : All Subjects",
    "Class 6–10 : All Subjects",
    "Class 11–12 : Maths & Accounts",
    "UG & PG : Computer Science"
  ];

  return (
    <div className="courses-wrapper">
      <motion.div
        className="courses-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Courses Offered</h1>

        <div className="courses-grid">
          {courseList.map((course, index) => (
            <motion.div
              key={index}
              className="course-card"
              whileHover={{ scale: 1.05 }}
            >
              {course}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Courses;

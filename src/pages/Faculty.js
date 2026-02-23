import { motion } from "framer-motion";
import "./Faculty.css";

function Faculty() {
  const facultyList = [
    {
      name: "Mr. Naveen Kumar",
      qualification: "M.Sc., B.Ed., PGDCA",
      subject: "Mathematics & Computer Science"
    },
    {
      name: "Ms. Hema",
      qualification: "M.Sc., B.Ed.",
      subject: "Science"
    },
    {
      name: "Mr. Arivazhagan",
      qualification: "M.Sc., B.Ed.",
      subject: "Physics"
    },
    {
      name: "Ms. Jebarani",
      qualification: "M.Sc., B.Ed.",
      subject: "Chemistry"
    }
  ];

  return (
    <div className="faculty-wrapper">
      <motion.div
        className="faculty-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Faculty</h1>

        <div className="faculty-grid">
          {facultyList.map((teacher, index) => (
            <motion.div
              key={index}
              className="faculty-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="faculty-avatar">
                {teacher.name.charAt(0)}
              </div>

              <h3>{teacher.name}</h3>
              <p>{teacher.qualification}</p>
              <span>{teacher.subject}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Faculty;

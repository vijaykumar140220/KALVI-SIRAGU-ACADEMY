import { motion } from "framer-motion";
import "./Faculty.css";

function Faculty() {
  const facultyList = [
    {
      name: "Mr. Naveen Kumar",
      qualification: "M.Sc., B.Ed., PGDCA",
      subject: "MATHEMATICS, COMPUTER SCIENCE AND ENGLISH"
    },
    {
      name: "Ms. Jebarani",
      qualification: "M.Sc., B.Ed.",
      subject: "BUSINESS MATHEMATICS, BIOLOGY AND CHEMISTRY"
    },
    {
      name: "Ms. Keerthana",
      qualification: "M.Com., B.Ed.",
      subject: "ACCOUNTANCY AND COMMERCE"
    },
    // {
    //   name: "Mr. Sasitharan",
    //   qualification: "M.Sc., B.Ed.",
    //   subject: "MATHEMATICS AND CHEMISTRY"
    // },
    {
      name: "Ms. Jayaseeli",
      qualification: "B.Sc., B.A., B.Ed.",
      subject: "TAMIL AND MATHEMATICS"
    },
    {
      name: "Mr. K. Vimal",
      qualification: "M.Sc., B.Ed.",
      subject: "MATHEMATICS AND PHYSICS"
    }
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 34, rotateX: 8 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  return (
    <div className="faculty-wrapper">
      <motion.div
        className="faculty-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Faculty</h1>

        <motion.div
          className="faculty-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {facultyList.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              className="faculty-card"
              variants={cardVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="faculty-avatar"
                animate={{ boxShadow: ["0 0 0 rgba(255, 215, 0, 0)", "0 0 28px rgba(255, 215, 0, 0.38)", "0 0 0 rgba(255, 215, 0, 0)"] }}
                transition={{
                  duration: 2.6,
                  delay: index * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {teacher.name.replace(/^(Mr\.|Ms\.)\s*/i, "").charAt(0)}
              </motion.div>

              <h3>{teacher.name}</h3>
              <p>{teacher.qualification}</p>
              <span>{teacher.subject}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faculty;

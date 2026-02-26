import { motion } from "framer-motion";
import "./Schedule.css";

function Schedule() {
  return (
    <div className="schedule-wrapper">
      <div className="overlay"></div>

      <motion.div
        className="schedule-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Class Schedule</h1>

        <div className="schedule-card">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday – Saturday</td>
                <td>5:00 PM – 8:30 PM</td>
              </tr>
              <tr className="sunday">
                <td>Sunday</td>
                <td>10:00 AM – 2:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Schedule;
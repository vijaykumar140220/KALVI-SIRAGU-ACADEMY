import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Admission() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Admission Form Submitted Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container py-5">
      <h2>Admission Form</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Student Name" className="form-control mb-3" required />
        <input type="text" name="standard" placeholder="Standard" className="form-control mb-3" required />
        <input type="tel" name="phone" placeholder="Phone Number" className="form-control mb-3" required />
        <textarea name="message" placeholder="Message" className="form-control mb-3" required></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Admission;

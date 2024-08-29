import { React, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/footer.css";
import "../styles/contact.css";

export default function Contact() {
  const { changeTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
    setCaptchaVerified(true);
    setTimeout(() => {
      setShowCaptcha(false);
    }, 5000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!captchaVerified) {
      setShowCaptcha(true);
      return;
    }

    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          "g-recaptcha-response": recaptchaToken,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        alert("Message sent successfully!");

        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken("");
        setCaptchaVerified(false);
        setSending(false);
      })
      .catch((err) => {
        alert("Failed to send message.");
        setSending(false);
      });
  };

  return (
    <div className="contactContainer">
      <div className="contactContent">
        <div className="formContainer">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <input
              className={`buttonContact ${changeTheme}`}
              type="submit"
              value={sending ? "Sending..." : "Send message"}
              disabled={sending}
            />
          </form>
        </div>
      </div>
      {/* CAPTCHA Popup */}
      {showCaptcha && (
        <div className="captchaPopup">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptcha}
            onExpired={() => setCaptchaVerified(false)}
          />
          <button onClick={() => setShowCaptcha(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

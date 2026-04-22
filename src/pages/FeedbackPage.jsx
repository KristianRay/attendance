import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FeedbackPage.css";

export default function FeedbackPage() {
  return (
    <div className="feedback-page">
      <Navbar />

      <div className="feedback-content">

        <div className="feedback-header">
          <div className="feedback-left">
            <p className="feedback-label">We'd love to hear from you</p>
            <h1>FEEDBACK</h1>
            <p className="feedback-desc">
              Got something to say? Whether it's a suggestion, a complaint, or just a shoutout —
              we read every response. Help us make Attendance a better place for everyone.
            </p>
          </div>
        </div>

        <hr className="feedback-divider" />

        <div className="feedback-form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSefORvhTEwxWDAaHLth1376R8U7OGgkKWNLSFqC9XUeb30lvA/formResponse"
            className="feedback-iframe"
            title="Feedback Form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

      </div>

      <hr className="feedback-divider" />
      <Footer />
    </div>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo3d from "../assets/logo3d.png";
import "./RulesPage.css";

export default function RulesPage() {
  return (
    <div className="rules-page">
      <Navbar />

      <div className="rules-bg" style={{ backgroundImage: `url(${logo3d})` }} />
      <div className="rules-content">
        <p className="rules-label">The Guidelines</p>
        <h1>RULES</h1>

        <hr className="rules-divider" />

        <p className="rules-body">
          Welcome to our community! To keep this space fun, safe, and enjoyable
          for everyone, we ask all members to follow a few basic rules. Please be
          respectful to others, avoid toxic behavior, and do not spam or post
          inappropriate content. Treat everyone with kindness and follow
          Discord's Terms of Service at all times. Our goal is to maintain a
          friendly and active community where everyone can feel comfortable and
          have a good time. Breaking the rules may result in warnings or removal
          from the server depending on the situation.
        </p>

        <span className="rules-signature">- ATTENDANCE</span>
      </div>

      <hr className="rules-divider-bottom" />

      <Footer />
    </div>
  );
}

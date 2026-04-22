import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import notFoundImg from "../assets/404.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <Navbar />
      <div className="notfound-bg" style={{ backgroundImage: `url(${notFoundImg})` }} />
      <div className="notfound-content">
        <p className="notfound-label">Oops!</p>
        <h1>PAGE NOT FOUND</h1>
        <hr className="notfound-divider" />
        <p className="notfound-desc">The page you're looking for doesn't exist or has been moved.</p>
        <div className="notfound-actions">
          <Link to="/" className="notfound-home">GO HOME</Link>
          <a
            href="https://discord.gg/AdZPre85Jx"
            target="_blank"
            rel="noopener noreferrer"
            className="notfound-discord"
          >
            <FaDiscord size={20} /> JOIN DISCORD
          </a>
        </div>
      </div>
      <hr className="notfound-divider-bottom" />
      <Footer />
    </div>
  );
}

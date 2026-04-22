import { FaDiscord } from "react-icons/fa";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 ATTENDANCE</p>
      <a
        href="https://discord.gg/AdZPre85Jx"
        target="_blank"
        rel="noopener noreferrer"
        className="discord"
      >
        <FaDiscord size={28} />
      </a>
    </footer>
  );
}

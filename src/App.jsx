import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import competitiveImg from "./assets/fps.webp";
import fpsImg from "./assets/competitive.jpg";
const backdropVideo = "https://res.cloudinary.com/dcbhg0ztu/video/upload/v1776827251/backdrop_iptusq.mp4";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <div className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen"
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={backdropVideo} type="video/mp4" />
        </video>
        <div className="hero-fade" />
        {/* HERO */}
        <section className="hero">
          <h1>
            WHERE FUN <br />
            STARTS <span>HERE</span>
          </h1>
        </section>
      </div>

      {/* GRID */}
      <section className="grid">
        <div className="card">
          <div className="card-inner" style={{backgroundImage: `url(${competitiveImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <p>Competitive Gaming</p>
        </div>

        <div className="card">
          <div className="card-inner" />
          <p>Hangouts</p>
        </div>

        <div className="card">
          <div className="card-inner" style={{backgroundImage: `url(${fpsImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <p>Fps Gaming</p>
        </div>

        <div className="card">
          <div className="card-inner" style={{backgroundImage: `url(${fpsImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <p>Fps Gaming</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
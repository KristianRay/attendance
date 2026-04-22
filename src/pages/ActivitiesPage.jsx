import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ActivitiesPage.css";

const activities = [
  {
    title: "GAMING",
    video: "https://res.cloudinary.com/dcbhg0ztu/video/upload/v1776826804/activity_gaming_gvh04n.mp4",
    points: [
      "Popular games your server plays",
      "Squad matchmaking",
      "Competitive & casual play"
    ],
    align: "left"
  },
  {
    title: "VOICE CHATS",
    video: "https://res.cloudinary.com/dcbhg0ztu/video/upload/v1776770593/activity_call_gkk1h8.mp4",
    points: [
      "Chill hangouts",
      "Late-night talks",
      "Study/work sessions"
    ],
    align: "right"
  },
  {
    title: "FUN",
    video: "https://res.cloudinary.com/dcbhg0ztu/video/upload/v1776770596/activity_fun_z6dbo1.mp4",
    points: [
      "Meme sharing",
      "Bots & mini-games",
      "Random conversations"
    ],
    align: "left"
  }
];

export default function ActivitiesPage() {
  return (
    <div className="activities-page">
      <Navbar />

      <div className="activities-content">
        {activities.map((item, i) => (
          <div key={i} className={`activity-row ${item.align === "right" ? "reverse" : ""}`}>
            <div className="activity-box">
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="activity-text">
              <h2>{item.title}</h2>
              <ul>
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

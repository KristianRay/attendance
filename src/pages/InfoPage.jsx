import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo3d from "../assets/logo3d.png";
import { FaDiscord } from "react-icons/fa";
import modgeImg from "../assets/members/modge.png";
import mjImg from "../assets/members/mj.png";
import yeahgImg from "../assets/members/yeahg.png";
import jeahImg from "../assets/members/jeah.png";
import zirkImg from "../assets/members/zirk.png";
import "./InfoPage.css";

const members = [
  {
    name: "MODGE",
    img: modgeImg,
    desc: "Modge is a graphic designer with a background in Information Technology, blending technical skills with creativity. Proficient in Adobe Illustrator, Photoshop, and Canva, Modge creates engaging visuals through branding and storytelling. Passionate about gaming, Modge draws inspiration from immersive design and user experience to craft dynamic and memorable work, while continuously learning and growing in the creative field.",
    discord: "https://discord.com/users/749277821163012177"
  },
  {
    name: "CHIVS",
    img: jeahImg,
    desc: "Friendly developer and digital creator...",
    discord: "https://discord.com/users/886990348625268738"
  },
  {
    name: "YEAHG",
    img: yeahgImg,
    desc: "Developer and digital creator focused on UI...",
    discord: "https://discord.com/users/859410635431346196"
  },
  {
    name: "KAZUMI",
    img: mjImg,
    desc: "Web developer and designer...",
    discord: "https://discord.com/users/838351905846853663"
  },
  {
    name: "ZIRK",
    img: zirkImg,
    desc: "Zirk is an Information Technology graduate with experience in full-stack web development and IT support. He successfully led the development of the 'iVet' capstone platform, showcasing strong skills in backend integration, UI/UX design, and digital content management. A passionate gamer, Zirk brings creativity, problem-solving, and a keen eye for user experience into his work. Interested in Web3 technologies, he is eager to grow as an entry-level software developer or IT analyst.",
    discord: "https://discord.com/users/747803789901168770"
  }
];

export default function InfoPage() {
  return (
    <div className="info-page">
      <Navbar />

      {/* HERO */}
      <section className="info-hero">
        <div className="info-left">
          <p className="tagline">Play · Fun · Made For Communities</p>
          <a href="https://discord.com/invite/ngZ7F84N" target="_blank" rel="noopener noreferrer" className="discord-link">
            → https://discord.com/invite/ngZ7F84N <FaDiscord size={32} />
          </a>
        </div>
        <div className="info-center">
          <img src={logo3d} alt="logo 3d" className="logo3d" />
        </div>
        <div className="info-right">
          <h1>ATTENDANCE</h1>
          <p>
            Attendance is a Discord Community Server founded by a group of 5 friends who wanted to build a fun and welcoming community. Our Discord Attendance server focuses on friendship, teamwork, and having a great time together. Whether you're here to grind games or just chill, you're always welcome.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* MEMBERS */}
      <section className="members">
        <h2>FOUNDING MEMBERS</h2>
        {members.map((m, i) => (
          <div className="member" key={i}>
            <div className="member-left">
              <h3>{m.name}</h3>
              <a href={m.discord} target="_blank" rel="noopener noreferrer" className="member-discord">
                <FaDiscord size={24} />
              </a>
            </div>
            <div className="member-center">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="member-right">
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="divider" />

      <Footer />
    </div>
  );
}

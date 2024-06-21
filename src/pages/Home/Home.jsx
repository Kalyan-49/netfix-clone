import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="hero-banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} className="hero-title" alt="" />
          <p className="hero-img-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            vel corrupti fugit quibusdam vero illo quisquam aspernatur enim.
            Tempore.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>{" "}
      <div className="more-cards">
        <TitleCard title={"Top picks for you"} catageory={"top_rated"} />
        <TitleCard title={"Upcoming"} catageory={"upcoming"} />
        <TitleCard title={"only on Netflix"} catageory={"popular"} />
        <TitleCard title={"Blockbuster Movies"} catageory={"now_playing"} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import home from "../../assets/home.png";
import game from "../../assets/game_icon.png";
import sport from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import music from "../../assets/music.png";
import news from "../../assets/news.png";
import { useCategory } from "../Category/CategoryContext";
export const Sidebar = ({ isVisible }) => {
  const { category, updateCategory } = useCategory();
  const sendValueToParent = (value) => {
    updateCategory(value);
  };
  return (
    <section className={`containerSidebar ${isVisible ? "visible" : "hidden"}`}>
      <div className="sidebar">
        <div className="sub-first">
          <div
            className={`sidelink ${category === 0 ? "active" : ""}`}
            onClick={() => sendValueToParent(0)}
          >
            <img src={home} alt="home logo" />
            <p>Home Page</p>
          </div>

          <div
            className={`sidelink ${category === 17 ? "active" : ""}`}
            onClick={() => sendValueToParent(17)}
          >
            <img src={sport} alt="Sport" />
            <p>Sport</p>
          </div>

          <div
            className={`sidelink ${category === 20 ? "active" : ""}`}
            onClick={() => sendValueToParent(20)}
          >
            <img src={game} alt="Game logo" />
            <p>Game</p>
          </div>
          <div
            className={`sidelink ${category === 10 ? "active" : ""}`}
            onClick={() => sendValueToParent(10)}
          >
            <img src={music} alt="Music" />
            <p>Music</p>
          </div>
          <div
            className={`sidelink ${category === 24 ? "active" : ""}`}
            onClick={() => sendValueToParent(24)}
          >
            <img src={entertainment} alt="Entertainment" />
            <p>Entertainment</p>
          </div>
          <div
            className={`sidelink ${category === 25 ? "active" : ""}`}
            onClick={() => sendValueToParent(25)}
          >
            <img src={news} alt="News logo" />
            <p>News</p>
          </div>
        </div>
        <hr />
        <div className="sub-second">
          <h3>Explore</h3>
          <ul>
            <li>
              <img
                src="https://www.youtube.com/img/trending/avatar/trending_animated.webp"
                alt="Trending logo"
              />
              <Link to="#">Trending</Link>
            </li>
            <li>
              <img
                src="https://yt3.googleusercontent.com/dRsE1VJ2AD0qTmoOBqUKhCUycjhLnKICM34uOlDMfRObCdAnFCWFnBWu13PqjIUB2QWbh3r8tSM=s176-c-k-c0x00ffffff-no-rj-mo"
                alt="Music logo"
                className="music_icon"
              />
              <Link to="#">Music</Link>
            </li>
            <li>
              <img
                src="https://yt3.googleusercontent.com/W3NK7iCqT2iLUHANRHzP9MXNffwxPTcerFdGUTynpbL4mKzHhFFWIwGT6XMYR14vhgB1QUJh=s120-c-c0x00ffffff-no-rwa"
                alt="Learing Logo"
              />
              <Link to="#">Learning</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="sub-third">
          <h3>Subscriptions</h3>
          <div className="sub_list">
            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s160-c-k-c0x00ffffff-no-rj"
                alt="Mr.Bease logo"
              />
              <p>Mr.Beast</p>
            </div>
            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/f8jPpusFEVRhgtmHTdjhlob1yvf3KV25qyrk4rikKveEYCWrgzeDw7uqTXrJNeGPAbC43tFO=s160-c-k-c0x00ffffff-no-rj"
                alt="Jimmy Profile pic"
              />
              <p>Jimmy</p>
            </div>
            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_koIFcCOrvh0KThLNOiazAIDu6hcs8bjkGNwe1f6A_OYm8=s160-c-k-c0x00ffffff-no-rj"
                alt="TED logo"
              />
              <p>TED</p>
            </div>

            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_kA7q7nnAwznNB42cH6G8eUqBhaoks2DNMvG4NgnDIMANE=s160-c-k-c0x00ffffff-no-rj"
                alt="The Rock"
              />
              <p>The Rock</p>
            </div>

            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/tG3OdIKwfEVTF_nxmGrl8ey9UYzBja1l2mcx_B4dWsOd-5fVGYXHIN90wCJGC2alZG6NoNp9Vw=s160-c-k-c0x00ffffff-no-rj"
                alt="Tim Dessaint profile pic"
              />
              <p>Tim Dessaint</p>
            </div>

            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/95m-_qn7I5FW9Q25h2v7Ik7DWdCoT2nhFMsqnQvZ4Kx7WmYUDCBlZuGlCxPGStoVCTptpZOk5w=s160-c-k-c0x00ffffff-no-rj"
                alt="Steven He profile pic"
              />
              <p>Steve He</p>
            </div>

            <div className="subscriber">
              <img
                src="https://yt3.googleusercontent.com/tku7HTIcyTe4K4xSOrQp9PvhKZ47KNZn-Q3t54Pwkyz6UrXEdVMKlvrlRANZLJdw0tl4XL5y=s160-c-k-c0x00ffffff-no-rj"
                alt="Comedy in the city logo"
              />
              <p>Comedy in the citys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

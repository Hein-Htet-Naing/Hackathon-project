import React, { useState } from "react";
import "./Nav.css";
import menu_icon from "../../assets/icons/menu_icon.svg";
import search_icon from "../../assets/icons/search_icon.svg";
import logo_icon from "../../assets/icons/logo.png";
import create from "../../assets/icons/create-v.png";
import more_icon from "../../assets/icons/more_icon.svg";
import notification from "../../assets/icons/notification.svg";
import profile_icon from "../../assets/icons/profile_icon.svg";
import { Sidebar } from "../Sidebar/Sidebar";
import { useVideo } from "../Category/SearchVideo";
import { Link } from "react-router-dom";

export const Navbars = () => {
  const { sVideo, updateSVideo } = useVideo();
  const [search, setSearch] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex-div">
        <div className="nav-left">
          <button type="button" onClick={toggleSidebar}>
            <img className="menu" src={menu_icon} alt="Menu Icon" />
          </button>
          <Link to={"/"}>
            <img className="logo" src={logo_icon} alt="Logo Icon" />{" "}
          </Link>
        </div>

        <div className="nav-middle">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <div className="sIcon">
            <img
              src={search_icon}
              className="search-icon"
              alt="Search Icon"
              onClick={() => updateSVideo(search)}
            />
          </div>
        </div>

        <div className="nav-right">
          <img src={create} alt="Upload icon" />
          <img src={more_icon} alt="More icon" />
          <img src={notification} alt="Notification icon" />
          <img src={profile_icon} className="profile_icon" alt="Profile icon" />
        </div>
      </nav>

      <Sidebar isVisible={isSidebarVisible} />
    </>
  );
};

import React, { useState } from "react";
import "./Home.css";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { Feed } from "../../Component/Feed/Feed";
import Videos from "../Videos/Videos";
import { useCategory } from "../../Component/Category/CategoryContext";
const HomePage = () => {
  const [ctg, setctg] = useState(null);
//Please start the port with 5174, otherwise API will not working
  return (
    <>
      <Sidebar />
      <Feed />
    </>
  );
};

export default HomePage;

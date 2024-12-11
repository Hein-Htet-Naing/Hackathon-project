import { Navbars } from "./Component/Nav/Navbars";
import { Outlet } from "react-router-dom";
import { Feed } from "./Component/Feed/Feed";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import { VideoProvider } from "./Component/Category/SearchVideo";
function App() {
  return (
    <>
      <VideoProvider>
        <Navbars />
        <Outlet />
      </VideoProvider>
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CategoryProvider } from "./Component/Category/CategoryContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import Video from "./Pages/Videos/Videos.jsx";
import { Feed } from "./Component/Feed/Feed.jsx";
import { Navbars } from "./Component/Nav/Navbars.jsx";
import { Recommended } from "./Component/Rcommended/Recommended.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/Feed",
        element: <Feed />,
      },
      {
        path: "/video/:categoryId/:videoId",
        element: <Video />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <RouterProvider router={router} />
    </CategoryProvider>
  </StrictMode>
);

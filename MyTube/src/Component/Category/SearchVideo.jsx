import React, { createContext, useContext, useState } from "react";

// Create the Context
const searchVideo = createContext();

// Create a custom hook for easy access to the context
export const useVideo = () => useContext(searchVideo);

// Create a provider component
export const VideoProvider = ({ children }) => {
  const [sVideo, setsVideo] = useState("");

  const updateSVideo = (value) => {
    setsVideo(value);
    console.log("Your Video", value); // Debug log
  };

  return (
    <searchVideo.Provider value={{ sVideo, updateSVideo }}>
      {children}
    </searchVideo.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

// Create the Context
const CategoryContext = createContext();

// Create a custom hook for easy access to the context
export const useCategory = () => useContext(CategoryContext);

// Create a provider component
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(0);

  const updateCategory = (value) => {
    setCategory(value);
    console.log("Category updated:", value); // Debug log
  };

  return (
    <CategoryContext.Provider value={{ category, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

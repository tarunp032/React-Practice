import { useState, useEffect } from "react";

const useViewMode = () => {
  const [view, setView] = useState(() => {
    return localStorage.getItem("viewMode") || "card"; 
  });

  useEffect(() => {
    localStorage.setItem("viewMode", view);
  }, [view]);

  const toggleView = () => {
    setView((prev) => (prev === "table" ? "card" : "table"));
  };

  return { view, toggleView };
};

export default useViewMode;
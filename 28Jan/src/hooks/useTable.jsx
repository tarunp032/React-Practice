import { useState } from "react";

const useTable = () => {
  const [view, setView] = useState("card"); 

  const toggleView = () => {
    setView(view === "card" ? "table" : "card");
  };

  return { view, toggleView };
};

export default useTable;

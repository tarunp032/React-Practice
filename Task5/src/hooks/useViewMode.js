import React, { useState } from 'react'

const useViewMode = () => {
  const [view, setView] = useState("table");

  const toggleView = () => {
    setView((prev) => (prev === "table" ? "card" : "table"))
  }

  return {view, toggleView}
};

export default useViewMode

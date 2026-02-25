import React, { useEffect, useState } from 'react'

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if(darkMode) {
      document.body.className = "dark";
      localStorage.setItem("theme", "dark");
    }else{
      document.body.className = "light";
      localStorage.setItem("theme","light")
    }
  },[darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)
  return {darkMode, toggleTheme}
}

export default useTheme

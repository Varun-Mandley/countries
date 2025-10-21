import { useState } from "react";
import CountrycarddetailShimmer from "./components/CountrycarddetailShimmer";
import CountrycardShimmer from "./components/CountrycardShimmer";
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [isDark , setIsDark] = useState(JSON.parse(localStorage.getItem("isdarkmode")));
  return (
    <ThemeContext.Provider value={[isDark , setIsDark]}>
      <Header  />
      <Outlet />  
    
    </ThemeContext.Provider>
  )
}

export default App

import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import MainContent from "./MainContent.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(document.documentElement.classList); // ดีบักเพื่อดูคลาส
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
    <div className="min-h-screen bg-[#091540] bg-linear-to-t to-[#040918] dark:bg-[#EEF8F9] dark:to-[EBF2FC] text-white dark:text-black transition-all duration-300 pt-5 md:px-10 lg:px-25">
      {/* <label
        htmlFor="check"
        className="bg-gray-100 relative w-20 h-10 rounded-full cursor-pointer inline-block"
      >
        <input
          type="checkbox"
          id="check"
          className="sr-only peer"
          onChange={toggleDarkMode}
          checked={darkMode}
          aria-checked={darkMode ? "true" : "false"}
        />

        <span
          className="w-8 h-8 bg-rose-300 absolute top-1 left-1 rounded-full transition-all duration-500
        peer-checked:bg-rose-600 peer-checked:translate-x-10"
        ></span>
      </label> */}
      <div className="content-center justify-between mx-4 md:mx-8 flex bg-[#1f2535] dark:bg-[#EBF2FC] items-center rounded-xl">
      <div className="">
        <img 
        src={darkMode ? "src/images/logo.svg"  : "src/images/logo-light.svg"}
        alt="logo" className="p-1"/>
      </div>
      <div className="w-10 h-10 bg-[#2f354b] dark:bg-[#eeeeee]  flex justify-center mr-2 rounded-xl ">
        <button onClick={toggleDarkMode} className="w-full h-full rounded-xl flex justify-center items-center">
          <img 
            src={darkMode ? "src/images/icon-moon.svg"  : "src/images/icon-sun.svg"}
            alt="" 
            className="w-6 h-6"/>
        </button>
      </div>
    </div>
    
    <MainContent />
    </div>
    
    </>
    
  );
};

export default App;

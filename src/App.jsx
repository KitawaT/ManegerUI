import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";

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
    <div className="min-h-screen bg-gray-800 dark:bg-gray-50 text-white dark:text-black transition-all duration-300">
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
      <div className="content-center justify-between mt-5 mx-4 md:mx-8 flex bg-blue-400 items-center">
      <div className="">
        <img 
        src={darkMode ? "src/images/logo.svg"  : "src/images/logo-light.svg"}
        alt="logo" className="p-1"/>
      </div>
      <div className="w-10 h-10 bg-green-600 flex justify-center mr-2 rounded-xl ">
        <button onClick={toggleDarkMode} className="w-full h-full rounded-xl flex justify-center items-center">
          <img 
            src={darkMode ? "src/images/icon-sun.svg"  : "src/images/icon-moon.svg"}
            alt="" 
            className="w-6 h-6"/>
        </button>
      </div>
    </div>
    </div>
    

    </>
  );
};

export default App;

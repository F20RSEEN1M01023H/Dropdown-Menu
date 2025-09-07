import React from "react";
import Dropdown from "./Components/Dropdown";

const App = () => {
  const options = [
    "Home",
    "About Us",
    "Portfolio",
    "Projects",
    "Skills",
    "Resume",
    "Blog",
    "Contact Us",
  ];
  return (
    <div>
      <div>
        <Dropdown items={options} label="Choose an Option" />
      </div>
    </div>
  );
};

export default App;

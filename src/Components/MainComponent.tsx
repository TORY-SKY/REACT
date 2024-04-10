import React, { useState } from "react";
import HamburgerMenuIcon from "./CssFile/Header.css";

const MainComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HamburgerMenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      {/* Other content of your main component */}
    </div>
  );
};

export default MainComponent;

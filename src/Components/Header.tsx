import "./CssFile/Header.css";
const HamburgerMenuIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger-menu-icon" onClick={toggleMenu}>
      <div className={isOpen ? "line line1 open" : "line line1"}></div>
      <div className={isOpen ? "line line2 open" : "line line2"}></div>
      <div className={isOpen ? "line line3 open" : "line line3"}></div>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
    </div>
  );
};

export default HamburgerMenuIcon;

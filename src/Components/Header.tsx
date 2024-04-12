import "./CssFile/Header.css";
const HamburgerMenuIcon = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <header className="Main-header-container">
        <div className="logo">VIC</div>
        <nav className="nav-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </nav>
        <div className="right-side">
          <a href="">Hire Me</a>
          <div className="hamburger-menu-icon" onClick={toggleMenu}>
            <div className={isOpen ? "line line1 open" : "line line1"}></div>
            <div className={isOpen ? "line line2 open" : "line line2"}></div>
            <div className={isOpen ? "line line3 open" : "line line3"}></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HamburgerMenuIcon;

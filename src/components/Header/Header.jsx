import React, { useState } from "react";
import "./Header.scss";
import { RiCodeView } from "react-icons/ri";

const lists = [
  { tag: "About", id: "#about" },
  { tag: "Projects", id: "#projects" },
  { tag: "Contact Me", id: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <RiCodeView size={35} />
        </a>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {lists.map(({ tag, id }) => (
            <React.Fragment key={id}>
              <a href={id}>{tag}</a>
            </React.Fragment>
          ))}
        </div>

        <a href="#" className="btn" target="_blank">
          Resumé
        </a>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

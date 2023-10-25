import { useState } from "react";
import NavLink from "./NavLink";

const Nav = () => {
  const [isNavVisible, toggleVisibility] = useState(true);

  return (
    <>
      <nav className="w-screen py-4 sm:py-2 font-bold sticky top-0 sm:flex sm:justify-center sm:items-center bg-dark">
        <div className="flex sm:hidden mx-4 justify-end">
          <button
            id="nav-toggle-btn"
            type="button"
            onClick={() => toggleVisibility(!isNavVisible)}
            className={`flex flex-col content-between ${
              !isNavVisible && "toggle"
            }`}
          >
            <span className="icon-line" />
            <span className="icon-line" />
            <span className="icon-line" />
          </button>
        </div>
        <div
          id="nav-menu"
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-20 ${
            isNavVisible ? "" : "show-on-mobile"
          }`}
        >
          <NavLink href="#about" title="about" func={toggleVisibility} />
          <NavLink href="#projects" title="projects" func={toggleVisibility} />
          <NavLink href="#contact" title="contact" func={toggleVisibility} />
        </div>
        {!isNavVisible && (
          <div
            id="nav-closer"
            className="block sm:hidden"
            onClick={() => {
              toggleVisibility(!isNavVisible);
            }}
          />
        )}
      </nav>
    </>
  );
};

export default Nav;

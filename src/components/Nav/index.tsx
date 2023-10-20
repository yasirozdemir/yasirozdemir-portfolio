import { useState } from "react";
import NavLink from "./NavLink";

const Nav: React.FC = () => {
  const [isNavVisible, setNavVisibility] = useState(true);

  return (
    <>
      <nav className="w-screen py-2 font-bold sticky top-0 bg-primary txt-light">
        <div className="flex sm:hidden mx-4 justify-end">
          <button
            type="button"
            onClick={() => setNavVisibility(!isNavVisible)}
            className=""
          >
            Hide
          </button>
        </div>
        <div
          id="nav-menu"
          className={`bg-primary flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-20 ${
            isNavVisible ? "" : "show-on-mobile"
          }`}
        >
          <NavLink href="#about" title="about" func={setNavVisibility} />
          <NavLink href="#projects" title="projects" func={setNavVisibility} />
          <NavLink href="#contact" title="contact" func={setNavVisibility} />
        </div>
      </nav>
      {!isNavVisible && (
        <div
          id="nav-closer"
          className="block sm:hidden"
          onClick={() => {
            setNavVisibility(!isNavVisible);
          }}
        />
      )}
    </>
  );
};

export default Nav;

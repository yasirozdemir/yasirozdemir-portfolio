import { useState } from "react";

const Nav = () => {
  const [isNavVisible, setNavVisibility] = useState(true);

  function showNav() {
    setNavVisibility(!isNavVisible);
  }

  return (
    <nav className="w-screen py-2">
      <div className="flex sm:hidden mx-4 justify-end">
        <button type="button" onClick={() => showNav()} className="">
          Hide
        </button>
      </div>
      <div
        id="nav-menu"
        className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-20 ${
          isNavVisible ? "" : "show-on-mobile"
        }`}
      >
        <a href="#about" className="uppercase">
          about
        </a>
        <a href="#projects" className="uppercase">
          projects
        </a>
        <a href="#contact" className="uppercase">
          contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;

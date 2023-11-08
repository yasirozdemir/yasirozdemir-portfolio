import { useEffect, useRef, useState } from "react";
import NavLink from "../Reusables/NavLink";
import "../../styles/nav.css";
import ToggleButton from "./ToggleButton";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeNav);
    return () => {
      document.removeEventListener("click", closeNav);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-[50%] translate-x-[-50%] w-[95vw] sm:w-fit flex sm:justify-center sm:items-center z-20 h-[60px] rounded-b-lg shadow-[0_5px_50px_rgb(0,0,0,0.35)] bg-onyx text-white"
      ref={navRef}
    >
      <div className="flex sm:hidden justify-between items-center px-4 py-4 w-full">
        <a href="#landing" className="text-xl font-bold">
          Yasir O.
        </a>
        <ToggleButton isNavVisible={isNavVisible} toggleNav={toggleNav} />
      </div>
      <ul
        id="nav-menu"
        className={`flex flex-col sm:flex-row justify-center items-center sm:text-xl z-10 bg-inherit rounded-lg ${
          isNavVisible ? "show" : ""
        }`}
      >
        <NavLink title="about" toggleNav={toggleNav} />
        <NavLink title="projects" toggleNav={toggleNav} />
        <NavLink title="contact" toggleNav={toggleNav} />
      </ul>
    </nav>
  );
};

export default Nav;

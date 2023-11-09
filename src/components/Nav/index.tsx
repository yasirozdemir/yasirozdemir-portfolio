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

  const isNavSticky = true;
  // true -> sticky nav | false -> fixed nav
  const navClassList = isNavSticky
    ? "sticky"
    : "fixed left-[50%] translate-x-[-50%] w-[95vw] md:w-fit rounded-b-lg";

  const navMenuClassList = `flex flex-col md:flex-row justify-center items-center md:text-xl z-10 bg-inherit rounded-lg 
        ${isNavVisible && "show"} 
        ${isNavSticky && "mx-2"}`;

  return (
    <nav
      className={
        navClassList +
        " top-0 z-20 h-[60px] flex md:justify-center md:items-center bg-oxford_blue text-white"
      }
      ref={navRef}
    >
      <div className="flex md:hidden justify-between items-center px-4 py-4 w-full">
        <a href="#landing" className="text-xl font-bold">
          Yasir O.
        </a>
        <ToggleButton isNavVisible={isNavVisible} toggleNav={toggleNav} />
      </div>
      <ul id="nav-menu" className={navMenuClassList}>
        <NavLink title="about" toggleNav={toggleNav} />
        <NavLink title="projects" toggleNav={toggleNav} />
        <NavLink title="contact" toggleNav={toggleNav} />
      </ul>
    </nav>
  );
};

export default Nav;

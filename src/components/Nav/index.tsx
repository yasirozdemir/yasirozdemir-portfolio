import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
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
      className="sticky top-0 w-full flex sm:justify-center sm:items-center z-10 h-[60px]"
      ref={navRef}
    >
      <div className="flex sm:hidden justify-between items-center px-4 py-4 w-full">
        <a href="#landing" className="tracking-wider text-2xl font-bold">
          MYO
        </a>
        <ToggleButton isNavVisible={isNavVisible} toggleNav={toggleNav} />
      </div>
      <ul
        id="nav-menu"
        className={`flex flex-col sm:flex-row justify-center items-center sm:text-xl ${
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

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
    <nav className="sticky top-0 bg-slate-200" ref={navRef}>
      <div className="flex sm:hidden justify-between items-center px-4 py-4">
        <a href="#landing" className="tracking-widest text-2xl font-extrabold">
          MYO
        </a>
        <ToggleButton isNavVisible={isNavVisible} toggleNav={toggleNav} />
      </div>
      <ul
        id="nav-menu"
        className={`flex flex-col sm:flex-row justify-center items-center bg-slate-200 ${
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

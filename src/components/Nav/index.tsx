import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import "../../styles/nav.css";

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
        <button
          type="button"
          id="nav-toggle"
          className={isNavVisible ? "on" : "off"}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul
        id="nav-menu"
        className={`flex flex-col sm:flex-row justify-center items-center bg-slate-200 ${
          isNavVisible ? "show" : ""
        }`}
      >
        <NavLink title="about" />
        <NavLink title="projects" />
        <NavLink title="contact" />
      </ul>
    </nav>
  );
};

export default Nav;

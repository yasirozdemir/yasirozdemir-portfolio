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

  // Use the lines between line 31 and 56 to add scroll nav up funcitonality
  // copy initialNavCL and paste it to nav element as className
  // also uncomment line 6, line 9-12, and line 65-68 in nav.css

  // const initialNavCL =
  //   "fixed top-4 w-[95vw] sm:w-fit flex sm:justify-center sm:items-center z-20 h-[60px] bg-white";
  // const [navClassList, setNavClassList] = useState(initialNavCL);

  // const [scroll, setScroll] = useState({
  //   y: 0,
  //   prevY: 0,
  // });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll((prevState) => {
  //       return {
  //         y: window.scrollY,
  //         prevY: prevState.y,
  //       };
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (scroll.prevY > scroll.y) setNavClassList(initialNavCL);
  //   else if (scroll.prevY === scroll.y) return;
  //   else setNavClassList(initialNavCL + " on_scroll_up");
  // }, [scroll]);

  return (
    <nav
      className="fixed top-4 w-[95vw] sm:w-fit flex sm:justify-center sm:items-center z-20 h-[60px] bg-cerulean text-honeydew"
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
        className={`flex flex-col sm:flex-row justify-center items-center sm:text-xl z-10 ${
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

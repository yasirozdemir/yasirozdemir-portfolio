interface INavLinkProps {
  title: string;
  toggleNav: () => void;
}

const NavLink = ({ title, toggleNav }: INavLinkProps) => {
  return (
    <li className="nav_link uppercase font-bold px-12 py-4 tracking-wider">
      <a
        href={"#" + title}
        onClick={toggleNav}
        className="transition-all hover:text-[#1D3557] sm:px-8 sm:py-4"
      >
        {title}
      </a>
    </li>
  );
};

export default NavLink;

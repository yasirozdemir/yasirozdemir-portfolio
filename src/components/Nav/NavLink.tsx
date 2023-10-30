interface INavLinkProps {
  title: string;
}

const NavLink = ({ title }: INavLinkProps) => {
  return (
    <li className="nav_link uppercase font-bold px-12 py-4 tracking-wider">
      <a href={"#" + title}>{title}</a>
    </li>
  );
};

export default NavLink;

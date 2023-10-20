interface INavLinkProps {
  href: string;
  title: string;
  func: (arg: boolean) => void;
}

const NavLink = ({ href, title, func }: INavLinkProps) => {
  return (
    <a
      href={href}
      className="nav-link"
      onClick={() => {
        func(true);
      }}
    >
      {title}
    </a>
  );
};

export default NavLink;

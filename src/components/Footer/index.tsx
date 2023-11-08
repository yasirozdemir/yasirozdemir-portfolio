import { footerLinkData } from "../../data";
import FooterLink from "../Reusables/FooterLink";

const Footer = () => {
  return (
    <footer className="bg-oxford_blue text-text-white">
      <ul className="flex flex-wrap py-4 justify-center items-center gap-4">
        {footerLinkData.map((el, i) => (
          <FooterLink key={i} url={el.url} />
        ))}
      </ul>
      <p className="text-center pb-4 text-white">© 2023 Yasir Ozdemir</p>
    </footer>
  );
};

export default Footer;

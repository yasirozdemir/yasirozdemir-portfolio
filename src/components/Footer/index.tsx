import { footerLinkData } from "../../data";
import FooterLink from "../Reusables/FooterLink";

const Footer = () => {
  return (
    <footer className="bg-onyx text-honeydew">
      <ul className="flex flex-wrap py-4 justify-center items-center gap-4">
        {footerLinkData.map((el, i) => (
          <FooterLink key={i} url={el.url} />
        ))}
      </ul>
      <div className="text-center pb-4 text-[#f0f0f0]">
        © 2023 Yasir Ozdemir
      </div>
    </footer>
  );
};

export default Footer;

import { footerLinkData } from "../../data";

const Footer = () => {
  function socialNameFromUrl(url: string): string | null {
    const regex = /www\.(.*?)\.com/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  }

  return (
    <footer className="bg-oxford_blue text-text-white">
      <ul className="flex flex-wrap py-4 justify-center items-center gap-4">
        {footerLinkData.map(({ url }, i) => (
          <li key={i}>
            <a href={url} target="_blank">
              <img
                src={"/assets/svgs/" + socialNameFromUrl(url) + ".svg"}
                alt={socialNameFromUrl(url) || "icon"}
              />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center pb-4 text-[#B8BCCC]">© 2023 Yasir Ozdemir</p>
    </footer>
  );
};

export default Footer;

function socialNameFromUrl(url: string): string | null {
  const regex = /www\.(.*?)\.com/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}

interface IFooterLinkProps {
  url: string;
}

const FooterLink = ({ url }: IFooterLinkProps) => {
  return (
    <li>
      <a href={url} target="_blank">
        <img
          src={"/assets/svgs/" + socialNameFromUrl(url) + ".svg"}
          alt={socialNameFromUrl(url) || "icon"}
        />
      </a>
    </li>
  );
};

export default FooterLink;

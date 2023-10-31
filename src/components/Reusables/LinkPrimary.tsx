interface ILinkPrimary {
  href: string;
  innerText: string;
  customClasses?: string;
  blank?: boolean;
}

export const LinkPrimary = ({
  href,
  innerText,
  customClasses,
  blank,
}: ILinkPrimary) => {
  return (
    <a
      href={href}
      target={blank ? "_blank" : ""}
      type="button"
      className={`text-white text-xl font-bold bg-cyan-700 px-8 py-4 rounded-lg shadow-lg ${customClasses}`}
    >
      {innerText}
    </a>
  );
};

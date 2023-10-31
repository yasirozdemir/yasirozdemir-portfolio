interface ILinkPrimary {
  href: string;
  innerText: string;
  customClasses?: string;
}

export const LinkPrimary = ({
  href,
  innerText,
  customClasses,
}: ILinkPrimary) => {
  return (
    <a
      href={href}
      target="_blank"
      type="button"
      className={`text-white text-xl font-bold bg-cyan-700 px-8 py-4 rounded-lg shadow-lg ${customClasses}`}
    >
      {innerText}
    </a>
  );
};

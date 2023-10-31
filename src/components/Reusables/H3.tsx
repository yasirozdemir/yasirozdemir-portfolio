interface IH3Props {
  innerText: string;
  customClasses?: string;
}

export const H3 = ({ innerText, customClasses }: IH3Props) => {
  return (
    <h3 className={`font-bold text-2xl sm:text-3xl mb-6 ${customClasses}`}>
      {innerText}
    </h3>
  );
};

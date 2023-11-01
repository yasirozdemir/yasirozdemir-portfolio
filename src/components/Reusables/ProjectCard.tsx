import { H3 } from "./H3";

interface IProjectCardProps {
  title: string;
  summary: string;
  github_link: string;
  img_src: string;
}

export const ProjectCard = ({
  title,
  summary,
  github_link,
  img_src,
}: IProjectCardProps) => {
  return (
    <article className="project_card rounded-sm shadow-2xl grid grid-rows-1 md:grid-cols-2 sm:gap-4 md:gap-10 overflow-hidden">
      <div className="my-auto overflow-hidden rounded-sm">
        <img src={img_src} alt={title.toLowerCase() + " web view"} />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start py-4 lg:py-0 px-4 sm:pr-4">
        <H3 innerText={title} customClasses="text-cerulean" />
        <p className="text-md sm:text-lg text-gray-700 mb-4">{summary}</p>
        <a
          href={github_link}
          target="_blank"
          className="text-cerulean font-bold inline-block mx-auto md:mx-0 md:self-start"
          style={{ borderBlockEnd: "2px solid", lineHeight: "1rem" }}
        >
          View on Github
        </a>
      </div>
    </article>
  );
};

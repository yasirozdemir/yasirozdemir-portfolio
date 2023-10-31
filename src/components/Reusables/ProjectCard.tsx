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
    <article className="project_card rounded-sm shadow-2xl grid grid-rows-1 sm:grid-cols-2 gap-4 sm:gap-10 overflow-hidden">
      <div className="my-auto overflow-hidden rounded-sm">
        <img src={img_src} alt={title.toLowerCase() + " web view"} />
      </div>
      <div className="flex flex-col justify-center pb-4 sm:pb-0 px-4 sm:px-0">
        <H3 innerText={title} customClasses="text-cyan-700" />
        <p className="text-md sm:text-lg text-gray-700 mb-4">{summary}</p>
        <a href={github_link} target="_blank">
          Github Repository
        </a>
      </div>
    </article>
  );
};

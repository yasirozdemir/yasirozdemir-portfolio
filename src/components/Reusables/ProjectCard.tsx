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
    <article className="project_card rounded-sm shadow-2xl grid grid-rows-1 md:grid-cols-2 sm:gap-4 md:gap-10 overflow-hidden bg-french_gray">
      <div className="my-auto overflow-hidden rounded-sm">
        <img src={img_src} alt={title.toLowerCase() + " web view"} />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start py-4 lg:py-0 px-4 sm:pr-4">
        <H3 innerText={title} customClasses="text-mikado_yellow" />
        <p className="text-md sm:text-lg  mb-4">{summary}</p>
        <a
          href={github_link}
          target="_blank"
          className="text-mikado_yellow font-bold inline-block mx-auto md:mx-0 md:self-start border-b-[2px] border-oxford_blue leading-4"
        >
          View on Github
        </a>
      </div>
    </article>
  );
};

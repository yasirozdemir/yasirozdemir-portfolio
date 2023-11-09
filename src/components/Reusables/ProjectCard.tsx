import { IProject } from "../../data";
import { H3 } from "./H3";

export const ProjectCard = ({
  title,
  summary,
  github_url,
  img_src,
  youtube_url,
}: IProject) => {
  const linkClassList =
    "text-delft_blue hover:text-oxford_blue font-bold inline-block border-b-[2px] transition-all border-delft_blue hover:border-oxford_blue leading-4";
  return (
    <article className="rounded-sm shadow-2xl grid grid-rows-1 md:grid-cols-2 sm:gap-4 md:gap-10 overflow-hidden bg-french_gray">
      <div className="my-auto overflow-hidden rounded-l-sm">
        <img src={img_src} alt={title.toLowerCase() + " web view"} />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start py-4 lg:py-0 px-4 sm:pr-10">
        <H3 innerText={title} customClasses="text-oxford_blue" />
        <p className="text-md sm:text-lg mb-4 text-delft_blue -mt-2">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <a href={github_url} target="_blank" className={linkClassList}>
            View on Github
          </a>
          {typeof youtube_url === "string" && (
            <a href={youtube_url} target="_blank" className={linkClassList}>
              View on YouTube
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

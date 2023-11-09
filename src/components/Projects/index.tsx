import { projects } from "../../data";
import { H3 } from "../Reusables/H3";
import { ProjectCard } from "../Reusables/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <div className="container">
        <div className="flex flex-col">
          <H3 innerText="Projects" customClasses="text-center text-white" />
          <p className="text-md sm:text-lg  text-center mb-4">
            You can visit my{" "}
            <a
              href="https://github.com/yasirozdemir"
              target="_blank"
              className="text-mikado_yellow font-bold inline-block border-b-[2px] border-mikado_yellow leading-6"
            >
              Github
            </a>{" "}
            account to see more projects, and source codes!
          </p>
        </div>
        <div className="projects-container mt-10">
          {projects.map(
            ({ title, summary, github_url, img_src, youtube_url }, i) => (
              <ProjectCard
                key={i}
                title={title}
                summary={summary}
                github_url={github_url}
                img_src={img_src}
                youtube_url={youtube_url}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

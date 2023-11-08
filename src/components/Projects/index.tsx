import { projects } from "../../data";
import { H3 } from "../Reusables/H3";
import { ProjectCard } from "../Reusables/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <div className="container">
        <div className="flex flex-col">
          <H3 innerText="Projects" customClasses="text-center" />
          <p className="text-md sm:text-lg  text-center mb-4">
            You can visit my{" "}
            <a
              href="https://github.com/yasirozdemir"
              target="_blank"
              className="text-mikado_yellow font-bold inline-block border-b-[2px] border-oxford_blue leading-4"
            >
              Github
            </a>{" "}
            account to see more projects, and source codes!
          </p>
        </div>
        <div className="projects-container mt-10">
          {projects.map(({ title, summary, github_link, img_src }, i) => (
            <ProjectCard
              key={i}
              title={title}
              summary={summary}
              github_link={github_link}
              img_src={img_src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

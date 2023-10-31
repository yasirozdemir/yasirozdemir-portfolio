import { projects } from "../../data";
import { H3 } from "../Reusables/H3";
import { ProjectCard } from "../Reusables/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pb-20">
      <div className="custom-container">
        <div className="flex flex-col">
          <H3 innerText="Projects" customClasses="text-center" />
          <p className="text-md sm:text-lg text-gray-700 text-center mb-4">
            You can visit my{" "}
            <a
              href="https://github.com/yasirozdemir"
              target="_blank"
              className="text-cyan-700 font-bold inline-block"
              style={{ borderBlockEnd: "2px solid", lineHeight: "1rem" }}
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
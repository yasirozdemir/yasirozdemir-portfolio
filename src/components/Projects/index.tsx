import { H3 } from "../Reusables/H3";
import { LinkPrimary } from "../Reusables/LinkPrimary";

const Projects = () => {
  return (
    <section id="projects" className="pb-20">
      <div className="custom-container">
        <div>
          <H3 innerText="Projects" customClasses="text-center" />
          <p className="text-md sm:text-lg text-gray-700 text-center mb-4">
            You can visit my Github account to see more projects, and source
            codes!
          </p>
          <LinkPrimary
            href="https://github.com/yasirozdemir"
            innerText="Github"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

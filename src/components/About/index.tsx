import { languages, hardSkills, softSkills } from "../../data";
import { H3 } from "../Reusables/H3";

const About = () => {
  const classList =
    "px-4 py-2 rounded-md text-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)_inset]";

  return (
    <section id="about" className="py-10">
      <div className="custom-container">
        <div className="grid grid-rows-1 sm:grid-cols-2 gap-10">
          <div>
            <H3 innerText="Get to know me!" />
            <p className="mb-4 text-md sm:text-lg text-gray-700">
              As a Full-Stack Developer, I enjoy creating{" "}
              <b className="text-cerulean">innovative</b> and
              <b className="text-cerulean"> impactful</b> solutions using
              cutting-edge technologies. I have recently graduated from EPICODE,
              a rigorous and intensive full-stack developer boot camp that
              taught me how to use
              <b className="text-cerulean">
                {" "}
                TypeScript, React, Node.js, Express.js, and MongoDB
              </b>{" "}
              to build scalable and user-friendly web applications.
            </p>
            <p className="text-md sm:text-lg text-gray-700">
              I also have{" "}
              <b className="text-cerulean"> diverse international experience</b>
              , having worked at Great Wolf Lodge in the United States, an
              Erasmus+ project participation in France, and online digital
              mentorship at Rome Business School. Through these opportunities, I
              developed my
              <b className="text-cerulean">
                {" "}
                teamwork, communication, and intercultural skills,
              </b>{" "}
              while learning from colleagues with different backgrounds and
              perspectives.{" "}
              <b className="text-cerulean">I am looking for a job</b> as a
              full-stack developer in a dynamic and innovative company where I
              can keep enhancing my skills, contribute to exciting projects, and
              make a difference.
            </p>
          </div>
          <div>
            <div className="mb-10">
              <H3 innerText="Hard Skills" />
              <ul className="flex flex-wrap gap-3">
                {hardSkills.map((skill, i) => (
                  <li
                    key={i}
                    className={classList}
                    style={{
                      backgroundColor: skill.bg,
                    }}
                  >
                    {skill.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <H3 innerText="Soft Skills" />
              <ul className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <li key={i} className={classList + " bg-cerulean"}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <H3 innerText="Languages" />
              <ul className="flex flex-wrap gap-3">
                {languages.map((l, i) => (
                  <li key={i} className={classList + " bg-cerulean"}>
                    {l.lan}: <i>{l.level}</i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

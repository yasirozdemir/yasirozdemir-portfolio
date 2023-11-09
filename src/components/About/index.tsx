import {
  languages,
  hardSkills,
  softSkills,
  textLinkClassList,
} from "../../data";
import { H3 } from "../Reusables/H3";

const About = () => {
  const badgeClassList =
    "px-4 py-2 rounded-md text-[#CFCFCF] shadow-[0_0_15px_0_rgba(0,0,0,0.5)_inset] bg-oxford_blue font-semibold";

  const pClassList = "text-md md:text-lg";

  return (
    <section id="about" className="py-10">
      <div className="container">
        <div className="grid grid-rows-1 md:grid-cols-2 gap-10">
          <div>
            <H3 innerText="Get to know me!" customClasses="text-white" />
            <p className={pClassList + " mb-4"}>
              As a Full-Stack Developer, I enjoy creating{" "}
              <span className="text-mikado_yellow">innovative</span> and
              <span className="text-mikado_yellow"> impactful</span> solutions
              using cutting-edge technologies. I have recently graduated from
              EPICODE, a rigorous and intensive full-stack developer boot camp
              that taught me how to use
              <span className="text-mikado_yellow">
                {" "}
                TypeScript, React, Node.js, Express.js, and MongoDB
              </span>{" "}
              to build scalable and user-friendly web applications.
            </p>
            <p className={pClassList + " mb-4"}>
              I also have{" "}
              <span className="text-mikado_yellow">
                {" "}
                diverse international experience
              </span>
              , having worked at Great Wolf Lodge in the United States, an
              Erasmus+ project participation in France, and online digital
              mentorship at Rome Business School. Through these opportunities, I
              developed my
              <span className="text-mikado_yellow">
                {" "}
                teamwork, communication, and intercultural skills
              </span>{" "}
              while learning from colleagues with different backgrounds and
              perspectives.{" "}
              <span className="text-mikado_yellow">
                I am looking for a job
              </span>{" "}
              as a full-stack developer in a dynamic and innovative company
              where I can keep enhancing my skills, contribute to exciting
              projects, and make a difference.
            </p>
            <p className={pClassList}>
              In addition to my professional identity, I have a different list
              of hobbies. The first one is{" "}
              <span className="text-mikado_yellow">aviation</span>. I have
              always been an aviation geek since I was a kid. I like to spend
              time on flightradar24. Second,{" "}
              <span className="text-mikado_yellow">I love to take photos</span>{" "}
              with my phone while I travel around the globe. You can check my{" "}
              <a
                href="https://www.instagram.com/yasirunofficial_"
                target="_blank"
                className={textLinkClassList}
              >
                Instagram
              </a>{" "}
              to see the photos taken by me. Adding to these two, I like{" "}
              <span className="text-mikado_yellow">
                riding a bike, hiking, working out at the gym, reading books,
                watching series, and listening to music and podcasts.
              </span>
            </p>
          </div>
          <div>
            <div className="mb-10">
              <H3 innerText="Hard Skills" customClasses="text-white" />
              <ul className="flex flex-wrap gap-3">
                {hardSkills.map((skill, i) => (
                  <li
                    key={i}
                    className={badgeClassList}
                    // style={{
                    //   backgroundColor: skill.bg,
                    // }}
                  >
                    {skill.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <H3 innerText="Soft Skills" customClasses="text-white" />
              <ul className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <li key={i} className={badgeClassList}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <H3 innerText="Languages" customClasses="text-white" />
              <ul className="flex flex-wrap gap-3">
                {languages.map((l, i) => (
                  <li key={i} className={badgeClassList}>
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

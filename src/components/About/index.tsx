const About = () => {
  const classList = "px-4 py-2 rounded-md shadow-md bg-cyan-700 text-white";

  return (
    <section id="about">
      <div className="custom-container py-20">
        <div className="max-w-sm mx-auto">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
            alt=""
            className="w-100 shadow-2xl"
            style={{ borderRadius: "70% 30% 70% 30% / 30% 73% 27% 70% " }}
          />
        </div>
        <div className="mt-20 grid grid-rows-1 sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-2xl sm:text-3xl mb-6">
              Get to know me!
            </h3>
            <p className="mb-4 text-lg text-gray-700">
              As a Full-Stack Developer, I enjoy creating <b>innovative</b> and
              <b> impactful</b> solutions using cutting-edge technologies. I
              have recently graduated from EPICODE, a rigorous and intensive
              full-stack developer boot camp that taught me how to use
              <b> TypeScript, React, Node.js, Express, and MongoDB</b> to build
              scalable and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-700">
              I also have <b> diverse international experience</b>, having
              worked at Great Wolf Lodge in the United States, an Erasmus+
              project participation in France, and online digital mentorship at
              Rome Business School. Through these opportunities, I developed my
              <b> teamwork, communication, and intercultural skills,</b> while
              learning from colleagues with different backgrounds and
              perspectives. <b>I am looking for a job</b> as a full-stack
              developer in a dynamic and innovative company where I can keep
              enhancing my skills, contribute to exciting projects, and make a
              difference.
            </p>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="font-bold text-2xl sm:text-3xl mb-6">Skills</h3>
              <ul className="flex flex-wrap gap-3">
                <li className={classList}>HTML</li>
                <li className={classList}>CSS</li>
                <li className={classList}>Javascript</li>
                <li className={classList}>Typescript</li>
                <li className={classList}>React</li>
                <li className={classList}>Redux</li>
                <li className={classList}>Bootstrap</li>
                <li className={classList}>Tailwind</li>
                <li className={classList}>Node.js</li>
                <li className={classList}>Express</li>
                <li className={classList}>MongoDB</li>
                <li className={classList}>PostgreSQL</li>
                <li className={classList}>Vite.js</li>
                <li className={classList}>Postman API & Docs</li>
                <li className={classList}>OpenAI GPT 3.5 Turbo API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl sm:text-3xl mb-6">Languages</h3>
              <ul className="flex flex-wrap gap-3">
                <li className={classList}>
                  Turkish: <i>Native</i>
                </li>
                <li className={classList}>
                  English : <i>Professional</i>
                </li>
                <li className={classList}>
                  German: <i>Beginner</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

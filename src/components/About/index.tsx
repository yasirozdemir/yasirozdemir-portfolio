import CV from "../../../public/assets/M_Yasir_Ozdemir_CV.pdf";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-10 bg-primary">
      <div className="custom-container mx-auto text-center md:text-left">
        <h3 className="text-3xl md:indent-6 font-bold mb-4">About Me</h3>
        <p className="text-xl md:indent-6 leading-6 mb-6 font-semibold">
          I'm a recent graduate of the EPICODE full-stack developer boot camp,
          skilled in TypeScript, React, Node.js, Express, and MongoDB. My
          international experiences have honed my teamwork and communication
          skills. I'm seeking a full-stack developer role in an innovative
          company to continue learning and contribute to impactful projects. I
          also like to take photographs and share them on Instagram while I'm
          traveling around the globe.
        </p>
        <ul className="flex gap-4 justify-center md:justify-start items-center flex-wrap">
          <li>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-light"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yasirozdemir/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yasirozdemir/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yasirunofficial_/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@muhammedyasirozdemir/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@MuhammedYasirOzdemir"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

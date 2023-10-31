import Linkedin from "../../../public/assets/svgs/linkedin.svg";
import Github from "../../../public/assets/svgs/github.svg";
import Instagram from "../../../public/assets/svgs/instagram.svg";
import Youtube from "../../../public/assets/svgs/youtube.svg";
import Medium from "../../../public/assets/svgs/medium.svg";

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white">
      <ul className="flex flex-wrap py-4 justify-center items-center gap-4">
        <li>
          <a href="https://www.linkedin.com/in/yasirozdemir" target="_blank">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/yasirozdemir" target="_blank">
            <img src={Github} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yasirunofficial_" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@MuhammedYasirOzdemir" target="_blank">
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@muhammedyasirozdemir" target="_blank">
            <img src={Medium} alt="Medium" />
          </a>
        </li>
      </ul>
      <div className="text-center pb-4" style={{ color: "#f0f0f0" }}>
        2023 © Yasir Ozdemir
      </div>
    </footer>
  );
};

export default Footer;

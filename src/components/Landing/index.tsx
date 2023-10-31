import "../../styles/landing.css";
import { LinkPrimary } from "../Reusables/LinkPrimary";

const Landing = () => {
  return (
    <section id="landing" className="h-dynamic-screen">
      <div className="flex flex-col justify-center items-center h-full z-10">
        <div className="text-3xl text-center md:text-4xl lg:text-5xl">
          Hey, I'm{" "}
          <span className="font-black text-cyan-700">Yasir Ozdemir</span>
          <br />
          I'm a Full-Stack Developer
        </div>
        <LinkPrimary href="#about" innerText="ABOUT ME" customClasses="mt-10" />
      </div>
    </section>
  );
};

export default Landing;

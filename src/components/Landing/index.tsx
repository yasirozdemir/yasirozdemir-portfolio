import { useEffect, useState } from "react";
import bgUrl from "../../../public/assets/boston.jpg";
import picUrl from "../../../public/assets/myo.png";
import "../../styles/landing.css";

const Landing = () => {
  const initialBgOpc = 0.75;
  const [opacity, setOpacity] = useState(initialBgOpc);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const opc = Math.max(initialBgOpc - window.scrollY / maxScroll, 0);
      setOpacity(opc);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="landing" className="flex flex-col-reverse h-screen">
      <div
        id="pic-container"
        className="flex items-end justify-center sm:justify-start absolute-full-page"
      >
        <img src={picUrl} alt="Picture of M. Yasir Ozdemir" />
      </div>
      <div
        id="landing-content"
        className="absolute-full-page flex flex-col justify-center items-center"
      >
        <div className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl px-2 sm:px-0 mx-auto font-secondary">
          <span className="xl:ml-20">Hello, I'm</span>
          <h1 className="">
            <span className="hidden sm:inline-block">Muhammed</span>
            <span className="sm:hidden">M.</span>
            <span> Yasir Ozdemir</span>
          </h1>
          <h2 className="text-right lg:mr-14">Full-Stack Developer</h2>
        </div>
        <button type="button">Scroll down to learn more about me!</button>
      </div>
      <div
        id="landing-background"
        className="absolute-full-page"
        style={{
          opacity,
          backgroundImage: `url(${bgUrl})`,
        }}
      />
    </div>
  );
};

export default Landing;

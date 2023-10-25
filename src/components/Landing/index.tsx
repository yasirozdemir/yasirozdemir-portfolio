import { useEffect, useState } from "react";
import bgUrl from "../../../public/assets/boston.jpg";
import picUrl from "../../../public/assets/myo.png";
import "../../styles/landing.css";
import TypewriterComponent from "typewriter-effect";

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
        <div className="mx-auto font-secondary">
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              cursor: "|",
              cursorClassName:
                "Typewriter__cursor text-2xl md:text-3xl lg:text-5xl xl:text-6xl",
              wrapperClassName:
                "Typewriter__wrapper lg:ml-14 text-2xl md:text-3xl lg:text-5xl xl:text-6xl",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Hallo, ich bin")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Merhaba, ben")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl">
            <span className="hidden sm:inline-block">Muhammed</span>
            <span className="sm:hidden">M.</span>
            <span> Yasir Ozdemir</span>
          </h1>
          <h2 className="lg:mr-14 text-right text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            <span>Full-Stack Dev</span>
            <span className="hidden sm:inline-block">eloper</span>
          </h2>
        </div>
        <a href="#about">Learn more about me!</a>
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

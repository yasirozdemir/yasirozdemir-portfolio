import { useState, useEffect } from "react";
import bgUrl from "../../../public/assets/boston.jpg";
import picUrl from "../../../public/assets/myo.png";

const Landing = () => {
  const initialOpc = 0.75;
  const [opacity, setOpacity] = useState(initialOpc);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const opc = Math.max(initialOpc - window.scrollY / maxScroll, 0);
      setOpacity(opc);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="landing" className="flex flex-col-reverse h-screen">
      <div id="pic-container" className="">
        <img src={picUrl} alt="Picture of M. Yasir Ozdemir" className="w-100" />
      </div>
      <div className="flex flex-col h-100">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl px-2 sm:px-0 mx-auto font-secondary">
          <span className="lg:ml-20">Hello, I'm</span>
          <h1 className="">Muhammed Yasir Ozdemir</h1>
          <h2 className="text-right lg:mr-20">Full-Stack Developer</h2>
        </div>
        <button type="button">Scroll down to learn more about me!</button>
      </div>
      <div
        className="landing-background"
        style={{
          opacity,
          backgroundImage: `url(${bgUrl})`,
        }}
      />
    </div>
  );
};

export default Landing;

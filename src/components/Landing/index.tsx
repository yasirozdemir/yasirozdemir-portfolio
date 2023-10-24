import { useState, useEffect } from "react";

const Landing = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const opacity = Math.max(1 - window.scrollY / maxScroll, 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="landing"
      className="flex flex-col justify-center align-center relative h-screen"
    >
      <div id="title-subtitle-container" className="px-4">
        <h1 className="text-center text-3xl font-extrabold">
          Muhammed Yasir Ozdemir
        </h1>
        <h2 className="text-center text-xl font-extrabold">
          Full Stack Developer
        </h2>
      </div>
      <div id="picture-container" className="rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
          alt="pfp"
        />
      </div>
      <div className="landing-background" style={{ opacity: scrollOpacity }} />
    </div>
  );
};

export default Landing;

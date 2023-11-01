import TypewriterComponent from "typewriter-effect";

const Landing = () => {
  return (
    <section id="landing" className="h-dynamic-screen">
      <div className="flex flex-col justify-center items-center h-full z-10">
        <div className="mb-10 max-w-[15rem] sm:max-w-sm">
          <img
            src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
            alt="Yasir Ozdemir Photo"
            className="w-100 shadow-2xl"
            style={{ borderRadius: "70% 30% 70% 30% / 30% 73% 27% 70%" }}
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-cyan-700">
            Yasir Ozdemir
          </h1>
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              cursor: "|",
              cursorClassName: "Typewriter__cursor text-2xl md:text-3xl",
              wrapperClassName:
                "Typewriter__wrapper text-2xl md:text-3xl font-secondary",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Full-Stack Developer")
                .pauseFor(5000)
                .deleteChars(9)
                .typeString("Entwickler")
                .pauseFor(5000)
                .deleteChars(10)
                .typeString("Geliştirici")
                .pauseFor(5000)
                .deleteChars(11)
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;

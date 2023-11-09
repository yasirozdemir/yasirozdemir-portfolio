import TypewriterComponent from "typewriter-effect";
import { CV_URLs } from "../../data";

const Landing = () => {
  const landingLinkClassNames =
    "border-b-[3px] text-white border-white transition-all duration-300 hover:text-mikado_yellow hover:border-mikado_yellow";
  return (
    <section id="landing" className="h-dynamic-screen relative bg-oxford_blue">
      <div className="absolute top-0 h-[50%] w-full bg-cover bg-center bg-oxford_blue bg-[url(https://res.cloudinary.com/yasirdev/image/upload/v1680299481/portfolio/bg_yfxulf.jpg)]" />
      <div className="flex flex-col justify-center items-center h-full z-10 relative">
        <div
          className="mb-10 max-w-[15rem] sm:max-w-sm overflow-hidden shadow-2xl border-[8px] border-oxford_blue"
          style={{ borderRadius: "70% 30% 70% 30% / 30% 73% 27% 70%" }}
        >
          <img
            src="/assets/yo.jpeg"
            alt="Yasir Ozdemir Photo"
            className="w-100"
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-mikado_yellow">
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
        <div className="absolute bottom-4 md:h-[60px] flex flex-col md:flex-row gap-2 md:gap-6 mt-10 text-lg md:text-xl font-extrabold items-center justify-center">
          <a href="#about" className={landingLinkClassNames}>
            Get to know me
          </a>
          <span className="hidden md:inline-block text-gray-500">or</span>
          <a
            href={CV_URLs.EN}
            target="_blank"
            className={landingLinkClassNames}
          >
            View my resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;

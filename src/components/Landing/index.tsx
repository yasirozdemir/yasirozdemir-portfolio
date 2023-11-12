import TypewriterComponent from "typewriter-effect";
import { CV_URLs } from "../../data";

const Landing = () => {
  const landingLinkClassNames =
    "border-b-[2px] text-white border-white transition-all duration-300 hover:text-mikado_yellow hover:border-mikado_yellow";

  return (
    <section id="landing" className="h-dynamic-screen relative bg-oxford_blue">
      <div className="h-full grid grid-rows-2">
        <div className="bg-[url(https://res.cloudinary.com/yasirdev/image/upload/v1680299481/portfolio/bg_yfxulf.jpg)] flex justify-center items-end bg-no-repeat bg-cover bg-center">
          <div
            className="max-w-[15rem] sm:max-w-sm overflow-hidden shadow-2xl border-[8px] border-oxford_blue translate-y-1/4 sm:translate-y-1/3"
            style={{ borderRadius: "70% 30% 70% 30% / 30% 73% 27% 70%" }}
          >
            <img
              src="/assets/yo.jpeg"
              alt="Yasir Ozdemir Photo"
              className="max-w-full h-auto align-middle italic bg-no-repeat bg-cover bg-[url(/assets/yo-lowres.jpeg)]"
              width="500px"
              height="500px"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-mikado_yellow">
            Yasir Ozdemir
          </h1>
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              cursor: "|",
              cursorClassName:
                "Typewriter__cursor text-xl sm:text-2xl md:text-3xl",
              wrapperClassName:
                "Typewriter__wrapper text-xl sm:text-2xl md:text-3xl font-secondary",
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
        <div className="mt-auto mb-5 flex flex-col md:flex-row gap-2 md:gap-6 sm:text-lg md:text-xl font-bold items-center justify-center">
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

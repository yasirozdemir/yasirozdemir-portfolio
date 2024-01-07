import { ResumeSrc } from "../../data";

const Landing = () => {
  const landingLinkClassNames =
    "border-b-[2px] text-white border-white transition-all duration-300 hover:text-mikado_yellow hover:border-mikado_yellow";

  return (
    <section id="landing" className="h-dynamic-screen relative bg-oxford_blue">
      <div className="w-full h-full bg-[url(https://res.cloudinary.com/yasirdev/image/upload/v1680299481/portfolio/bg_yfxulf.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 bg-gradient-to-t from-oxford_blue to-[rgba(69,123,157,0)]">
          <div
            className="max-w-[15rem] sm:max-w-sm overflow-hidden shadow-2xl border-[8px] border-oxford_blue"
            style={{ borderRadius: "70% 30% 70% 30% / 30% 70% 30% 70%" }}
          >
            <img
              src="/assets/yo.jpeg"
              alt="Yasir Ozdemir Photo"
              className="max-w-full h-auto align-middle italic bg-no-repeat bg-cover bg-[url(/assets/yo-lowres.jpeg)]"
              width="500px"
              height="500px"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-mikado_yellow">
              Yasir Ozdemir
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-secondary">
              Full-Stack Developer & Amateur Photographer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

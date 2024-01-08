const Landing = () => {
  return (
    <section id="landing" className="h-dynamic-screen bg-oxford_blue">
      <div className="w-full h-full bg-[url(https://res.cloudinary.com/yasirdev/image/upload/v1680299481/portfolio/bg_yfxulf.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full grid grid-cols-1 grid-rows-[15fr_1fr] bg-gradient-to-t from-oxford_blue to-[rgba(69,123,157,0)]">
          <div className="flex flex-col justify-center items-center gap-8">
            <div
              className="max-w-[15rem] sm:max-w-sm overflow-hidden border-[6px] border-oxford_blue"
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
            <div className="flex flex-col justify-center items-center px-4 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-mikado_yellow mb-1">
                Yasir Ozdemir
              </h1>
              <h2 className="text-2xl md:text-3xl font-secondary tracking-wider">
                <p>Full-Stack Developer</p>
                {/* <p>Amateur Photographer</p> */}
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col text-center pb-4">
            <a href="#about">
              <svg
                id="scroll-indicator"
                viewBox="0 0 64 64"
                height="64"
                width="64"
              >
                <path
                  fill="none"
                  strokeLinejoin="bevel"
                  strokeMiterlimit={10}
                  strokeWidth={4}
                  d="M48.936 31l-17 17-17-17"
                />
                <path
                  fill="none"
                  strokeLinejoin="bevel"
                  strokeMiterlimit={10}
                  strokeWidth={4}
                  d="M48.936 16l-17 17-17-17"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

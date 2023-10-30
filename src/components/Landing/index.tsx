import "../../styles/landing.css";

const Landing = () => {
  return (
    <section id="landing" className="h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-3xl text-center md:text-4xl lg:text-5xl">
          Hello, I'm <span className="font-black">Yasir Ozdemir</span>
          <br />
          I'm a Full-Stack Developer
        </div>
        <a
          href="#about"
          type="button"
          className="text-white text-xl font-bold bg-cyan-800 px-8 py-4 rounded-lg shadow-lg mt-10 "
        >
          ABOUT ME
        </a>
      </div>
    </section>
  );
};

export default Landing;

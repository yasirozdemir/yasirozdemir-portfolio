import "../../styles/landing.css";

const Landing = () => {
  return (
    <section id="landing" className="h-screen relative">
      <div className="absolute w-full h-full bg-red-50 -z-10">
        <img src="../../../public/assets/boston.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center h-full z-10">
        <div className="text-3xl text-center md:text-4xl lg:text-5xl">
          Hey, I'm{" "}
          <span className="font-black text-cyan-700">Yasir Ozdemir</span>
          <br />
          I'm a Full-Stack Developer
        </div>
        <a
          href="#about"
          type="button"
          className="text-white text-xl font-bold bg-cyan-700 px-8 py-4 rounded-lg shadow-lg mt-10 "
        >
          ABOUT ME
        </a>
      </div>
    </section>
  );
};

export default Landing;

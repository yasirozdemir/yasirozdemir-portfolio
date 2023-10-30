import "../../styles/landing.css";

const Landing = () => {
  return (
    <section id="landing">
      {/* <div className="max-w-sm">
        <img
          src="https://res.cloudinary.com/yasirdev/image/upload/v1679173887/portfolio/pfp_zk9j0d.jpg"
          alt=""
          className="w-100"
          style={{ borderRadius: "70% 30% 70% 30% / 30% 73% 27% 70% " }}
        />
      </div> */}
      <div className="custom-container">
        <div className="text-3xl text-center md:text-4xl lg:text-5xl">
          Hello, I'm <span className="font-black">Yasir Ozdemir</span>
          <br />
          I'm a Full-Stack Developer
        </div>
      </div>
    </section>
  );
};

export default Landing;

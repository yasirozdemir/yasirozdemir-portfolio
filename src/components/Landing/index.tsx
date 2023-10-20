const Landing = () => {
  return (
    <div>
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
    </div>
  );
};

export default Landing;

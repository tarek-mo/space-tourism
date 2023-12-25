import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="home-main min-h-screen bg-center bg-cover bg-no-repeat flex items-center lg:items-end pb-7 md:pb-20 lg:pb-32 px-6 text-center lg:text-left pt-48">
      <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-20 md:gap-40 lg:gap-0 items-center lg:justify-between">
        <div>
          <h5 className="text-h5m md:text-h5t lg:text-h5 font-barlowcond tracking-wide">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-w text-h1m md:text-h1 font-bellefair uppercase">
            Space
          </h1>

          <p className="max-w-md leading-6 md:leading-7 lg:leading-8">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className="transform w-36 h-36 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full bg-w flex items-center justify-center z-10 hover:scale-110 transition-all duration-300"
        >
          <h4 className="uppercase text-b text-h5m md:text-h4 font-bellefair">
            Explore
          </h4>
        </Link>
      </div>
    </main>
  );
};

export default Home;

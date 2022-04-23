import { useState } from "react";
import { destinations } from "../data.json";
const SingleDestination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:ml-16 lg:gap-3">
      <div className="w-planetM md:w-planetT lg:w-planetD mb-7 md:mb-14 lg:mb-0">
        <img
          className="w-full"
          src={require(`../assets/destination/${images.png}`).default}
          alt={name}
        />
      </div>
      <div>
        <ul className="flex gap-6 md:gap-9 justify-center lg:justify-start">
          {planets.map((planet, index) => {
            return (
              <li className="pb-2 md:pb-3 font-barlowcond" key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={
                    value === index
                      ? "uppercase pb-3 transition-all duration-300 hover:text-w tracking-wide border-b-3 border-w "
                      : "uppercase pb-3 text-lb transition-all duration-300 hover:text-w tracking-wide"
                  }
                >
                  {planet.name}
                </button>
              </li>
            );
          })}
        </ul>
        <h2 className="uppercase text-h3 md:text-h1m lg:text-h2 mb-3 mt-5 lg:mb-10 lg:mt-9 md:mt-8 md:mb-7 font-bellefair">
          {name}
        </h2>
        <p className="text-lb max-w-md pb-1.5 mb-12 lg:text-lg leading-6 md:leading-7 lg:leading-8">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-x-20 gap-y-8 border-t border-g pt-8 md:pt-7">
          <div>
            <span className="text-lb text-sm font-barlowcond text-lb tracking-wide">
              AVG. DISTANCE
            </span>
            <h4 className="mt-3 uppercase text-xl font-bellefair">
              {distance}
            </h4>
          </div>
          <div>
            <span className="uppercase text-lb text-sm font-barlowcond text-lb tracking-wide">
              Est. travel time
            </span>
            <h4 className="mt-3 uppercase text-xl font-bellefair">{travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;

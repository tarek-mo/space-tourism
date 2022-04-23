import { useState } from "react";
import { technology } from "../../data.json";
const Technology = () => {
  const [techs] = useState(technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = techs[value];

  return (
    <main className="text-w technology-main min-h-screen bg-center bg-cover bg-no-repeat lg:pl-6 text-center lg:text-left pt-32 lg:pt-48 pb-20 md:pb-24">
      <div className="container text-center lg:text-left max-w-7xl ml-auto">
        <h5 className="text-w lg:text-xl font-barlowcond tracking-wide uppercase mb-8 md:mb-14 lg:mb-6 md:text-left text-base md:text-2xl  md:ml-6 lg:ml-0">
          <span className="mr-7 opacity-25 font-bold">03</span>
          Space launch 101
        </h5>
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-4 lg:gap-8 lg:mr-20 mb-7 md:mb-11 lg:mb-0">
            {techs.map((tech, index) => (
              <button
                onClick={() => setValue(index)}
                className={
                  index === value
                    ? "transform w-10 h-10 md:w-16 md:h-16 lg:w-20	lg:h-20 bg-w hover:bg-w rounded-full font-bellefair text-db hover:text-db text-base md:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300 border-1 border-g"
                    : "transform w-10 h-10 md:w-16 md:h-16 lg:w-20	lg:h-20 bg-transparent hover:bg-w rounded-full font-bellefair text-w hover:text-db text-base md:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300 border-1 border-g"
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="order-1 lg:order-2 mx-6 md:mx-0">
            <h4 className="uppercase mb-2	lg:mb-3	md:mb-4 font-barlowcond text-lb">
              the terminology
            </h4>
            <h2 className="uppercase font-bellefair lg:text-h3 sm:text-h5t md:text-4xl leading-tight mb-4">
              {name}
            </h2>
            <p className="md:w-112 lg:w-120 text-lb leading-6 md:leading-7 lg:leading-8">
              {description}
            </p>
          </div>
          <div className="lg:ml-auto lg:pl-5 self-stretch order-3 mb-8 md:mb-14	lg:mb-0">
            <img
              className="hidden lg:block"
              src={require(`../../${images.portrait}`).default}
              alt={name}
            />
            <img
              className="lg:hidden w-full"
              src={require(`../../${images.landscape}`).default}
              alt={name}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;

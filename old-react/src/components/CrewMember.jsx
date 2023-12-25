const CrewMember = ({ name, role, bio, img }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col items-center lg:flex-row lg:justify-between relative">
        <div className="absolute swiper-pagination swiper-pagination-desk hidden lg:block"></div>
        <div className="relative md:pb-10">
          <h3 className="uppercase opacity-50 md:text-2xl lg:text-3xl font-bellefair">
            {role}
          </h3>
          <h2 className="uppercase font-bellefair lg:text-h3 sm:text-h5t md:text-4xl mt-3.75 leading-none">
            {name}
          </h2>
          <p className="max-w-md mt-7 text-lb leading-6 md:leading-7 lg:leading-8">
            {bio}
          </p>
          <div className="absolute swiper-pagination swiper-pagination-tablette hidden md:block lg:hidden"></div>
        </div>
        <div className="self-stretch lg:pb-0 md:pt-10 lg:pt-0 pb-8 md:pb-0 md:w-auto relative mb-8 md:mb-0">
          <div className="border-b-1 border-g md:border-b-0 md:w-auto mx-auto">
            <img
              className="w-44 md:w-112 md:h-144 h-56 lg:object-contain mx-auto lg:w-140"
              src={require(`../assets/crew/${img}`).default}
              alt=""
            />
          </div>

          <div className="absolute swiper-pagination swiper-pagination-mobile block md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default CrewMember;

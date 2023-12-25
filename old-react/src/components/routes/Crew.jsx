import CrewMember from "../CrewMember";
import crew from "../../data.json";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Crew = () => {
  return (
    <main className="text-w crew-main min-h-screen bg-center bg-cover bg-no-repeat px-6 text-center lg:text-left pt-32 lg:pt-48">
      <div className="container text-center lg:text-left max-w-screen-lg mx-auto">
        <h5 className="text-w lg:text-xl font-barlowcond tracking-wide uppercase mb-8 md:mb-14 lg:mb-0 md:text-left lg:absolute text-base md:text-2xl">
          <span className="mr-7 opacity-25 font-bold">01</span>
          Meet your crew
        </h5>
        <Swiper
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} inline-block w-2.5 h-2.5 lg:w-4 lg:h-4 bg-dg"></span>`;
            },
          }}
          modules={[Pagination, EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            crossFade: true,
          }}
          className="mySwiper"
        >
          {crew.map((member, index) => (
            <SwiperSlide key={index}>
              <CrewMember
                name={member.name}
                role={member.role}
                bio={member.bio}
                img={member.images.png}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Crew;

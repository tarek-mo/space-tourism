"use client";
import { crew } from "@/data.json";
import { EffectFade, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CrewMember from "./crew-member";
const Crew = () => {
  return (
    <Swiper
      //   pagination={{
      //     el: ".swiper-pagination",
      //     clickable: true,
      //     renderBullet: function (index, className) {
      //       return `<span class="${className} inline-block w-2.5 h-2.5 lg:w-4 lg:h-4 bg-dg"></span>`;
      //     },
      //   }}
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
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
            images={member.images}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Crew;

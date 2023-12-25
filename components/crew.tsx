"use client";
import { crew } from "@/data.json";
// @ts-ignore
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CrewMember from "./crew-member";
const Crew = () => {
  return (
    <Swiper
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} inline-block w-2.5 h-2.5 lg:w-4 lg:h-4 bg-dg hover:bg-w rounded-full cursor-pointer"></span>`;
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
      {crew.map((member) => (
        <SwiperSlide key={member.id}>
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

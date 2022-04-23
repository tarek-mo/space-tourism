import { React } from "react";
import { useSwiper } from "swiper/react/swiper-react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { slider } from "../data";

export const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      navigation={true}
      modules={[Navigation]}
    >
      {slider.map((slide, index) => {
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            key={index}
            className="cursor-grab active:cursor-grabbing p-4 rounded-lg lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]"
          >
            <p className="text-[15px] mb-8 min-h-[100px] ">{message}</p>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div className="w-14 mb-3 md:mb-0">
                <img src={image} alt="" />
              </div>
              <div>
                <p className="text-base font-medium">{name}</p>
                <p className="text-rose-600 font-medium">{email}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";

export const Testimonial = () => {
  return (
    <section className="mb-80 sm:mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2
              className="font-bold text-3xl mb-6"
              data-aos="fade-up"
              data-aos-offset="800"
              data-aos-delay="500"
            >
              What our clients say
            </h2>
            <p
              className="mx-auto mb-12 max-w-2xl lg:mb-24"
              data-aos="fade-up"
              data-aos-offset="800"
              data-aos-delay="800"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit doloremque tempore necessitatibus maxime odit itaque
              velit, nostrum amet suscipit sapiente!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-offset="800" data-aos-delay="1000">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
